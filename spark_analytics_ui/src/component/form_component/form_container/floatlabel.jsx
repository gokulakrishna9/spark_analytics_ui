// https://primereact.org/floatlabel/
// Use with other components

import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelWidget() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex justify-content-center">
      <FloatLabel>
        <InputText
          id="username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="username">Username</label>
      </FloatLabel>
    </div>
  );
}
