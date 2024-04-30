"use server";

import { updateCoffeeStore } from "@/lib/airtable";

export const upvoteAction = async (id: string) => {
  console.log("upvote action", id);

  const data = await updateCoffeeStore(id);
  console.log("data: ", data);
};
