import React from "react";
import { makeStyles } from "tss-react/mui";

interface TeamMembersProps {
  data: any;
}

const useStyles = makeStyles()((theme) => {
  return {
    teamMemberContainer: {
      display: "flex",
      gap: "150px",
      width: "fit-content",
      textAlignLast: "center",
      flexDirection: "row",
      justifyContent: "center",
      margin: "50px",
      flexWrap: "wrap",
    },
    cardItem: {
      backgroundColor: "#e8eae8",
      display: "flex",
      alignSelf: "center",
      alignContent: "center",
      padding: "20px",
    },
  };
});

const TeamMembersComponent = ({ data }: TeamMembersProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.teamMemberContainer}>
      {/* too much of a pain to resolve */}
      {/* @ts-ignore  */}
      {data.map((item, index) => {
        return (
          <div className={classes.cardItem} key={index}>
            <div>
              <div>{item.initial}</div>
              <div>{item.name}</div>
              <div>{item.model}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembersComponent;
