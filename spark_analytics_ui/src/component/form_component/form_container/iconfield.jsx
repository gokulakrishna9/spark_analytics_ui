// https://primereact.org/iconfield/
// Add icon to input field
import React from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

export default function IconFieldBasicDemo() {
  return (
    <div className="flex gap-3">
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText placeholder="Search" />
      </IconField>

      <IconField iconPosition="right">
        <InputIcon className="pi pi-spin pi-spinner"> </InputIcon>
        <InputText  placeholder="Input Two" />
      </IconField>
    </div>
  );
}
