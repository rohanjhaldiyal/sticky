"use server";

import prisma from "@/server/db";

export async function createNote(data: { title: string; content: string }) {
  try {
    const note = await prisma.notes.create({
      data: {
        title: data.title,
        content: data.content,
      },
    });
    return { success: true, note };
  } catch (error) {
    console.error("Failed to create note:", error);
    return { success: false, error: "Failed to create note" };
  }
}
