import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getHabits } from "../services/habitService";
import { jsonResponse } from "../utils/response";

export const handler = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const habits = await getHabits();
  return jsonResponse(200, habits);
};