"use client";

import { useRouter } from "next/navigation";
import React, { MouseEventHandler } from "react";
import TickIcon from "@/public/tick-checkbox-svgrepo-com.svg";
import Image from "next/image";

type Props = {
  id: number;
  status: string;
};

async function updateTask(id: number, status: string) {
  const response = await fetch(`http://localhost:8000/api/tasks/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      status,
    }),
  });
  return response;
}

export default async function Complete({ id, status }: Props) {
  const router = useRouter();
  const handleClick: MouseEventHandler = async (e) => {
    const response = await updateTask(id, status);

    if (!response.ok) {
      throw new Error("Could not mark as complete");
    } else {
      router.refresh();
    }
  };

  return (
    <button className="bg-teal-300 flex flex-row text-sm m-2 rounded-md align-middle">
      <span>Mark as Complete</span> <Image className="w-6 " src={TickIcon} alt="" />
    </button>
  );
}
