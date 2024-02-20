import TaskDetails from "@/app/components/TaskDetails";
import { notFound } from "next/navigation";
import React from "react";

async function getTask(id: number) {
  const response = await fetch(`http://localhost:8000/api/tasks/${id}`);
  if (!response.ok) {
    notFound();
  }
  return response.json();
}

interface Props {
  params: {
    id: number;
  };
}

export default async function Details({ params }: Props) {
  const task = await getTask(params.id);

  return (
    <>
      <TaskDetails
        title={task.title}
        description={task.description}
        status={task.status}
      />
    </>
  );
}
