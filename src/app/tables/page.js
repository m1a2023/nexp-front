"use client";
import { React } from "react";
import { ReactTabulator } from "react-tabulator";
import { Tabulator } from "tabulator-tables";
import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/tabulator.min.css";

export default function Tables() {
  function getTableData() {
    /**
     **   DEMO DATA
     */
    const columns = [
      {
        title: "Id",
        field: "id",
        hozAlign: "center",
      },
      {
        title: "Type",
        field: "type",
        hozAlign: "center",
      },
      {
        title: "Label",
        field: "label",
        hozAlign: "center",
      },
      {
        title: "Tag",
        field: "tag",
        hozAlign: "center",
      },
      {
        title: "Amount",
        field: "amount",
        hozAlign: "center",
      },
      {
        title: "Balance",
        field: "balance",
        hozAlign: "center",
      },
      {
        title: "Time",
        field: "time",
        hozAlign: "center",
      },
    ];
    const data = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      type: index % 3 === 0 ? "Income" : "Expense",
      label: [
        "Salary",
        "Groceries",
        "Freelance Project",
        "Electricity Bill",
        "Restaurant",
        "Gift",
        "Gas",
        "Internet Subscription",
        "Investment Return",
        "Movie Ticket",
      ][Math.floor(Math.random() * 10)],
      tag: [
        "Work",
        "Food",
        "Side Job",
        "Utilities",
        "Entertainment",
        "Other",
        "Transport",
        "Finance",
      ][Math.floor(Math.random() * 8)],
      amount: Math.floor(Math.random() * 900) + 50, // Случайное значение от 50 до 950
      balance: 5000 + index * 20, // Примерное увеличение баланса по мере добавления записей
      time: `2024-08-30 ${String(Math.floor(Math.random() * 24)).padStart(2, "0")}:${String(Math.floor(Math.random() * 60)).padStart(2, "0")}:${String(Math.floor(Math.random() * 60)).padStart(2, "0")}`,
    }));

    return { columns, data };
  }

  /**
   ** Process data received from API
   *  @returns Table in jsx
   */
  const DataTable = () => {
    const alldata = getTableData();
    const data = alldata.data;
    const columns = alldata.columns;

    return (
      <div>
        <ReactTabulator
          data={data}
          columns={columns}
          layout={"fitData"}
          pagination={"local"}
          paginationSize={10}
          paginationSizeSelector={[6, 10, 20, 50]}
          movableColumns={true}
        />
      </div>
    );
  };

  return <div></div>;
}
