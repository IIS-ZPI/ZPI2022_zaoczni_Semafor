import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currency] = useState("usd");
  const [days] = useState(7);
  const [currencyValue, setCurrencyValue] = useState(0);
  const [apiResponseData, setApiResponseData] = useState(0);

  const url = `//api.nbp.pl/api/exchangerates/rates/a/${currency}/last/${days}`;
  async function getCurrencyData() {
    const response = await fetch(url);
    const data = await response.json();
    setApiResponseData(data);
    setCurrencyValue(data.rates[days - 1].mid);
  }

  // onload
  useEffect(() => {
    getCurrencyData();
  });
  console.log(apiResponseData);

  return (
    <div className="App">
      <a
        className="link"
        href="http://api.nbp.pl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        API NBP
      </a>
      <div>
        Uwagi! Aktualny kurs {currency}: {currencyValue} zł
      </div>
    </div>
  );
}

export default App;
