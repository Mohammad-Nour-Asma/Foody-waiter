import React, { useState } from "react";
import { Box, Button, Paper, Stack } from "@mui/material";
import SubOrder from "./SubOrder";
import Timer from "./Timer";
// import Timer from "./Timer";

const Order = ({ order }) => {
  const [state, setState] = useState(order.status);
  let color;
  if (state === "new") {
    color = "#83bf4f";
  } else if (state === "change") {
    color = "#83bf4f";
  } else {
    color = "#83bf4f";
  }

  return (
    <Box sx={{ padding: "0.2rem" }}>
      <Paper sx={{ padding: "1rem", borderRadius: "10px" }}>
        <Stack
          p={1}
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={"row"}
          gap={3}
        >
          <Box sx={{ fontWeight: "bold" }}>Table : {order.table.table_num}</Box>
          <Box sx={{ fontWeight: "bold" }}>Order id : {order.id}</Box>
        </Stack>
        <Stack
          flexWrap={"wrap"}
          p={1}
          gap={2}
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={"row"}
        >
          <Box
            sx={{
              background: color,
              padding: "0.5rem 4rem",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "0.5rem",
            }}
          >
            New
          </Box>
          <Box sx={{ fontWeight: "bold" }}>
            Order time : <span style={{ color: "#c4c4c4" }}>{order.time}</span>
          </Box>
        </Stack>
        {order.products.map((item, index) => {
          return <SubOrder color={color} key={index} subOrder={item} />;
        })}
      </Paper>
      <Box>
        <Button
          style={{
            color: "#fff",
            fontWeight: "bold",
            backgroundColor: color,
            width: "100%",
            outline: "none",
            border: "none",
            padding: "0.7rem ",
            margin: "1rem 0  0",
            borderRadius: "5px",
            transition: "0.2s",
          }}
        >
          Ok
        </Button>
      </Box>
    </Box>
  );
};

export default Order;
