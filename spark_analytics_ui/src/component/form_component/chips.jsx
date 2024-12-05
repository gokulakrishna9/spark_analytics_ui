// https://primereact.org/chips/
// to see how it works type something and press enter

import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function BasicDemoChips() {
  const [value, setValue] = useState([]);

  return (
    <div className="card p-fluid">
      <Chips value={value} onChange={(e) => setValue(e.value)} />
    </div>
  );
}
    