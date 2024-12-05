// https://primereact.org/togglebutton/

import React, { useState } from "react";
import { ToggleButton } from "primereact/togglebutton";

export default function ToggleButtonBasicDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <ToggleButton
        checked={checked}
        onChange={(e) => setChecked(e.value)}
        className="w-8rem"
      />
    </div>
  );
}
