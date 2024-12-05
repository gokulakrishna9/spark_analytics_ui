// https://primereact.org/knob/
import React, { useState } from "react";
import { Knob } from "primereact/knob";

export default function KnobMinMaxDemo() {
  const [value, setValue] = useState(10);

  return (
    <div className="card flex justify-content-center">
      <Knob
        value={value}
        onChange={(e) => setValue(e.value)}
        min={-50}
        max={50}
      />
    </div>
  );
}
