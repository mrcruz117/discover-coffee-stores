import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import NearbyCoffeeStores from "@/components/nearby-coffee-stores.client";
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from "@/types";
import { getDomain } from "@/utils";
import { get } from "http";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

async function getStores() {
  // Tokyo
  const TOKYO_LONG_LAT = "139.77377541514397%2C35.67164056369268";
  return await fetchCoffeeStores(TOKYO_LONG_LAT, 6);
}

export const metadata: Metadata = {
  title: "Coffee Connosieur",
  description: "Find the best coffee shops in Tokyo!",
  metadataBase: getDomain(),
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const storeId = "dark-horse-coffee";
  const coffeeStores = await getStores();

  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <NearbyCoffeeStores />
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            Tokyo Stores
          </h2>
        </div>

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
      </main>
    </div>
  );
}
