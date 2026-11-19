import { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/3/comments"
        );

        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Помилка завантаження відгуків:", error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <section className="py-10">
      <h2 className="mb-6 text-2xl font-bold text-[#82718e]">
        Відгуки
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
            <h3 className="mb-2 font-bold text-[#82718e]">
              {review.name}
            </h3>

            <p className="mb-3 text-sm text-[#a48aac]">
              {review.email}
            </p>

            <p className="text-sm leading-relaxed text-[#827988]">
              {review.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;