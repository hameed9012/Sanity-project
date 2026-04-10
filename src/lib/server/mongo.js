import { MongoClient } from "mongodb";

let cachedClient = null;
let cachedPromise = null;

function getMongoUri() {
  return String(process.env.MONGODB_URI || "").trim();
}

export function isMongoConfigured() {
  return Boolean(getMongoUri());
}

export async function getMongoClient() {
  if (!isMongoConfigured()) {
    throw new Error("MONGODB_NOT_CONFIGURED");
  }

  if (cachedClient) return cachedClient;

  if (!cachedPromise) {
    cachedPromise = MongoClient.connect(getMongoUri(), {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 1200,
    });
  }

  try {
    cachedClient = await cachedPromise;
    return cachedClient;
  } catch (error) {
    cachedClient = null;
    cachedPromise = null;
    throw error;
  }
}

export async function getDatabase() {
  const client = await getMongoClient();
  return client.db();
}
