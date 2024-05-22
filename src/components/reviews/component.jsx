import { Review } from '../review/component.jsx';

export const Reviews = ( { reviews } ) => {

    return (
        <div>
            <h3>Reviews</h3>
            <ul>{reviews.map(review => (
               Boolean(review) && <li><Review review={review} /></li>
                ))}
            </ul>
        </div>
    )
}