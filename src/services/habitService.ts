import { pool } from "../db/db";
import { Habit } from "../types/habit";

export async function getHabits(): Promise<Habit[]> {
  try {
    const result = await pool.query(
      "SELECT id, name, created_at FROM habits ORDER BY id ASC"
    );

    return result.rows;
  } catch (error) {
    console.error("Error fetching habits:", error);
    throw error;
  }
}

export async function createHabit(name: string): Promise<Habit> {
  try {
    const result = await pool.query(
      "INSERT INTO habits (name) VALUES ($1) RETURNING id, name, created_at",
      [name]
    );

    return result.rows[0];
  } catch (error) {
    console.error("Error creating habit:", error);
    throw error;
  }
}

export async function updateHabit(
  id: number,
  name: string
): Promise<Habit | null> {
  try {
    const result = await pool.query(
      "UPDATE habits SET name = $1 WHERE id = $2 RETURNING id, name, created_at",
      [name, id]
    );

    return result.rows[0] || null;
  } catch (error) {
    console.error("Error updating habit:", error);
    throw error;
  }
}

export async function deleteHabit(id: number): Promise<boolean> {
  try {
    const result = await pool.query(
      "DELETE FROM habits WHERE id = $1 RETURNING id",
      [id]
    );

    return (result.rowCount ?? 0) > 0;
  } catch (error) {
    console.error("Error deleting habit:", error);
    throw error;
  }
}