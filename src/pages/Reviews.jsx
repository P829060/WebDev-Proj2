import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          throw new Error("Data is not an array");
        }
      })
      .catch(err => {
        console.error("Error fetching reviews:", err);
        setError("Could not load reviews.");
      });
  }, []);

  return (
    <>
      {/* ✅ Tailwind CDN v3.4.1 for backdrop-blur and other utilities */}
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Fan Reviews</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl shadow-lg border border-white/10 bg-black/50 backdrop-blur-md transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-1">{review.name}</h3>
                <p className="text-sm text-gray-300 mb-1">
                  {review.email} • {review.contact}
                </p>
                <p className="italic text-sm mb-2">Fav: {review.footballer}</p>
                <p className="text-white">{review.comments}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
