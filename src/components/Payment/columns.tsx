"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Payment } from "@/app/types/Payment.type";

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center gap-2 px-4 py-2 ">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
        <span className="font-semibold">Name</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2 px-4 py-2">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
        <span>{row.original.name}</span>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "balance",
    header: () => (
      <div className="px-4 py-2  text-left font-semibold">Balance</div>
    ),
    cell: ({ row }) => {
      const balance = parseFloat(row.getValue("balance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(balance);

      return <div className="px-4 py-2 text-left">{formatted}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-4 py-2  font-semibold"
      >
        Email
        <ArrowUpDown className="ml-2" />
      </Button>
    ),
    cell: ({ row }) => {
      const email = row.getValue("email") as string;
      return (
        <div className="px-4 py-2 lowercase">
          <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
            {email}
          </a>
        </div>
      );
    },
  },
  {
    accessorKey: "registration",
    header: () => (
      <div className="px-4 py-2  text-center font-semibold">Registration</div>
    ),
    cell: ({ row }) => {
      const registration = row.getValue("registration") as string;
      const createdAt = row.original.createdAt as string;
      console.log("registration", registration);

      // Xử lý định dạng registration
      const registrationDate = new Date(registration);
      const isValidDate = !isNaN(registrationDate.getTime());

      // Định dạng ngày tháng
      const formattedDate = isValidDate
        ? registrationDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Invalid Date";

      return (
        <div
          className="px-4 py-2 text-center"
          title={`Created At: ${createdAt}`}
        >
          {formattedDate}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="px-4 py-2  text-center font-semibold">Status</div>
    ),
    cell: ({ row }) => (
      <div className="px-4 py-2 text-center">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "action",
    header: () => (
      <div className="px-4 py-2  text-center font-semibold">Action</div>
    ),
    cell: ({ row }) => (
      <div className="px-4 py-2 text-center flex items-center justify-center gap-2 ">
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        {/* trash */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    ),
  },
];
