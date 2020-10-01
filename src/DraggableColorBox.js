import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles";
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement((props) => {
  const {
    classes: { root, boxContent, deleteIcon },
    name,
    color,
    handleClick,
  } = props;
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={root}
    >
      <div className={boxContent}>
        <span>{name}</span>
        <DeleteIcon className={deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
