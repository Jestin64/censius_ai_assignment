import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import "./App.css";
import Header from "./common/Header";
import NavigationSection from "./components/NavigationSection";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { appTheme } from "./common/styles";

const useStyles = makeStyles<any>()((theme, lightTheme) => {
  return {
    root: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      backgroundColor: lightTheme.lightTheme
        ? appTheme.lightBgColor
        : appTheme.darkBgColor,
    },
    themeButton: {
      cursor: "pointer",
      padding: "20px",
      position: "absolute",
      display: "flex",
      bottom: "4vh",
      zIndex: 999,
    },
  };
});

function App() {
  const [lightTheme, setLightTheme] = useState<boolean>(true);
  const { classes } = useStyles({ lightTheme });

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <div className={classes.root}>
      {/* header */}
      <Header lightTheme={lightTheme} />
      <NavigationSection lightTheme={lightTheme} />
      <div className={classes.themeButton} onClick={() => toggleTheme()}>
        {lightTheme ? (
          <div>
            <NightlightRoundOutlinedIcon />
          </div>
        ) : (
          <div>
            <LightModeOutlinedIcon style={{ color: "white" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
