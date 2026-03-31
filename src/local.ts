import { handler } from "./handlers/getHabits";

async function run() {
  const result = await handler({} as any);
  console.log(result);
}

run().catch(console.error);