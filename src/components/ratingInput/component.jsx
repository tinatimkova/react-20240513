export const RatingInput = ({ onChange, value, maxRating = 5, theme}) => {

    return <div>
        {new Array(maxRating).fill(null).map((_, index) => 
        <button 
        onClick={() => onChange(index + 1)} 
        disabled={value == index + 1}
        style={theme}>
            {index + 1}
        </button>)}
    </div>;
};