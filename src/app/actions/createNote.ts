"use server";

import prisma from "@/server/db";
import { auth } from "@clerk/nextjs/server";

export async function createNote(data: { title: string; content: string }) {
  const user = auth();
  if (!user) {
    return { success: false, error: "Not authenticated" };
  }
  try {
    const note = await prisma.notes.create({
      data: {
        title: data.title,
        content: data.content,
        userId: user.userId!,
      },
    });
    return { success: true, note };
  } catch (error) {
    console.error("Failed to create note:", error);
    return { success: false, error: "Failed to create note" };
  }
}
