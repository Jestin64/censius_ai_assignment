import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import "./App.css";
import Header from "./common/Header";
import NavigationSection from "./components/NavigationSection";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      // for constrast sake testing
      backgroundColor: "black",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
    },
  };
});

function App() {
  const { classes } = useStyles();
  const [lightTheme, setLightTheme] = useState<boolean>(true);

  useEffect(() => {
    // setLightTheme(!lightTheme);
  }, []);

  return (
    <div className={classes.root}>
      {/* header */}
      <Header theme={lightTheme} />
      <NavigationSection />
    </div>
  );
}

export default App;
