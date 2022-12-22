import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getReviewsApi } from 'utils/getMoviesApi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    getReviewsApi(movieId).then(resp => setReviews(resp.results));
  }, [movieId]);
  if (!reviews) return;

  //   console.log(reviews);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>"{content}"</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any review for this movie</p>
  );
};
