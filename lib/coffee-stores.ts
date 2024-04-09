export const fetchCoffeeStores = async () => {
  const res = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/coffee.json?proximity=139.77377541514397%2C35.67164056369268&access_token=${process.env.MAPBOX_API}`
  );

  const data = await res.json();

  console.log("res", data);

  return data;
};
