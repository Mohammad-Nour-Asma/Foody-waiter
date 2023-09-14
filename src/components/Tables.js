import { Box } from "@mui/material";
import React, { useState } from "react";
import Heading from "./Heading";
import { MdTableRestaurant } from "react-icons/md";
import NotificationMessage from "./NotificationMessage";
import { useSelector } from "react-redux";
const Tables = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        height: "87vh",
        position: "fixed",
        top: "0",
        // left: open ? "8px" : "-100%",
        right: 0,
        transform: `translateX(${open ? "8px" : "100%"})`,
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
          borderRadius: " 10px 0 0 10px",
          border: "2px solid",
          borderColor: "#65b4d6",
          position: "absolute",
          color: "#65b4d6",
          left: "-68px",
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
        <MdTableRestaurant
          style={{
            fontSize: "1.5rem",
          }}
        />
      </button>

      <Heading width={"40%"} size={"1rem"}>
        Tables
      </Heading>
      <Box
        sx={{
          overflowY: "auto",
          height: "80vh",
          padding: "1rem",
        }}
      ></Box>
    </Box>
  );
};

export default Tables;
