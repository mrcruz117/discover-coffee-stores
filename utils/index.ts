export function getDomain() {
  return new URL(
    process.env.NODE_ENV === "production"
      ? "https://coffee-app.vercel.app"
      : "http://localhost:3016"
  );
}
