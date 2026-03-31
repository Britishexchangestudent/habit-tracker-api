import { handler as getHabitsHandler } from "./handlers/getHabits";
import { handler as createHabitHandler } from "./handlers/createHabit";
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

  console.log("\nGET /habits after create");
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