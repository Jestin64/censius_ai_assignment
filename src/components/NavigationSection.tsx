import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import clsx from "clsx";
import TeamMembersComponent from "./TeamMembersComponent";
import ProductsComponent from "./ProductsComponent";
import InboxComponent from "./InboxComponent";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      height: "-webkit-fill-available",
    },
    sideBarRoot: {
      backgroundColor: "#F9FAFB",
      width: "23vw",
      display: "flex",
      flexDirection: "column",
      padding: "2% 0",
    },
    navigationItemsContainer: {
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
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    navigationItemText: {
      alignSelf: "center",
      margin: "0 0 0 0.2rem",
      fontSize: "30px",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
        padding: "10px",
      },
    },

    contentAreaContainer: {
      backgroundColor: "#F3F4F6",
      borderRadius: "30px",
      width: "100%",
      overflow: "scroll",
      paddingBottom: "15vh",
      // background: `rgba() url('https://wallpapercave.com/wp/jUnB9YS.jpg')`,
    },

    activeNavigationItem: {
      display: "flex",
      flexDirection: "row",
      margin: "1rem 1rem 1rem 0",
      borderRadius: "0 10px 10px 0",
      backgroundColor: "#2563EB",
      color: "#F3F4F6",
    },
  };
});

const data = [
  {
    initial: "78",
    name: "Gundam",
    model: "RX-78",
  },
  {
    initial: "MKII",
    name: "Gundam Mark II",
    model: "RX-178",
  },
  {
    initial: "ZG",
    name: "Zeta Gundam",
    model: "MSZ-006",
  },
  {
    initial: "ZZ",
    name: "ZZ Gundam",
    model: "MSZ-010",
  },
  {
    initial: "93",
    name: "Nu Gundam",
    model: "RX-93",
  },
  {
    initial: "WG",
    name: "Wing Gundam",
    model: "XXXG-01W",
  },
  {
    initial: "VG",
    name: "Victory Gundam",
    model: "LM312V04",
  },
];

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
}: ContentAreaProps) => {
  const getContent = () => {
    switch (activeItem) {
      case "teamMembers":
        return <TeamMembersComponent data={data} />;

      case "products":
        return <ProductsComponent />;

      case "inbox":
        return <InboxComponent />;
    }
  };

  return <div className={classes.contentAreaContainer}>{getContent()}</div>;
};

const NavigationSection = () => {
  const { classes } = useStyles();
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
      />
    </div>
  );
};

export default NavigationSection;
