import React, { Component } from "react";

import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }

  render() {
    const { background, name, colorId, paletteId, showMoreLink } = this.props;
    const copyOverlayClass = this.state.copied ? "show" : "";
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${copyOverlayClass}`}
          ></div>
          <div className={`copy-msg ${copyOverlayClass}`}>
            <h1>Copied !</h1>
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {showMoreLink && (
            <Link
              to={`/palettes/${paletteId}/${colorId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="see-more">More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
