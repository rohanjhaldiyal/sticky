"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { deleteNote } from "@/app/actions/deleteNote";
import { toast } from "sonner";

const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();
  const handleSubmit = async () => {
    const result = await deleteNote(id);
    if (result.success) {
      console.log("Note deleted:", id);
      router.refresh(); // Refresh the page to remove the note
      toast.dismiss(); // Dismiss any existing toasts
      toast.success("Note deleted successfully!");
    } else {
      console.error("Failed to delete note:", result.error);
    }
  };
  return (
    <>
      <Button type="button" onClick={handleSubmit} variant="destructive">
        Delete
      </Button>
    </>
  );
};

export default DeleteButton;
