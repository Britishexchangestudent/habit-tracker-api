import { Habit } from "../types/habit";

let habits: Habit[] = [
  { id: 1, name: "Gym", created_at: "2026-03-30T18:00:00Z" },
  { id: 2, name: "Stretching", created_at: "2026-03-30T18:05:00Z" },
  { id: 3, name: "10k steps", created_at: "2026-03-30T18:10:00Z" },
];

export function getHabits(): Habit[] {
  return habits;
}

export function createHabit(name: string): Habit {
  const newHabit: Habit = {
    id: habits.length + 1,
    name,
    created_at: new Date().toISOString(),
  };

  habits.push(newHabit);

  return newHabit;
}

export function deleteHabit(id: number): boolean {
  const originalLength = habits.length;
  habits = habits.filter((habit) => habit.id !== id);
  return habits.length < originalLength;
}