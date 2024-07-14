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

const Dashboard = async () => {
  const notes = await prisma.notes.findMany();
  return (
    <div className="flex flex-row flex-wrap gap-4 min-h-[100vh] items-center justify-center">
      <CreateNoteDialog />
      {notes.map((note) => {
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
                <span className="text-sm text-gray-500">
                  {note.createdAt.toLocaleDateString()}
                </span>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
