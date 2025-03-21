import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa"; // Notification icon
import { FiFilter } from "react-icons/fi"; // Filter icon
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function MarketIntelegence() {

   const [stockData, setStockData] = useState([
    { id: 1, product: "Bitcoin", stock: 150, price: "$60,000" },
    { id: 2, product: "Ethereum", stock: 200, price: "$3,500" },
    { id: 3, product: "Litecoin", stock: 80, price: "$150" },
    { id: 4, product: "Ripple", stock: 500, price: "$0.45" },
  ]);

 

  // Simulate fetching data from API
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates");
        }
        const data = await response.json();
        setRates(data.rates);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading exchange rates...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }
  return (
    <>
      <div className="bg-white shadow-md w-full">
        {/* Sub Navbar */}
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">Market Intelligence</h2>
              <p className="text-gray-600">
                Analysis of market trends, correlations and investment flows
              </p>
            </div>

            <div className="flex space-x-4">
              <select className="bg-white border rounded-md px-4 py-2 text-gray-700">
                <option>Yearly</option>
                <option>Quarterly</option>
                <option>Monthly</option>
              </select>

              <select className="bg-white border rounded-md px-4 py-2 text-gray-700">
                <option>All Sectors</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Industry</option>
                <option>Education</option>
                <option>Agriculture</option>
              </select>

              <button className="flex items-center bg-white border px-4 py-2 rounded-md hover:bg-gray-200">
                <FiFilter className="mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}

        <div className="flex justify-center w-[80%] h-[20%] mx-auto">
          <div className=" bg-gradient-to-b from-green-300 to-blue-950 w-[50%] h-[27rem] flex justify-items-start ">
            <DotLottieReact
              src="https://lottie.host/841f10c5-71bf-4b32-90e9-a76aa1a77e80/GXJ0ETPY5i.lottie"
              loop
              autoplay
              className="w-[40rem]"
            />
          </div>
          <div>
            <div className="max-w-7xl mx-auto py-12 h-80 px-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                💱 Exchange Rates
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Object.entries(rates)
                  .slice(0, 12)
                  .map(([currency, rate]) => (
                    <div
                      key={currency}
                      className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <h3 className="text-lg font-semibold">{currency}</h3>
                      <p className="text-blue-600 text-xl">{rate.toFixed(4)}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Third Section  */}
        <div className="max-w-4xl mx-auto mt-12 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 Stock Data</h2>

      {loading ? (
        <div className="text-center text-blue-500">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-left">Stock</th>
                <th className="p-4 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-t ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.product}</td>
                  <td
                    className={`p-4 ${
                      item.stock > 100
                        ? "text-green-500"
                        : item.stock > 50
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.stock}
                  </td>
                  <td className="p-4">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
      </div>
    </>
  );
}

export default MarketIntelegence;
