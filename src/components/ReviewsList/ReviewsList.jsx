import { ReviewItem } from './ReviewItem';
import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  if (reviews.length === 0) {
    return 'We don`t have any reviews for this movie. ';
  } else {
    return (
      <ul className="">
        {reviews &&
          reviews.map(review => <ReviewItem key={review.id} {...review} />)}
      </ul>
    );
  }
};
ReviewsList.propType = {
  movie: PropTypes.object,
};
