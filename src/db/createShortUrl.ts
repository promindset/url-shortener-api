import { dbClient } from "./client";
import { tableName } from "../constants";

const createShortUrl = async (urlHash: string, originalUrl: string) => {
  try {
    // Tries to insert a new row in dynamodb, with the hash and redirectURl (original URL) values.
    // If hash value is duplicated, we need to try to generate another hash and insert it again
    // and again, and again until it works :)

    await dbClient
      .put({
        TableName: tableName,
        Item: {
          urlHash: urlHash,
          redirectUrl: originalUrl
        },
        ConditionExpression: "attribute_not_exists(urlHash)"
      })
      .promise();
  } catch (error) {
    console.log("something went wrong: ", error);
    // If an error was thrown we need to retry and generate another hash for given url
    return {};
  }

  return {
    urlHash: urlHash,
    redirectUrl: originalUrl
  };
};

export { createShortUrl };
