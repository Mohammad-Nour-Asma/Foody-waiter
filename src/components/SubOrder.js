import { Box, Stack } from "@mui/material";
import React from "react";

const SubOrder = ({ subOrder, color }) => {
  return (
    <Stack
      sx={{
        position: "relative",
        borderBottom: "2px solid #61b2e4",
        borderBottomStyle: "dotted",
        "&:before": {
          content: "''",
          position: "absolute",
          width: "9px",
          background: color,
          height: "80%",
          top: "50%",
          transform: "translateY(-50%)",
          left: "7px",

          borderRadius: "10px",
        },
      }}
      gap={1}
      p={"1rem 2rem"}
      // m={"1rem 0"}
    >
      <Box sx={{ fontWeight: "bold" }}>
        {subOrder.name}
        <span style={{ marginLeft: "0.3rem", color: "#dc0d28" }}>
          x{subOrder.qty}
        </span>
      </Box>
      <Box>
        <span style={{ fontWeight: "500" }}>Note: </span>
        <span style={{ color: "rgb(196, 196, 196)" }}>{subOrder.note}</span>
      </Box>
      <Box>
        <span style={{ fontWeight: "500" }}>Add ingre: </span>
        <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
          {subOrder?.extra?.map((item, index) => {
            return (
              <span
                style={{ margin: "0 0.5rem", fontSize: "0.9rem" }}
                key={index}
              >
                <span style={{ color: "rgb(196, 196, 196)" }}>{item.name}</span>
                <span
                  style={{
                    marginLeft: "0.3rem",
                    color: "#dc0d28",
                    fontWeight: "500",
                  }}
                >
                  +{item.qty}
                </span>
              </span>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
};

export default SubOrder;
