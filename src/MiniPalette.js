import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
  }

  deletePalette(e) {
    e.stopPropagation();
    this.props.deletePalette(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors, goToPalette } = this.props;
    const miniColorBoxes = colors.map((c) => (
      <div
        key={c.name}
        className={classes.miniColor}
        style={{ backgroundColor: c.color }}
      ></div>
    ));
    return (
      <div className={classes.root} onClick={goToPalette}>
        <div className={classes.delete}>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={this.deletePalette}
          />
        </div>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
