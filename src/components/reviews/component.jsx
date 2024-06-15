import { NewReviewForm } from '../newReviewForm/component';
import { ReviewContainer } from '../review/container.jsx';

export const Reviews = ( { reviewIds } ) => {
    
    return (
        <div>
            <h3>Reviews</h3>
            <ul>{reviewIds.map(review => 
                <li><ReviewContainer reviewId={review} /></li>)}
            </ul>
            <NewReviewForm />
        </div>
    )
}