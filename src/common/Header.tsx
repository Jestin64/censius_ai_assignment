import React from "react";
import { makeStyles } from "tss-react/mui";
import { appTheme } from "./styles";

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
  };
});

interface headerProps {
  lightTheme: boolean;
}

const Header = ({ lightTheme }: headerProps) => {
  const { classes } = useStyles({ lightTheme });
  return (
    <div className={classes.root}>
      <div className={classes.teamMembers}>Team Members</div>
      {/* todo */}
      {/* search field,*/}
      <div></div>
    </div>
  );
};

export default Header;
