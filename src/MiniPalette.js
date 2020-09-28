import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "2px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "'hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "120px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "'space-between",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    // fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "auto",
    fontSize: "1rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
};

const MiniPalette = (props) => {
  const { classes, paletteName, emoji, colors, goToPalette } = props;
  const miniColorBoxes = colors.map((c) => (
    <div
      key={c.name}
      className={classes.miniColor}
      style={{ backgroundColor: c.color }}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={goToPalette}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
