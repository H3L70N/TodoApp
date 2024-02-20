import React from "react";
import Task from "@/app/components/Task";
import Link from "next/link";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  due_date: string;
}

async function getTasks() {
  const response = await fetch("http://localhost:8000/api/tasks/", {
    next: {
      revalidate: 0
    }
  });

  if (!response.ok) {
    throw new Error("Could not fetch data");
  }
  return response.json();
}

export default async function Tasks() {
  const tasks = await getTasks();

  return (
    <>
      <div className="flex flex-row justify-start mb-10">
        <span className="mx-7">Status:</span>
        <div className="mx-2">
          <div className=" py-1 px-1 bg-teal-300 rounded-sm" />
          <span>Complete</span>
        </div>
        <div className="mx-2">
          <div className=" py-1 px-1 bg-yellow-300 rounded-sm" />
          <span>Ongoing</span>
        </div>
        <div className="mx-2">
          <div className=" py-1 px-1 bg-red-300 rounded-sm" />
          <span>Cancelled</span>
        </div>
      </div>

      {tasks.map((task: Task) => (
        <Link href={`/tasks/list/${task.id}`} >
            <Task
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            due_date={task.due_date}
            />
        </Link>
      ))}
    </>
  );
}
