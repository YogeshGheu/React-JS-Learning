import { useEffect, useState } from "react";
import CurrencyCard from "./components/CurrencyCard";

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount1, setAmount1] = useState("");  // Amount in the first input field
  const [currency1, setCurrency1] = useState("EUR");  // Default to EUR as base currency
  const [amount2, setAmount2] = useState("");  // Amount in the second input field
  const [currency2, setCurrency2] = useState("USD");  // Default to USD as target currency

  // Fetch the currency rates
  const getRates = async () => {
    const tempCurrencyList = [];
    // const requestURL = "https://api.exchangeratesapi.io/v1/latest?access_key=YOUR_API_KEY"
    // const request = await fetch(requestURL)
    // const response = await request.json()
    const response = {
      "success": true,
      "timestamp": 1734169155,
      "base": "EUR",
      "date": "2024-12-14",
      "rates": {
        "AED": 3.858438,
        "AFN": 73.420771,
        "ALL": 98.124301,
        "AMD": 412.092072,
        "ANG": 1.889905,
        "AOA": 958.441768,
        "ARS": 1067.750054,
        "AUD": 1.65195,
        "AWG": 1.890855,
        "AZN": 1.789978,
        "BAM": 1.955288,
        "BBD": 2.117245,
        "BDT": 125.317179,
        "BGN": 1.955288,
        "BHD": 0.395696,
        "BIF": 3099.488239,
        "BMD": 1.050475,
        "BND": 1.41443,
        "BOB": 7.246102,
        "BRL": 6.347394,
        "BSD": 1.048625,
        "BTC": 0.000010322428,
        "BTN": 88.883721,
        "BWP": 14.276261,
        "BYN": 3.431701,
        "BYR": 20589.307624,
        "BZD": 2.113646,
        "CAD": 1.495509,
        "CDF": 3014.863282,
        "CHF": 0.937509,
        "CLF": 0.037255,
        "CLP": 1027.98077,
        "CNY": 7.643365,
        "CNH": 7.647189,
        "COP": 4558.806041,
        "CRC": 528.561569,
        "CUC": 1.050475,
        "CUP": 27.837584,
        "CVE": 110.236129,
        "CZK": 25.019375,
        "DJF": 186.731095,
        "DKK": 7.458271,
        "DOP": 63.733308,
        "DZD": 140.513199,
        "EGP": 53.365024,
        "ERN": 15.757123,
        "ETB": 133.222509,
        "EUR": 1,
        "FJD": 2.43684,
        "FKP": 0.831957,
        "GBP": 0.832587,
        "GEL": 2.952245,
        "GGP": 0.831957,
        "GHS": 15.414963,
        "GIP": 0.831957,
        "GMD": 75.634565,
        "GNF": 9052.6291,
        "GTQ": 8.077884,
        "GYD": 219.382543,
        "HKD": 8.168031,
        "HNL": 26.593035,
        "HRK": 7.534958,
        "HTG": 137.134084,
        "HUF": 408.953895,
        "IDR": 16841.68597,
        "ILS": 3.775927,
        "IMP": 0.831957,
        "INR": 89.090253,
        "IQD": 1373.640241,
        "IRR": 44211.865468,
        "ISK": 145.72228,
        "JEP": 0.831957,
        "JMD": 164.326962,
        "JOD": 0.745211,
        "JPY": 161.377632,
        "KES": 135.534503,
        "KGS": 91.346884,
        "KHR": 4221.894278,
        "KMF": 489.652644,
        "KPW": 945.426803,
        "KRW": 1507.904567,
        "KWD": 0.323505,
        "KYD": 0.873871,
        "KZT": 549.835997,
        "LAK": 22970.983858,
        "LBP": 93903.306557,
        "LKR": 304.310301,
        "LRD": 188.750566,
        "LSL": 18.813473,
        "LTL": 3.10178,
        "LVL": 0.635422,
        "LYD": 5.120659,
        "MAD": 10.468558,
        "MDL": 19.16898,
        "MGA": 4960.700784,
        "MKD": 61.513889,
        "MMK": 3411.90143,
        "MNT": 3569.513501,
        "MOP": 8.398001,
        "MRU": 41.65609,
        "MUR": 49.425241,
        "MVR": 16.181241,
        "MWK": 1818.323778,
        "MXN": 21.142057,
        "MYR": 4.67501,
        "MZN": 67.129262,
        "NAD": 18.813473,
        "NGN": 1626.25106,
        "NIO": 38.589893,
        "NOK": 11.703919,
        "NPR": 142.213754,
        "NZD": 1.823947,
        "OMR": 0.404274,
        "PAB": 1.048625,
        "PEN": 3.919673,
        "PGK": 4.243889,
        "PHP": 61.604089,
        "PKR": 291.566838,
        "PLN": 4.265583,
        "PYG": 8208.850088,
        "QAR": 3.822699,
        "RON": 4.974633,
        "RSD": 116.923378,
        "RUB": 108.471591,
        "RWF": 1439.423013,
        "SAR": 3.948458,
        "SBD": 8.806714,
        "SCR": 15.834853,
        "SDG": 631.864501,
        "SEK": 11.529939,
        "SGD": 1.416359,
        "SHP": 0.831957,
        "SLE": 23.954679,
        "SLL": 22027.936151,
        "SOS": 599.243057,
        "SRD": 36.982008,
        "STD": 21742.70909,
        "SVC": 9.175597,
        "SYP": 2639.349903,
        "SZL": 18.806075,
        "THB": 35.867454,
        "TJS": 11.4561,
        "TMT": 3.687167,
        "TND": 3.316631,
        "TOP": 2.460321,
        "TRY": 36.709108,
        "TTD": 7.118136,
        "TWD": 34.154409,
        "TZS": 2490.447747,
        "UAH": 43.691557,
        "UGX": 3823.998488,
        "USD": 1.050475,
        "UYU": 46.607793,
        "UZS": 13485.468132,
        "VES": 52.806163,
        "VND": 26687.314295,
        "VUV": 124.714481,
        "WST": 2.902239,
        "XAF": 655.785249,
        "XAG": 0.034351,
        "XAU": 0.000396,
        "XCD": 2.838961,
        "XDR": 0.795792,
        "XOF": 655.785249,
        "XPF": 119.331742,
        "YER": 263.012687,
        "ZAR": 18.761065,
        "ZMK": 9455.538246,
        "ZMW": 28.994406,
        "ZWL": 338.252482
      }
    };
    setExchangeRates(response.rates);
    for (const key in response.rates) {
      tempCurrencyList.push(key);
    }
    setCurrencyList(tempCurrencyList);
  };

  useEffect(() => {
    getRates();
  }, []);

  // Handlers for amount and currency changes
  const handleAmountChange1 = (e) => {
    setAmount1(e.target.value);
  };

  const handleCurrencyChange1 = (e) => {
    setCurrency1(e.target.value);
  };

  const handleAmountChange2 = (e) => {
    setAmount2(e.target.value);
  };

  const handleCurrencyChange2 = (e) => {
    setCurrency2(e.target.value);
  };

  // Handle currency conversion
  const handleConversion = () => {
    if (amount1 && currency1 && currency2) {
      const rateFromCurrency1 = exchangeRates[currency1];
      const rateToCurrency2 = exchangeRates[currency2];

      if (rateFromCurrency1 && rateToCurrency2) {
        // Convert amount1 to EUR (base currency)
        const amountInEUR = amount1 / rateFromCurrency1;

        // Convert from EUR to the target currency
        const result = amountInEUR * rateToCurrency2;
        setAmount2(result.toFixed(2)); // Update the second input with the result
      }
    }
  };

  // Handle swapping currencies
  const handleSwap = () => {
    setAmount2(""); // Clear the second input field when swapping
    setCurrency1(currency2); // Swap the currencies
    setCurrency2(currency1);
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center bg-slate-700 bg-opacity-80 w-fit p-5 rounded-lg">
          <CurrencyCard
            amount={amount1}
            currency={currency1}
            currencyList={currencyList}
            onAmountChange={handleAmountChange1}
            onCurrencyChange={handleCurrencyChange1}
          />

          <button
            className="mb-4 rounded-lg bg-gray-500 px-4 py-2"
            onClick={handleSwap}
          >
            Swap
          </button>

          <CurrencyCard
            amount={amount2}
            currency={currency2}
            currencyList={currencyList}
            onAmountChange={handleAmountChange2}
            onCurrencyChange={handleCurrencyChange2}
            isAmountDisabled={true}  // Disable the input field for the second card
          />

          <button
            className="rounded-lg bg-blue-500 px-6 py-2 w-fit"
            onClick={handleConversion}
          >
            Convert {currency1} to {currency2}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
