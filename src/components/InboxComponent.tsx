import React from "react";

interface InboxComponentProps {}

const InboxComponent = ({}: InboxComponentProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        fontSize: "50px",
      }}
    >
      Inbox Page
    </div>
  );
};

export default InboxComponent;
