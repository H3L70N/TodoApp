import React from "react";
import Delete from "./Delete";
import Complete from "./Complete";

type Props = {
  id: number;
  title: string;
  description: string;
  status: string;
  due_date: string;
};

export default function TaskDetails({
  id,
  title,
  description,
  status,
  due_date,
}: Props) {
  const getColor = (status: string) => {
    if (status === "complete") {
      return "via-teal-300";
    } else if (status === "ongoing") {
      return "via-yellow-300";
    } else if (status === "cancelled") {
      return "via-red-300";
    } else {
      return;
    }
  };

  const getDate = (due_date: string) => {
    return due_date.replace("T", " ").replace("Z", "").replaceAll("-", "/");
  };

  const date = getDate(due_date);

  const color = getColor(status);
  const dateline = status === "cancelled" ? "line-through" : "";

  return (
    <>
      <div className="py-10 mb-16 mx-7 bg-slate-300 rounded-md">
        <div className="flex flex-row justify-between mx-7 gap-3">
          <h2>{title}</h2>
          <div className="flex flex-row gap-2">
            <span className={"text-sm " + dateline}> Due: {date}</span>
            <Delete id={id} />
            <Complete id={id} status={status} />
          </div>
        </div>

        <div className="flex flex-row justify-between mx-7">
          <div
            className={`min-h-64 flex bg-gradient-to-r from-slate-300 from-20% min-w-full via-100% to-40%  ${color} rounded-md`}
          >
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
