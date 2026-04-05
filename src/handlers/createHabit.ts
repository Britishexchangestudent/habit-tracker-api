import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createHabit } from "../services/habitService";
import { jsonResponse } from "../utils/response";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const body = event.body ? JSON.parse(event.body) : null;
  const name = body?.name;

  if (!name || typeof name !== "string") {
    return jsonResponse(400, { message: "Habit name is required" });
  }

  const newHabit = await createHabit(name);
  return jsonResponse(201, newHabit);
};