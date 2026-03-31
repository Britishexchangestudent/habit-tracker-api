import { handler as getHabitsHandler } from "./handlers/getHabits";
import { handler as createHabitHandler } from "./handlers/createHabit";
import { handler as updateHabitHandler } from "./handlers/updateHabit";
import { handler as deleteHabitHandler } from "./handlers/deleteHabit";

async function run() {
  console.log("GET /habits");
  console.log(await getHabitsHandler({} as any));

  console.log("\nPOST /habits");
  console.log(
    await createHabitHandler({
      body: JSON.stringify({ name: "Read 10 pages" }),
    } as any)
  );

  console.log("\nPUT /habits/1");
  console.log(
    await updateHabitHandler({
      pathParameters: { id: "1" },
      body: JSON.stringify({ name: "Gym Upper Body" }),
    } as any)
  );

  console.log("\nGET /habits after update");
  console.log(await getHabitsHandler({} as any));

  console.log("\nDELETE /habits/2");
  console.log(
    await deleteHabitHandler({
      pathParameters: { id: "2" },
    } as any)
  );

  console.log("\nGET /habits after delete");
  console.log(await getHabitsHandler({} as any));
}

run().catch(console.error);