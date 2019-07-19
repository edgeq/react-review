import React from "react";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.25)"
    }
  },
  boxContent: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};

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
