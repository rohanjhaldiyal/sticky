"use server";

import prisma from "@/server/db";

export async function deleteNote(id: number) {
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
