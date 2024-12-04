// src/pages/UserReviews.js
import React, { useState } from 'react';

// Sample reviews data (this would typically come from a backend or database)
const initialReviews = [
    { id: 1, serviceName: "Cafe A", review: "Great coffee and atmosphere!", rating: 5 },
    { id: 2, serviceName: "Gym B", review: "Clean and well-maintained gym.", rating: 4 },
    { id: 3, serviceName: "Library C", review: "A quiet place to study!", rating: 5 },
];

const UserReviews = () => {
    const [reviews, setReviews] = useState(initialReviews);
    const [newReview, setNewReview] = useState({ serviceName: "", review: "", rating: 1 });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.serviceName && newReview.review) {
            setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
            setNewReview({ serviceName: "", review: "", rating: 1 }); // Reset form
        }
    };

    return (
        <div className="user-reviews-container">
            <h1>User Reviews</h1>

            <div className="reviews-list">
                {reviews.map((review) => (
                    <div key={review.id} className="review-item">
                        <h3>{review.serviceName}</h3>
                        <p>{review.review}</p>
                        <p>Rating: {review.rating}⭐</p>
                    </div>
                ))}
            </div>

            <h2>Submit a Review</h2>
            <form onSubmit={handleSubmit} className="review-form">
                <input
                    type="text"
                    placeholder="Service Name"
                    value={newReview.serviceName}
                    onChange={(e) => setNewReview({ ...newReview, serviceName: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Your Review"
                    value={newReview.review}
                    onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                    required
                />
                <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                >
                    <option value={1}>1⭐</option>
                    <option value={2}>2⭐</option>
                    <option value={3}>3⭐</option>
                    <option value={4}>4⭐</option>
                    <option value={5}>5⭐</option>
                </select>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default UserReviews;
