import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <section>
      <div className="mx-7 mb-10 ">
        <h1 className="font-semibold text-2xl">Homepage</h1>
        <small className="text-slate-500">Welcome to the website!</small>
      </div>

      <div className="mx-7 flex flex-row justify-center items-center mb-10">
        <h2 className="text-slate-800 text-2xl">
          This is your task manager | TodoApp
        </h2>
      </div>

      <div className="flex flex-row justify-center items-center gap-x-4">
        <Link
          href="tasks/create"
          className=" bg-blue-200 px-5 py-10 my-3 hover:bg-slate-400 hover:text-white rounded-xl"
        >
          Add task
        </Link>

        <Link
          href="tasks/list"
          className=" bg-blue-200 px-5 py-10 my-3 hover:bg-slate-400 hover:text-white rounded-xl"
        >
          List Tasks
        </Link>
      </div>

      <div className="mx-7 flex flex-col justify-start items-start mb-10 ">
        <p>On this app you can manage your day-to-day schedule. </p>
        <p>Click Add Task to create a new activity in your schedule</p>
        <p>Click List tasks to view your current schedule</p>
      </div>
    </section>
  );
}
