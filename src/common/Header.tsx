import React from "react";
import { makeStyles } from "tss-react/mui";
import { appTheme } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles<any>()((theme, lightTheme) => {
  return {
    root: {
      background: lightTheme.lightTheme
        ? appTheme.lightBgColor
        : appTheme.darkBgColor,
      borderRadius: "0px",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    teamMembers: {
      color: lightTheme.lightTheme
        ? appTheme.lightTextColor
        : appTheme.darkTextColor,
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "22px",
      margin: "1.5rem 0",
      marginLeft: "30vw",
      display: "flex",
      [theme.breakpoints.down("md")]: {
        fontSize: "25px",
      },
    },
    searchField: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    searchIcon: {
      transform: "translate(-52px, 1px)",
    },
    inputField: {
      width: "250px",
      borderRadius: "15px",
      height: "35px",
      margin: "20px",
      color: lightTheme.lightTheme
        ? appTheme.lightTextColor
        : appTheme.darkTextColor,
    },
  };
});

interface headerProps {
  lightTheme: boolean;
  searchTerm: string;
  setSearchTerm: any;
  handleSearchInputChange: any;
}

const Header = ({
  lightTheme,
  searchTerm,
  handleSearchInputChange,
}: headerProps) => {
  const { classes } = useStyles({ lightTheme });

  return (
    <div className={classes.root}>
      <div className={classes.teamMembers}>Team Members</div>
      <div className={classes.searchField}>
        <input
          className={classes.inputField}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <SearchIcon className={classes.searchIcon} />
      </div>
    </div>
  );
};

export default Header;
