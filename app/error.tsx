"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>

      <p>
        You need to configure env variables to use this app. Please check the
        README.md file for more information.
      </p>
      <p>
        The variables are MAPBOX_API, UNSPLASH_ACCESS_KEY, and AIRTABLE_TOKEN.
      </p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
