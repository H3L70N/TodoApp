"use client";

import { useRouter } from "next/navigation";
import React, { MouseEventHandler, useEffect } from "react";
import TickIcon from "@/public/tick-checkbox-svgrepo-com.svg";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  description: string;
  due_date: string;
};
async function updateTask(
  id: number,
  title: string,
  description: string,
  due_date: string
) {
  const response = await fetch(`http://localhost:8000/api/tasks/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      status: "complete",
      description,
      due_date,
    }),
    cache: "no-cache",
    next: {
      revalidate: 0,
    },
  });
  return response;
}

export default async function Complete({
  id,
  title,
  description,
  due_date,
}: Props) {
  const router = useRouter();
  const handleClick: MouseEventHandler = async (e) => {
    const response = await updateTask(id, title, description, due_date);

    if (!response.ok) {
      throw new Error("Could not mark as complete");
    } else {
      router.refresh();
    }
  };

  return (
    <button
      className="bg-teal-100 hover:bg-teal-300 h-fit btn flex flex-row btn-sm text-sm rounded-md align-middle"
      onClick={handleClick}
    >
      <span className="text-xs">Mark as Complete</span>
      <Image className="w-6 " src={TickIcon} alt="" />
    </button>
  );
}
