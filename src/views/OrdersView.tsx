"use client";
import { useAuth } from "@/context/AuthContext";
import { getOrders } from "@/helpers/orders.helper";
import { IOrder, IProduct } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrdersView = () => {
  const router = useRouter();
  const { userData } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);

  const loadOrders = async () => {
    if(userData?.token) {
      const response: IOrder[] = await getOrders(userData?.token)
      setOrders(response)
    }
  };

  useEffect(() => {
    !userData?.token ? router.push("/") : loadOrders();
  }, []);

  return (
    <div>
      <h1>Your orders:</h1>
      {orders.length ? (
        orders?.map((item: IOrder) => {
          return (
            <div key={item.id}>
              <p>Status - {item.status.toLocaleUpperCase()}</p>
              <p>Date - {new Date(item.date)?.toLocaleString()}</p>
            </div>
          );
        })
      ) : (
        <div>You dont have orders yet, go to shopping</div>
      )}
    </div>
  );
};

export default OrdersView;
