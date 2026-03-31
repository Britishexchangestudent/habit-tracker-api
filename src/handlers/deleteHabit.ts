import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deleteHabit } from "../services/habitService";
import { jsonResponse } from "../utils/response";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const id = Number(event.pathParameters?.id);

  if (!id) {
    return jsonResponse(400, { message: "Valid habit id is required" });
  }

  const deleted = deleteHabit(id);

  if (!deleted) {
    return jsonResponse(404, { message: "Habit not found" });
  }

  return jsonResponse(200, { message: "Habit deleted successfully" });
};