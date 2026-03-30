export const handler = async () => {
    return {
      statusCode: 200,
      body: JSON.stringify([
        { id: 1, name: "Gym" },
        { id: 2, name: "Stretching" }
      ])
    };
  };