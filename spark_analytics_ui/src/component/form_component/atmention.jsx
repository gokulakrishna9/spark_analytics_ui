import React, { useState, useEffect } from "react";
import { Mention } from "primereact/mention";


export default function BasicDemo() {
  const [value, setValue] = useState("");
  const [customers, setCustomers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setCustomers(['Gokul', 'Krishna', 'Srinivasulu', 'Hari']);
  }, []);

  const onSearch = (event) => {
    //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
    setTimeout(() => {
      const query = event.query;
      let suggestions;

      if (!query.trim().length) {
        suggestions = [...customers];
      } else {
        suggestions = customers.filter((customer) => {
          return customer.nickname
            .toLowerCase()
            .startsWith(query.toLowerCase());
        });
      }

      setSuggestions(suggestions);
    }, 250);
  };

  const itemTemplate = (suggestion) => {
    const src =
      "https://primefaces.org/cdn/primereact/images/avatar/" +
      suggestion.representative.image;

    return (
      <div className="flex align-items-center">
        {{/*<img alt={suggestion.name} src={src} width="32" />*/}}
        <span className="flex flex-column ml-2">
          {suggestion.name}
          <small
            style={{ fontSize: ".75rem", color: "var(--text-color-secondary)" }}
          >
            @{suggestion.nickname}
          </small>
        </span>
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <Mention
        value={value}
        onChange={(e) => setValue(e.target.value)}
        suggestions={suggestions}
        onSearch={onSearch}
        field="nickname"
        placeholder="Enter @ to mention people"
        rows={5}
        cols={40}
        itemTemplate={itemTemplate}
      />
    </div>
  );
}
