import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import clsx from "clsx";
import TeamMembersComponent from "./TeamMembersComponent";
import ProductsComponent from "./ProductsComponent";
import InboxComponent from "./InboxComponent";
import { appTheme } from "../common/styles";

const useStyles = makeStyles<any>()((theme, lightTheme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      height: "-webkit-fill-available",
    },
    sideBarRoot: {
      background: lightTheme.lightTheme
        ? appTheme.lightBgColor
        : appTheme.darkBgColor,
      width: "23vw",
      display: "flex",
      flexDirection: "column",
      padding: "2% 0",
    },
    navigationItemsContainer: {
      zIndex: 9,

      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      cursor: "pointer",
      width: "100%",
    },
    navigationItem: {
      display: "flex",
      flexDirection: "row",
      margin: "1rem 1rem 1rem 0",
      borderRadius: "0 10px 10px 0",
    },
    navigationIcon: {
      fontSize: "50px",
      color: lightTheme.lightTheme
        ? appTheme.lightTextColor
        : appTheme.darkTextColor,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    navigationItemText: {
      alignSelf: "center",
      margin: "0 0 0 0.2rem",
      fontSize: "30px",
      color: lightTheme.lightTheme
        ? appTheme.lightTextColor
        : appTheme.darkTextColor,
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
        padding: "10px",
      },
    },

    contentAreaContainer: {
      backgroundColor: lightTheme.lightTheme
        ? appTheme.lightContentColor
        : appTheme.darkContentColor,
      borderRadius: "30px",
      width: "100%",
      overflow: "scroll",
      paddingBottom: "15vh",
    },

    activeNavigationItem: {
      display: "flex",
      flexDirection: "row",
      margin: "1rem 1rem 1rem 0",
      borderRadius: "0 10px 10px 0",
      backgroundColor: "#2563EB",
      color: "#F3F4F6",
    },
    bgPic: {
      background: `url(https://eskipaper.com/images/gundam-10.jpg)`,
      opacity: 0.2,
      position: "absolute",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "-webkit-fill-available",
      width: "-webkit-fill-available",
      overflow: "hidden",
    },
  };
});

interface SideBarProps {
  classes: any;
  activeItem: string;
  setActiveItem: any;
  handleOnSideBarClick: (arg0: string) => void;
}

interface ContentAreaProps {
  classes: any;
  activeItem: string;
  setActiveItem: any;
  lightTheme: boolean;
  filteredData: any;
}

const SideBar = ({
  classes,
  activeItem,
  setActiveItem,
  handleOnSideBarClick,
}: SideBarProps) => {
  return (
    <div className={classes.sideBarRoot}>
      <div className={classes.navigationItemsContainer}>
        <div
          className={clsx(
            activeItem === "teamMembers"
              ? classes.activeNavigationItem
              : classes.navigationItem
          )}
          onClick={() => handleOnSideBarClick("teamMembers")}
        >
          <GroupOutlinedIcon className={classes.navigationIcon} />
          <div className={classes.navigationItemText}>Team Members</div>
        </div>

        <div
          className={clsx(
            activeItem === "products"
              ? classes.activeNavigationItem
              : classes.navigationItem
          )}
          onClick={() => handleOnSideBarClick("products")}
        >
          <ShoppingBagOutlinedIcon className={classes.navigationIcon} />
          <div className={classes.navigationItemText}>Products</div>
        </div>

        <div
          className={clsx(
            activeItem === "inbox"
              ? classes.activeNavigationItem
              : classes.navigationItem
          )}
          onClick={() => handleOnSideBarClick("inbox")}
        >
          <InboxOutlinedIcon className={classes.navigationIcon} />
          <div className={classes.navigationItemText}>Inbox</div>
        </div>
      </div>
    </div>
  );
};

const ContentArea = ({
  classes,
  activeItem,
  setActiveItem,
  lightTheme,
  filteredData,
}: ContentAreaProps) => {
  const getContent = () => {
    switch (activeItem) {
      case "teamMembers":
        return (
          <TeamMembersComponent data={filteredData} lightTheme={lightTheme} />
        );

      case "products":
        return <ProductsComponent />;

      case "inbox":
        return <InboxComponent />;
    }
  };

  return (
    <>
      <div className={classes.bgPic}></div>
      <div className={classes.contentAreaContainer}>{getContent()}</div>;
    </>
  );
};

const NavigationSection = ({ lightTheme, filteredData }: any) => {
  const { classes } = useStyles({ lightTheme });
  const [activeItem, setActiveItem] = useState<string>("teamMembers");
  const handleOnSideBarClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className={classes.root}>
      <SideBar
        classes={classes}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        handleOnSideBarClick={handleOnSideBarClick}
      />
      <ContentArea
        classes={classes}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        lightTheme={lightTheme}
        filteredData={filteredData}
      />
    </div>
  );
};

export default NavigationSection;
