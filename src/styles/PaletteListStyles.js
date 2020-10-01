export default {
  root: {
    backgroundColor: "blue",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    height: "100%",
    padding: "20px 0",
  },
  nav: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridColumnGap: "5%",
    gridRowGap: "30px",
    height: "100%",
  },
};
