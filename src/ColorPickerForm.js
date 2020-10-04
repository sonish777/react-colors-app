import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/styles";
import chroma from "chroma-js";

import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "teal",
      newColorName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeColor(color) {
    this.setState({
      color: color.hex,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit() {
    let newColor = {
      color: this.state.color,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({
      newColorName: "",
    });
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return this.props.colors.every(({ color }) => color !== this.state.color);
    });
  }

  render() {
    const { color, newColorName } = this.state;
    const { paletteIsFull, classes } = this.props;
    return (
      <div className={classes.root}>
        <ChromePicker
          color={color}
          onChangeComplete={this.changeColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <TextValidator
            name="newColorName"
            placeholder="Color Name"
            value={newColorName}
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already used",
            ]}
            className={classes.colorInput}
            variant="filled"
            margin="normal"
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: paletteIsFull ? "grey" : color,
              color: chroma(color).luminance() <= 0.5 ? "white" : "black",
            }}
            type="submit"
            disabled={paletteIsFull}
            className={classes.addColor}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
