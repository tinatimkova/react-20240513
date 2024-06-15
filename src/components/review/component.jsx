
import { UserContainer } from '../user/container';

export const Review = ( { review } ) => {
 
    const {userId, text, rating } = review;

    return (
        <span><UserContainer userId={userId} /><q>{text}</q>. Rating: {rating}.</span>  
    )
}