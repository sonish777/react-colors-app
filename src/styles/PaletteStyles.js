import sizes from "./sizes";

export default {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  colors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      outline: "none",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
      transition: "all 0.5s ease",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.3333%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
    },
  },
};
