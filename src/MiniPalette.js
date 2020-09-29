import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./styles/MiniPaletteStyles";

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
