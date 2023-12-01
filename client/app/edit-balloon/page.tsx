import React from "react";
import Header from "@components/Header"
import EditBalloonList from "@components/edit-balloon/EditBalloonList";

function AddBalloon() {
  return (
    <div>
      <Header/>
      <EditBalloonList/>
    </div>
  );
}

export default AddBalloon;