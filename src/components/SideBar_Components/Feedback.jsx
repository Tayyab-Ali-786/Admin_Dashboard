import React, { useEffect, useState } from "react";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";

export default function Product() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  // Render stars from rating.rate
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-0.5">
        {Array(fullStars)
          .fill("★")
          .map((star, i) => (
            <span key={`full-${i}`} className="text-yellow-500">
              {star}
            </span>
          ))}
        {halfStar && <span className="text-yellow-500">☆</span>}
        {Array(emptyStars)
          .fill("☆")
          .map((star, i) => (
            <span key={`empty-${i}`} className="text-gray-300">
              {star}
            </span>
          ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Customer Feedback
          </h1>

          {loading ? (
            <p className="text-gray-500">Loading reviews...</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg shadow p-5 flex flex-col"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {review.title}
                  </h2>
                  <p className="text-gray-600 mb-3">{review.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    {renderStars(review.rating?.rate || 0)}
                    <span className="text-sm text-gray-500">
                      {review.rating?.count || 0} reviews
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
