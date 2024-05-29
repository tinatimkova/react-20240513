export const Rating = ({ onRatingChange, currentRating}) => {

    const ratingScale= [...Array(6).keys()].slice(1);

    return <div>
        {ratingScale.map((rating) => 
        <button 
        onClick={() => onRatingChange({type: 'setRating', payload: rating})} 
        disabled={currentRating==rating}>
            {rating}
        </button>)}
    </div>;
};