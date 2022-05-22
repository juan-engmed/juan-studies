import { time } from "console";
import React from "react";

function List() {
  const tasks = [
    {
      taskName: "React",
      time: "02:00:00",
    },
    {
      taskName: "TypeScript",
      time: "02:00:00",
    },
  ];

  return (
    <aside>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <h3>{item.taskName}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
