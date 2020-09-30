import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = SortableContainer((props) => {
  return (
    <div style={{ height: "100%" }}>
      {props.colors.map((c, i) => (
        <DraggableColorBox
          index={i}
          key={c.name}
          color={c.color}
          name={c.name}
          handleClick={() => props.removeColor(c.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
