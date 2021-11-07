import { dbClient } from "./client";
import { tableName } from "../constants";

const retrieveShortUrl = async (shortUrl: string) => {
  // Retrieve an item from dynamodb table by it's hash.

  const query = await dbClient
    .get({
      TableName: tableName,
      Key: {
        urlHash: shortUrl
      }
    })
    .promise();

  return query.Item;
};

export { retrieveShortUrl };
