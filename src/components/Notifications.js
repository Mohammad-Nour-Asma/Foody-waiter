import { Box } from "@mui/material";
import React, { useState } from "react";
import Heading from "./Heading";
import { IoNotifications } from "react-icons/io5";
import NotificationMessage from "./NotificationMessage";
import { useSelector } from "react-redux";
const Notifications = () => {
  const [open, setOpen] = useState(false);
  const notifications = useSelector((state) => state.notification);

  return (
    <Box
      sx={{
        height: "87vh",
        position: "fixed",
        top: "0",
        // left: open ? "8px" : "-100%",
        left: 0,
        transform: `translateX(${open ? "8px" : "-100%"})`,
        background: "transparent",
        backdropFilter: "blur(10px)",
        width: "192px",
        zIndex: "100",
        padding: "1rem",
        boxShadow: "2px 0 21px 1px #df20398a",
        borderRadius: "35px",
        margin: "1rem 0",
        transition: "0.5s",
      }}
      className={"notification"}
    >
      <button
        style={{
          borderRadius: "0px 10px 10px 0",
          border: "2px solid",
          borderColor: "#65b4d6",
          position: "absolute",
          color: "#65b4d6",
          right: "0",
          transform: "translateX(100%)",
          bottom: "50px",
          cursor: "pointer",
          padding: "0.2rem",
          background: "transparent",
          backdropFilter: "blur(10px)",
          transition: "0.3s",
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <IoNotifications
          style={{
            fontSize: "1.5rem",
            animation:
              notifications.noti.length > 0
                ? " notification 0.3s infinite"
                : "",
          }}
        />
      </button>

      <Heading width={"20%"} size={"1rem"}>
        Notifications
      </Heading>
      <Box
        sx={{
          overflowY: "auto",
          height: "80vh",
          padding: "1rem",
        }}
      >
        {notifications.noti.map((item) => {
          return (
            <NotificationMessage
              order_id={item.order_id}
              type={"delay"}
            ></NotificationMessage>
          );
        })}

        <NotificationMessage type={"new"}>
          Order{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            501
          </span>{" "}
          Is New{" "}
        </NotificationMessage>
        <NotificationMessage type={"change"}>
          Order{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            255
          </span>{" "}
          Has Been Changed{" "}
        </NotificationMessage>
      </Box>
    </Box>
  );
};

export default Notifications;
