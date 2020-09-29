import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import PaletteList from "./PaletteList";
import NewPaletteForm from "./NewPaletteForm";

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  findPalette(id) {
    return seedColors.find((c) => c.id === id);
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route exact path="/palettes/new" render={() => <NewPaletteForm />} />
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
