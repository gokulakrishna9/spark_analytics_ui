// https://primereact.org/selectbutton/
import React, { useState } from "react";
import { SelectButton } from "primereact/selectbutton";

export default function SelectButtonMultipleDemo() {
  const [value, setValue] = useState(null);
  const items = [
    { name: "Option 1", value: 1 },
    { name: "Option 2", value: 2 },
    { name: "Option 3", value: 3 },
  ];

  return (
    <div className="card flex justify-content-center">
      <SelectButton
        value={value}
        onChange={(e) => setValue(e.value)}
        optionLabel="name"
        options={items}
        multiple
      />
    </div>
  );
}
