import Review from '../review/review.tsx';
import ReviewForm from '../review-form/review-form.tsx';
import {Review as ReviewType} from '../../types/review';

type ReviewsListProps = {
  reviews: ReviewType[];
};

function ReviewsList({reviews}: ReviewsListProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewsList;
