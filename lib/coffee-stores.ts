import { MapboxType } from "@/types";

const transformCoffeeData = (store: MapboxType) => {
  return {
    id: store.id,
    name: store.text,
    address: store.properties?.address || "No address provided",
    imgUrl: `https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80`,
  };
};

export const fetchCoffeeStores = async () => {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/coffee.json?limit=6&proximity=139.77377541514397%2C35.67164056369268&access_token=${process.env.MAPBOX_API}`
    );

    const data = await res.json();

    return data.features.map((store: MapboxType) => transformCoffeeData(store));
  } catch (error) {
    console.error("Error fetching coffee stores", error);
  }
};
