import { constructAPIGwEvent } from "../../utils/helpers";

import { createURLhandler } from "../../../src/handlers/createShortenedURL";
import { describe, expect, it } from "@jest/globals";

describe("Test exampleHandler", () => {
  it("should return ids", async () => {
    const event = constructAPIGwEvent({}, { method: "GET", path: "/" });

    // Invoke exampleHandler()
    const result = await createURLhandler(event);

    const expectedResult = {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello world!" })
    };

    // Compare the result with the expected result
    expect(result).toEqual(expectedResult);
  });
});
