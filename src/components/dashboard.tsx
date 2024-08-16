import prisma from "@/server/db";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CreateNoteDialog from "./create-note-dialog";
import DeleteButton from "./delete-button";
import { note } from "@/app/types/notes";

const Dashboard = async () => {
  const notes = await prisma.notes.findMany();
  return (
    <div className="flex flex-row flex-wrap gap-4 min-h-[100vh] items-center justify-center">
      <CreateNoteDialog />
      {notes.map((note: note) => {
        return (
          <div
            key={note.id}
            className="mt-4 rounded-md flex flex-col items-center justify-center"
          >
            <Card key={note.id} className="min-w-48 min-h-48">
              <CardHeader>
                <CardTitle>{note.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{note.content}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500">
                    {note.createdAt.toLocaleDateString()}
                  </span>
                  <DeleteButton id={note.id} />
                </div>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
