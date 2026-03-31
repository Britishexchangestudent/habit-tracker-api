import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deleteHabit } from "../services/habitService";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const id = Number(event.pathParameters?.id);

  if (!id) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Valid habit id is required" }),
    };
  }

  const deleted = deleteHabit(id);

  if (!deleted) {
    return {
      statusCode: 404,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Habit not found" }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Habit deleted successfully" }),
  };
};