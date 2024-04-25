"use client";
import React, { useEffect } from "react";
import Banner from "./banner.client";
import useTrackLocation from "@/hooks/use-track-location";

export default function NearbyCoffeeStores() {
  const { longLat, isFindingLocation, handleTrackLocation, locationErrorMsg } =
    useTrackLocation();

  const handleOnClick = () => {
    handleTrackLocation();
  };
  return (
    <div>
      <Banner
        handleOnClick={handleOnClick}
        buttonText={isFindingLocation ? "Loading..." : "View Stores Nearby"}
      />
      {locationErrorMsg && <div>{locationErrorMsg}</div>}
    </div>
  );
}
