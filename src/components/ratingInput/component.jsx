import { Button } from "../button/component";

export const RatingInput = ({ onChange, value, maxRating = 5}) => {

    return <div>
        {new Array(maxRating).fill(null).map((_, index) => 
        <Button
        onClick={() => onChange(index + 1)} 
        disabled={value == index + 1} >
            {index + 1}
        </Button>)}
    </div>;
};