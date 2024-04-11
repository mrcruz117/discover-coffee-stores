import { fetchCoffeeStore } from "@/lib/coffee-stores";
import Link from "next/link";
import React from "react";

async function getStore(id: string) {
  return await fetchCoffeeStore(id);
}

export default async function page(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;

  const store = await getStore(id);

  console.log("store: ", store);
  return (
    <div className="h-full pb-80">
      <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
        <div className="mb-s mt-24 text-lg font-bold">
          <Link href="/">🠔 Home</Link>
        </div>
      </div>
    </div>
  );
}
