import React, { Component } from "react";
import MiniPalette from "./MiniPalette";

import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palettes/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palettes/new">Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((p) => (
              <MiniPalette
                key={p.id}
                {...p}
                goToPalette={() => this.goToPalette(p.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
