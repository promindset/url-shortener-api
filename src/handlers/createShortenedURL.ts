import "source-map-support/register";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createShortUrl } from "../db/createShortUrl";
import { generateUrlKey } from "../generateURLKey";
import { redirectServiceBaseUrl } from "../constants";

interface MyRequestObject {
  url: string;
}

export const createURLhandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const { url } = JSON.parse(event.body || "") as MyRequestObject;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "missing url in paramaters" })
    };
  }

  const newUrlKey = generateUrlKey(3);
  const shortUrlItem = await createShortUrl(newUrlKey, url);

  console.log("short Url Item: ", shortUrlItem);

  return {
    statusCode: 200,
    body: JSON.stringify({
      url: shortUrlItem.redirectUrl,
      shortenedURL: redirectServiceBaseUrl + shortUrlItem.urlHash
    })
  };
};
