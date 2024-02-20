import TaskDetails from "@/app/components/TaskDetails";
import { notFound } from "next/navigation";
import React from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  due_date: string;
}

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
  const task: Task = await getTask(params.id);

  return (
    <>
      <TaskDetails
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
        due_date={task.due_date}
      />
    </>
  );
}
