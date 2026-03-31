export function jsonResponse(statusCode: number, data: unknown) {
    return {
      statusCode,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  }