import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function InputTextAreaBasicDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex justify-content-center">
      <InputTextarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={5}
        cols={30}
      />
    </div>
  );
}
