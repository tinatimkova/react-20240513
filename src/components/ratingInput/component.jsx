export const RatingInput = ({ onChange, value, maxRating = 5, isDarkTheme }) => {

    return <div>
        {new Array(maxRating).fill(null).map((_, index) => 
        <button 
        onClick={() => onChange(index + 1)} 
        disabled={value == index + 1}
        style={{backgroundColor: isDarkTheme ? 'grey' : null}}>
            {index + 1}
        </button>)}
    </div>;
};