// https://primereact.org/inputotp/
import React, { useState } from "react";
import { InputOtp } from "primereact/inputotp";

export default function InputOtpBasicDemo() {
  const [token, setTokens] = useState();

  return (
    <div className="card flex justify-content-center">
      <InputOtp value={token} onChange={(e) => setTokens(e.value)} />
    </div>
  );
}
