import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, response: NextResponse) {
  const searchParams = request.nextUrl.searchParams;
  const longLat = searchParams.get("longLat") || "";
  const limit = searchParams.get("limit") || "";
  try {
    if (longLat) {
      const res = await fetchCoffeeStores(longLat, parseInt(limit));
      return NextResponse.json(res);
    }
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json(`Error fetching coffee stores: ${error}`, {
      status: 500,
    });
  }
}
