// https://primereact.org/rating/
import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function NumberOfStarsDemo() {
  const [value, setValue] = useState(null);

  return (
    <div className="card flex justify-content-center">
      <Rating value={value} onChange={(e) => setValue(e.value)} stars={10} />
    </div>
  );
}
