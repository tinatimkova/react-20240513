import { NewReviewForm } from '../newReviewForm/component';
import { ReviewContainer } from '../review/container.jsx';

export const Reviews = ( { reviewIds } ) => {
    
    return (
        <div>
            <h3>Reviews</h3>
            <ul>{reviewIds.map(id => 
                <li><ReviewContainer reviewId={id} /></li>)}
            </ul>
            <NewReviewForm />
        </div>
    )
}