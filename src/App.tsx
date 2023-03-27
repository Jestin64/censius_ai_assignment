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

const data = [
  {
    initial: "78",
    name: "Gundam",
    model: "RX-78",
    link: "https://gundam.fandom.com/wiki/RX-78-2_Gundam",
  },
  {
    initial: "MKII",
    name: "Gundam Mark II",
    model: "RX-178",
    link: "https://gundam.fandom.com/wiki/RX-178_Gundam_Mk-II",
  },
  {
    initial: "ZG",
    name: "Zeta Gundam",
    model: "MSZ-006",
    link: "https://gundam.fandom.com/wiki/Mobile_Suit_Zeta_Gundam?so=search",
  },
  {
    initial: "ZZ",
    name: "ZZ Gundam",
    model: "MSZ-010",
    link: "https://gundam.fandom.com/wiki/SSMS-010_ZZ_Gundam",
  },
  {
    initial: "93",
    name: "Nu Gundam",
    model: "RX-93",
    link: "https://gundam.fandom.com/wiki/RX-93_%CE%BD_Gundam",
  },
  {
    initial: "WG",
    name: "Wing Gundam",
    model: "XXXG-01W",
    link: "https://gundam.fandom.com/wiki/XXXG-00W0_Wing_Gundam_Zero_EW",
  },
  {
    initial: "VG",
    name: "Victory Gundam",
    model: "LM312V04",
    link: "https://gundam.fandom.com/wiki/Mobile_Suit_Victory_Gundam?so=search",
  },
];

function App() {
  const [lightTheme, setLightTheme] = useState<boolean>(true);
  const { classes } = useStyles({ lightTheme });
  const [searchTerm, setSearchTerm] = useState("");

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  const handleSearchInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={classes.root}>
      {/* header */}
      <Header
        lightTheme={lightTheme}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearchInputChange={handleSearchInputChange}
      />
      <NavigationSection lightTheme={lightTheme} filteredData={filteredData} />
      <div className={classes.themeButton} onClick={() => toggleTheme()}>
        {/* theme toggle */}
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
