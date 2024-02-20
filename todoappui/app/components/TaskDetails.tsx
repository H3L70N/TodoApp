import React from 'react'

type Props = {
    title: string;
    description: string;
    status: string;
  };
  

export default function TaskDetails( {title, description, status}:Props ) {
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
    
      const color = getColor(status);
    
      return (
        <>
          <div className="py-10 mb-16 mx-7 bg-slate-300 rounded-md">
            <div className="flex flex-row justify-between mx-7">
              <h2>{title}</h2>
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
