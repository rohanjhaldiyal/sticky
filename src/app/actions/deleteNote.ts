"use server";

import prisma from "@/server/db";
import { auth } from "@clerk/nextjs/server";

export async function deleteNote(id: number) {
  const user = auth();
  if (!user) {
    return { success: false, error: "Not authenticated" };
  }
  try {
    await prisma.notes.delete({
      where: {
        id,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to delete note:", error);
    return { success: false, error: "Failed to delete note" };
  }
}
