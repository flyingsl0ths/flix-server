import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import cors from "cors";
import { isOkorNotFound } from "./utils.js";

export function corsConfig(): { origin: string } {
  return {
    origin:
      process.env["NODE_ENV"] === "production"
        ? "https://flix-server.onrender.com/"
        : `localhost:${process.env["FLIX_SERVER_PORT"]!}`
  };
}

export function setupServer(app: express.Express): express.Express {
  app.use(express.json());
  app.use(cors(corsConfig()));

  const DB_URI = process.env["FLIX_MONGODB_URL"]!;

  const client = new MongoClient(DB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  });

  app.get("/", async (req, res) => {
    try {
      await client.connect();

      const db = client.db("sample_mflix");

      const movie = (
        await db
          .collection("movies")
          .find(
            { title: req.body["title"] },
            {
              projection: {
                _id: 0,
                cast: 1,
                directors: 1,
                genres: 1,
                plot: 1,
                poster: 1,
                released: 1,
                title: 1
              }
            }
          )
          .toArray()
      )[0];

      res.statusCode = isOkorNotFound(!!movie);

      res.send(movie ?? {});
    } finally {
      await client.close();
    }
  });

  return app;
}
