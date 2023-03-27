import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { appTheme } from "../common/styles";

const useStyles = makeStyles<any>()((theme, lightTheme) => {
  return {
    teamMemberContainer: {
      display: "flex",
      gap: "100px",
      width: "fit-content",
      textAlignLast: "center",
      flexDirection: "row",
      justifyContent: "center",
      margin: "50px",
      flexWrap: "wrap",
    },
    cardItem: {
      zIndex: 9,
      minWidth: "150px",
      justifyContent: "center",
      background: lightTheme.lightTheme
        ? appTheme.lightCardColor
        : appTheme.darkCardColor,
      display: "flex",
      alignSelf: "center",
      alignContent: "center",
      padding: "20px",
      boxShadow: "0px 1px 16px 1px rgba(17, 24, 39, 0.05)",
      borderRadius: "12px",
    },
    itemIntial: {
      height: "100px",
      width: "100px",
      borderRadius: "50px",
      backgroundColor: "#2563EB",
      color: "#F3F4F6",
    },
    itemName: {
      color: lightTheme.lightTheme
        ? appTheme.lightTextColor
        : appTheme.darkTextColor,
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "22px",
      margin: "10px 0 ",
    },
    itemModel: {
      color: lightTheme.lightTheme
        ? appTheme.lightTextColor
        : appTheme.darkTextColor,
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "15px",
      lineHeight: "22px",
      margin: "10px 0 ",
    },
  };
});

interface TeamMembersProps {
  data: any;
  lightTheme: boolean;
}

const TeamMembersComponent = ({ data, lightTheme }: TeamMembersProps) => {
  const { classes } = useStyles({ lightTheme });

  return (
    <div className={classes.teamMemberContainer}>
      {/* too much of a pain to resolve */}
      {/* @ts-ignore  */}
      {data.map((item, index) => {
        return (
          <div className={classes.cardItem} key={index}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className={classes.itemIntial}>
                <div
                  style={{
                    width: "100%",
                    transform: "translate(0%, 32%)",
                    height: "100%",
                    fontSize: "30px",
                  }}
                >
                  {item.initial}
                </div>
              </div>
              <div className={classes.itemName}>{item.name}</div>
              <div className={classes.itemModel}>{item.model}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembersComponent;
