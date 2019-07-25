import React from "react";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(props => {
  const { classes, color, name, handleRemove } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>

        <DeleteIcon className={classes.deleteIcon} onClick={handleRemove} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
