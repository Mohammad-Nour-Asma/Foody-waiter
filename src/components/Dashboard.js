import React, { useEffect, useState } from "react";

import { Box, Grid, Stack } from "@mui/material";

import Order from "./Order";
import Heading from "./Heading";
import Pusher from "pusher-js";
import { useDispatch } from "react-redux";

import Notifications from "./Notifications";

import { request } from "../api/request";
import { useQuery } from "@tanstack/react-query";
import Tables from "./Tables";
function Dashboard() {
  const dispatch = useDispatch();
  const [ordersInfo, setOrders] = useState({
    error: {},
    isLoading: false,
    orders: [],
  });

  const getOrders = () => {
    setOrders((prev) => {
      return { ...prev, isLoading: true };
    });
    request({
      url: "/orders/waiter",
    })
      .then((resp) => {
        console.log(resp, "resp");
        setOrders((prev) => {
          return { ...prev, isLoading: false, orders: resp.data.data };
        });
      })
      .catch((err) => {
        setOrders((prev) => {
          return { ...prev, isLoading: false, error: err };
        });
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  // Ready Orders realtime
  useEffect(() => {
    const pusher = new Pusher("897190819c4cec71fdc0", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("Waiter");

    channel.bind("ToWaiter", (data) => {
      console.log(data.Waiter, "TAGBEGVSDGVDFSGADFGD");
      const order = data.Waiter;
      order.table = { table_num: order.table_id };
      setOrders((prev) => {
        return { ...prev, orders: [order, ...prev.orders] };
      });
    });

    return () => {
      channel.unbind();
      pusher.disconnect();
    };
  }, []);

  if (ordersInfo.isLoading) {
    return <div>loading..</div>;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "2rem 0.5rem",
      }}
    >
      <Notifications />
      <Tables />
      <Heading width={"50%"} size={"1.8rem"}>
        Orders
      </Heading>

      <Grid spacing={4} justifyContent={"start"} container>
        {ordersInfo.orders?.map((order) => {
          return (
            <Grid item md={6} xs={12}>
              <Order order={order} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Dashboard;
