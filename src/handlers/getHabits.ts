import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getHabits } from "../services/habitService";

export const handler = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const habits = getHabits()

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(habits),
  };
};