// https://primereact.org/breadcrumb/
import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import Link from "next/link";
export default function RouterDemo() {
  const items = [
    { label: "Components" },
    { label: "Form" },
    {
      label: "InputText",
      template: () => (
        <Link href="/inputtext">
          <a className="text-primary font-semibold">InputText</a>
        </Link>
      ),
    },
  ];
  const home = { icon: "pi pi-home", url: "https://primereact.org" };

  return <BreadCrumb model={items} home={home} />;
}