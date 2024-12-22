"use client";

import { useState } from "react";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoPieChartSharp } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";

import { DashbaordCard } from "@/components/dashbaord-card";
import { ChartComponent } from "@/components/dashbaord-chart";

export default function Dashboard() {
  const [totalOrder,settotalOrder]=useState(0);
  const [totalRevenue,settotalRevenue]=useState(0);
  const [totalProduct,settotalProduct]=useState(0);
  const [totalCategory,settotalOrCategory]=useState(0);
      // CardTitle should be fetch from the backend
  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ]
  //chartData is a dummy data should be fetch from the backend
  return (
    <div className="bg-neutral-100 w-full flex flex-col gap-4 px-6 py-8">
      {/* Custom card for dashboard-page */}
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8">
        <DashbaordCard
          cardColor={"bg-blue-500"}
          cardTitle={totalOrder}
          cardDescription="Total Orders"
          cardIcon={HiOutlineShoppingBag}
          />
        <DashbaordCard
          cardColor={"bg-green-500"}
          titleIcon={TbCurrencyTaka}
          cardTitle={totalRevenue}
          cardDescription="Total Revenue"
          cardIcon={IoStatsChartSharp}
          />
        <DashbaordCard
          cardColor={"bg-yellow-500"}
          cardTitle={totalProduct}
          cardDescription="Total Product"
          cardIcon={FaShoppingCart}
          />
        <DashbaordCard
          cardColor={"bg-red-500"}
          cardTitle={totalCategory}
          cardDescription="Total Category"
          cardIcon={IoPieChartSharp}
        />

      </div>
      {/* Pi-chart for dashbaord-page */}
      <div className="w-full relative flex ">
        <ChartComponent chartData={chartData}/>
      </div>
    </div>
  );
}
