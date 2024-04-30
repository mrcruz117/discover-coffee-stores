"use client";
import { useEffect, useState } from "react";
import Banner from "./banner.client";
import useTrackLocation from "@/hooks/use-track-location";
import Card from "./card.server";
import { CoffeeStoreType } from "@/types";
import { fetchCoffeeStores } from "@/lib/coffee-stores";

export default function NearbyCoffeeStores() {
  const { longLat, isFindingLocation, handleTrackLocation, locationErrorMsg } =
    useTrackLocation();

  const [coffeeStores, setCoffeeStores] = useState([]);

  const handleOnClick = () => {
    handleTrackLocation();
  };

  useEffect(() => {
    async function coffeeStoresByLocation() {
      try {
        const limit = 10;
        const res = await fetch(
          `/api/getCoffeeStoresByLocation?longLat=${longLat}&limit=${limit}`
        );

        const stores = await res.json();
        setCoffeeStores(stores);
      } catch (error) {
        console.error("Error: ", error);
      }
    }

    if (longLat) coffeeStoresByLocation();
  }, [longLat]);

  return (
    <div>
      <Banner
        handleOnClick={handleOnClick}
        buttonText={isFindingLocation ? "Loading..." : "View Stores Nearby"}
      />
      {locationErrorMsg && <div>{locationErrorMsg}</div>}
      {coffeeStores.length > 0 && (
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            Nearby Stores
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
            {coffeeStores.map((store: CoffeeStoreType, idx: number) => (
              <Card
                key={`${store.name}-${store.id}`}
                name={store.name}
                imgUrl={store.imgUrl}
                href={`/coffee-store/${store.id}?id=${idx}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
