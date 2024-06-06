import { useSelector } from "react-redux";

export const Review = ( { reviewId } ) => {
    
    const {user, text, rating} = useSelector(state => state.review.entities[reviewId]);

    return (
        <span>From: {user}. <q>{text}</q>. Rating: {rating}.</span>
        
    )
}