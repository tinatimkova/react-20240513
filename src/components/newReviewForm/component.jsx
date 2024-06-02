import { useReducer } from 'react';
import { RatingInput } from '../ratingInput/component';

const DEFAULT_FORM_STATE = {name: '', text: '', rating: 1};

const reducer = (state, {type, payload}) => {
    switch(type) {
        case "setName": 
            return {...state, name: payload};
        case "setText": 
            return {...state, text: payload};
        case "setRating": 
            return {...state, rating: payload};
        case "resetForm": 
            return {...DEFAULT_FORM_STATE};
        default: 
            return state;
    }
}

export const NewReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_STATE);

    console.log(form);

    return (
        <div>
            <form>
                <div>
                    <span>Name:</span>
                    <input type="text"
                    value={form.name} 
                    onChange={event => dispatch({type: "setName", payload: event.target.value})} />
                </div>
                <div>
                    <span>Text:</span>
                    <input type="text" 
                    value={form.text} 
                    onChange={event => dispatch({type: "setText", payload: event.target.value})}/>
                </div>
                <div>
                    <span>Rating:</span>
                    <RatingInput value={form.rating} onChange={rating => dispatch({ type: "setRating", payload: rating})} />
                </div>
            </form>
            <button onClick={() => dispatch({type: "resetForm"})}>Save</button>
        </div>
    );
};