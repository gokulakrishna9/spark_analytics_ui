// https://primereact.org/progressbar/
import React from "react";
import { ProgressBar } from "primereact/progressbar";

export default function IndeterminateDemo() {
  return (
    <div className="card">
      <ProgressBar mode="indeterminate" style={{ height: "6px" }}></ProgressBar>
    </div>
  );
}
