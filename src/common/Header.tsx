import React from "react";
import { makeStyles, withStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      background: "#F9FAFB",
      borderRadius: "0px",
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },
    teamMembers: {
      color: "#1F2937",
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
  theme: boolean;
}

const Header = ({ theme }: headerProps) => {
  const { classes } = useStyles();
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
