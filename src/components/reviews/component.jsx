import { Review } from '../review/component.jsx';
import { NewReviewForm } from '../newReviewForm/component';

export const Reviews = ( { reviews } ) => {

    return (
        <div>
            <h3>Reviews</h3>
            <ul>{reviews.map(review => (
               Boolean(review) && <li><Review review={review} /></li>
                ))}
            </ul>
            <NewReviewForm />
        </div>
    )
}