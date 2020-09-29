import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import styles from "./styles/PaletteStyles";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: "hex",
    };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorId) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      let shade = allColors[key].filter((c) => c.id === colorId);
      shades.push(shade[0]);
    }
    shades.splice(0, 1);
    return shades;
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const { classes } = this.props;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map((c) => (
      <ColorBox
        key={c.name}
        name={c.name}
        background={c[format]}
        showMoreLink={false}
        showSlider={false}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar changeFormat={this.changeFormat} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palettes/${id}`}>GO BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
