import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function getStores() {
  return await fetchCoffeeStores();
}

export default async function Home() {
  const storeId = "dark-horse-coffee";
  const coffeeStores = await getStores();

  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            Toronto Stores
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
          {coffeeStores.map((store: CoffeeStoreType) => (
            <Card
              key={`${store.name}-${store.id}`}
              name={store.name}
              imgUrl={store.imgUrl}
              href={`/coffee-store/${store.id}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
