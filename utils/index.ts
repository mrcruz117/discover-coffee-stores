export function getDomain() {
  return new URL(
    process.env.NODE_ENV === "production"
      ? "https://discover-coffee-stores-green-ten.vercel.app"
      : "http://localhost:3016"
  );
}
