import React from "react";
import useFetchApi from "../hooks/useFetchApi";

const CategoryDetails = () => {
  const { data, error, loading, status } = useFetchApi(
    "https://fakestoreapi.com/products"
  );

  // if (loading) return
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.isArray(data) ? (
          data.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-2 shadow-sm hover:shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[150px] object-contain"
              />
              <p className="mt-2 text-sm font-medium">{item.title}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default CategoryDetails;
