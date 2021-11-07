import "source-map-support/register";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

interface MyRequestObject {
  url: string;
}

export const createURLhandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  // log all events to cloud watch
  console.log("generating shortened url");

  const { url } = JSON.parse(event.body || "") as MyRequestObject;

  return {
    statusCode: 200,
    body: JSON.stringify({
      url: url,
      shortenedURL: "https://helloworld.com"
    })
  };
};
