import React from "react";
import Header from "@components/Header"
import EditBalloonForm from "@components/edit-balloon-id/EditBalloonForm";

function AddBalloon() {
  return (
    <div>
      <Header/>
      <EditBalloonForm/>
    </div>
  );
}

export default AddBalloon;