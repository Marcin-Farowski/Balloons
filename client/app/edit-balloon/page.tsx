import React from "react";
import Header from "@components/Header"
import EditBalloonList from "@components/edit-balloon/EditBalloonList";

function BalloonListToEdit() {
  return (
    <div>
      <Header/>
      <EditBalloonList/>
    </div>
  );
}

export default BalloonListToEdit;