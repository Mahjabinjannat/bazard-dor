import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
  const uri = process.env.MONGODB_URL;
  console.log("uri", uri);
  if (!uri) {
    return NextResponse.json(
      { error: "MONGODB_URL is missing" },
      { status: 500 },
    );
  }

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 10000,
  });

  try {
    await client.connect();
    await client.db("bazar-dor").command({ ping: 1 });

    return NextResponse.json({
      success: true,
      message: "MongoDB connected successfully",
    });
  } catch (error) {
    console.error("MongoDB connectivity test:", error);

    return NextResponse.json(
      {
        success: false,
        message: "MongoDB connection failed. Check server logs.",
      },
      { status: 500 },
    );
  } finally {
    await client.close();
  }
}
