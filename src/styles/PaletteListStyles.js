import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 0.5s ease-in-out",
    },
  },
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#4362b5",
    backgroundImage: `url(${bg})`,
    backgroundAttachment: "fixed",
  },
  container: {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    height: "100%",
    padding: "20px 0",
    [sizes.down("sm")]: {
      width: "70%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    "& a": {
      color: "white",
      textDecoration: "none",
      border: "2px solid white",
      padding: "10px",
      borderRadius: "20px",
      backgroundColor: "rgba(67,98,181,0.6)",
      transition: "background 0.4s ease",
      "&:hover": {
        color: "rgba(0,0,0,0.6)",
        backgroundColor: "rgba(255,255,255,0.6)",
        borderColor: "#4362b5",
      },
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    justifyContent: "center",
    gridColumnGap: "5%",
    gridRowGap: "30px",
    height: "100%",
  },
};
