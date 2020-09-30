import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import PaletteList from "./PaletteList";
import NewPaletteForm from "./NewPaletteForm";

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find((c) => c.id === id);
  }

  savePalette(newPalette) {
    this.setState({
      palettes: [...this.state.palettes, newPalette],
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palettes/new"
          render={(routeProps) => (
            <NewPaletteForm
              palettes={this.state.palettes}
              savePalette={this.savePalette}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/palettes/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palettes/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
