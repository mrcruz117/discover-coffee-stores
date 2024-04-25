import { fetchCoffeeStore, fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData(id: string, queryId: string) {
  const coffeeStoreFromMapbox = await fetchCoffeeStore(id, queryId);
  // const _createCoffeeStore = await createCoffeeStore(coffeeStoreFromMapbox, id);

  // const voting = _createCoffeeStore ? _createCoffeeStore[0].voting : 0;

  return coffeeStoreFromMapbox
    ? {
        ...coffeeStoreFromMapbox,
        // voting,
      }
    : {};
}
export async function generateStaticParams() {
  const TOKYO_LONG_LAT = "139.77377541514397%2C35.67164056369268";
  const coffeeStores = await fetchCoffeeStores(TOKYO_LONG_LAT, 6);

  return coffeeStores.map((coffeeStore: CoffeeStoreType) => ({
    id: coffeeStore.id.toString(),
  }));
}

export default async function Page(props: {
  params: { id: string };
  searchParams: { id: string };
}) {
  const {
    params: { id },
    searchParams: { id: queryId },
  } = props;

  const coffeeStore = await getData(id, queryId);
  if (!coffeeStore) {
    // handle the case where store is undefined, e.g., return a loading screen or error message
    return <div>Loading...</div>;
  }

  console.log("store: ", coffeeStore);
  return (
    <div className="h-full pb-80">
      <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
        <div className="">
          <div className="mb-2 mt-24 text-lg font-bold">
            <Link href="/">← Back to home</Link>
          </div>
          <div className="my-4">
            <h1 className="text-4xl">{coffeeStore.name}</h1>
          </div>
          <Image
            src={coffeeStore.imgUrl}
            width={740}
            height={360}
            className="max-h-[420px] min-w-full max-w-full rounded-lg border-2 sepia lg:max-w-[470px] "
            alt={"Coffee Store Image"}
          />
        </div>

        <div className={`glass mt-12 flex-col rounded-lg p-4 lg:mt-48`}>
          {coffeeStore.address && (
            <div className="mb-4 flex">
              {/* <Image
                src="/static/icons/places.svg"
                width="24"
                height="24"
                alt="places icon"
              /> */}
              <p className="pl-2">{coffeeStore.address}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
