import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomeView = () => {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterTerm, setFilterTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const maxPaginationButtons = 5; // Limit number of pagination buttons

  useEffect(() => {
    const fetchShops = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/v1/shops", {
          params: {
            page: currentPage,
            size: pageSize,
            productName: filterTerm, // Filter by product name instead of shop name
          },
        });

        const data = response.data;
        if (data.isSuccess) {
          setShops(data.data.shops);
          setTotalPages(data.data.pagination.totalPages);
        } else {
          setError("Error fetching shops");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchShops();
  }, [currentPage, pageSize, filterTerm]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
    setCurrentPage(1);
  };

  // Calculate pagination range to display
  const getPaginationRange = () => {
    const start = Math.max(
      1,
      currentPage - Math.floor(maxPaginationButtons / 2)
    );
    const end = Math.min(totalPages, start + maxPaginationButtons - 1);
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  return (
    <div className="bg-gray-50">
      <header className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-blue-800">Binar Car Rental</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700">
              Our Services
            </a>
            <a href="#" className="text-gray-700">
              Why Us
            </a>
            <a href="#" className="text-gray-700">
              Testimonial
            </a>
            <a href="#" className="text-gray-700">
              FAQ
            </a>
          </nav>
        </div>
        <Link to="/register">
          <button className="px-4 py-2 text-white bg-green-500 rounded-md">
            Register
          </button>
        </Link>
      </header>

      <main className="text-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Filter by car name"
            value={filterTerm}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        {!loading && !error && (
          <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.map((shop, index) => (
              <div
                key={index}
                className="p-4 border rounded-md bg-white shadow-md"
              >
                <img
                  src={shop.products[0].images[0]}
                  alt={shop.products[0].name}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="font-semibold">{shop.products[0].name}</h3>
                <p className="text-green-500 font-bold">
                  {shop.products[0].price}
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                  <span>4 orang</span> <span>Manual</span>{" "}
                  <span>Tahun 2020</span>
                </div>
                <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
                  Pilih Mobil
                </button>
              </div>
            ))}
            {shops.length === 0 && (
              <p className="text-gray-600 mt-8">No shops match the filter.</p>
            )}
          </section>
        )}

        {!loading && !error && totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
            >
              Prev
            </button>
            {getPaginationRange().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomeView;
