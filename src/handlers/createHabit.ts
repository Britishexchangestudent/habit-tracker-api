import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createHabit } from "../services/habitService";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const body = event.body ? JSON.parse(event.body) : null;
  const name = body?.name;

  if (!name || typeof name !== "string") {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Habit name is required" }),
    };
  }

  const newHabit = createHabit(name);

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newHabit),
  };
};