"use client";

import { useRouter } from "next/navigation";
import DeleteIcon from "@/public/delete-svgrepo-com.svg";
import Image from "next/image";
import { MouseEventHandler } from "react";

async function deleteTask(id: number) {
  const response = await fetch(`http://localhost:8000/api/tasks/delete/${id}`, {
    method: "DELETE",
  });
  return response;
}

type Props = {
  id: number;
};

export default async function Delete({ id }: Props) {
  const router = useRouter();
  const handleClick: MouseEventHandler = async (e) => {
    e.preventDefault();
    const response = await deleteTask(id);
    if (!response.ok) {
      throw new Error("Delete Failed");
    } else {
      router.refresh();
      router.push("/tasks/list/");
    }
  };
  return (
    <button className="rounded-md" onClick={handleClick}>
      <Image width={17} src={DeleteIcon} alt="" />
    </button>
  );
}
