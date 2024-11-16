import React from "react";
import Assignees from "../Assignees/Assignees.component";

export function TaskBox({ task }) {
  

  return (
    <div className="task-box">
      <div className="unassigned">
        <h2 className="title">Titulo 1</h2>
      </div>

      <div className="box-content">
        <p className="short-description">
          orem ipsum is a placeholder text used in publishing and graphic design
          to demonstrate the visual form of a document or a typeface. It is
          derived from a 1st-century BC text by Cicero, with words altered to
          make it nonsensical and improper Latin.
        </p>

        <Assignees />
      </div>
    </div>
  );
}
