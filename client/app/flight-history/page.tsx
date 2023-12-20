import React from "react";
import Header from "@components/Header"
import FlightHistoryListComponent from "@components/flight-history/FlightHistoryList"

function FlightHistoryList() {
  return (
    <div>
      <Header/>
      <FlightHistoryListComponent/>
    </div>
  );
}

export default FlightHistoryList;