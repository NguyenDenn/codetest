"use client";
import { DataTableDemo } from "@/components/Payment/DataTable";
import { ModeToggle } from "@/components/ModeToggle";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function page() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    // Lấy dữ liệu từ API giả
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setData(response.data); // Cập nhật state với dữ liệu lấy từ API
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  }, []);
  return (
    <div>
      <ModeToggle />
      <DataTableDemo data={data} />
    </div>
  );
}
