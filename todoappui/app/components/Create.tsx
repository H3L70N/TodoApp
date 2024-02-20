"use client";

import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, useState } from "react";

export default function Create() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [due_date, setDueDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const Task = {
      title,
      description,
      due_date,
      status: "ongoing",
    };
    console.log(Task);
    const response = await fetch("http://localhost:8000/api/tasks/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Task),
    });

    if (response.status === 201) {
      router.refresh();
      router.push("/tasks");
    } else {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-slate-300 rounded-md flex flex-col py-7 px-7 mx-auto w-3/4 gap-y-4 my-11 ">
          <label className="flex flex-row justify-between align-top">
            <span>Title:</span>{" "}
            <input
              className="w-2/3 rounded-md text-lg"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label className="flex flex-row justify-between align-top">
            <span>Description:</span>{" "}
            <textarea
              className="w-2/3 h-20 rounded-md"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </label>
          <label className="flex flex-row justify-between align-top">
            <span>Due Date: </span>{" "}
            <input
              type="datetime-local"
              className="w-2/3 rounded-md"
              onChange={(e) => setDueDate(e.target.value)}
              value={due_date}
            />
          </label>

          <button
            className="text-slate-200 bg-slate-600 p-2 rounded-lg hover:bg-slate-400 hover:text-slate-700"
            disabled={isLoading}
          >
            {isLoading && <span>Creating Task...</span>}
            {!isLoading && <span>Create Task</span>}
          </button>
        </div>
      </form>
    </>
  );
}
