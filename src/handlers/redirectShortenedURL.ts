import "source-map-support/register";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { retrieveShortUrl } from "../db/retrieveShortUrl";

export const redirectURLhandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  // slice the hash from the http request (/abc => abc)
  const urlHash = event.path.slice(1);

  // retrieve item from dynamodb by hash
  const shortUrlData = await retrieveShortUrl(urlHash);

  return {
    headers: {
      location: shortUrlData?.redirectUrl
    },
    statusCode: 301,
    body: JSON.stringify({
      message: "Hello world!!!"
    })
  };
};
