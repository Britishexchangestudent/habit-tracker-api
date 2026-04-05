import express, { Request, Response } from "express";
import cors from "cors";
import {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
} from "./services/habitService";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/habits", async (_req: Request, res: Response) => {
  const habits = await getHabits();
  res.json(habits);
});

app.post("/habits", async (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ message: "Habit name is required" });
  }

  const newHabit = await createHabit(name);
  return res.status(201).json(newHabit);
});

app.put("/habits/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Valid habit id is required" });
  }

  if (!name || typeof name !== "string") {
    return res.status(400).json({ message: "Habit name is required" });
  }

  const updatedHabit = await updateHabit(id, name);

  if (!updatedHabit) {
    return res.status(404).json({ message: "Habit not found" });
  }

  return res.json(updatedHabit);
});

app.delete("/habits/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(400).json({ message: "Valid habit id is required" });
  }

  const deleted = await deleteHabit(id);

  if (!deleted) {
    return res.status(404).json({ message: "Habit not found" });
  }

  return res.json({ message: "Habit deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});