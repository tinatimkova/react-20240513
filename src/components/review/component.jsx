export const Review = ( { review } ) => {
    return (
        <span>From: {review.user}. <q>{review.text}</q>. Rating: {review.rating}.</span>
    )
}