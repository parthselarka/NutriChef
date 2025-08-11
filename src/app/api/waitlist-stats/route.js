import { getWaitlistStats } from "../../../lib/waitlist";

export async function GET() {
  try {
    const stats = await getWaitlistStats();

    return Response.json({
      success: true,
      count: stats.count,
      error: stats.error,
    });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to fetch stats",
        count: 0,
      },
      { status: 500 }
    );
  }
}
