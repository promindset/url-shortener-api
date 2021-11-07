import { DocumentClient } from "aws-sdk/clients/dynamodb";

export const dbClient = new DocumentClient({
  httpOptions: {
    connectTimeout: 1000,
    timeout: 1000
  }
});
