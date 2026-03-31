import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateHabit } from "../services/habitService";
import { jsonResponse } from "../utils/response";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const id = Number(event.pathParameters?.id);
  const body = event.body ? JSON.parse(event.body) : null;
  const name = body?.name;

  if (!id) {
    return jsonResponse(400, { message: "Valid habit id is required" });
  }

  if (!name || typeof name !== "string") {
    return jsonResponse(400, { message: "Habit name is required" });
  }

  const updatedHabit = updateHabit(id, name);

  if (!updatedHabit) {
    return jsonResponse(404, { message: "Habit not found" });
  }

  return jsonResponse(200, updatedHabit);
};