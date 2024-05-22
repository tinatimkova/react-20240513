export const Review = ( { review } ) => {

    const {user, text, rating} = review;

    return (
        <span>From: {user}. <q>{text}</q>. Rating: {rating}.</span>
    )
}