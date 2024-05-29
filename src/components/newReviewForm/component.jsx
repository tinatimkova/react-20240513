import { useReducer } from 'react';
import { Rating } from '../rating/component';

const DEFAULT_FORM_STATE = {name: '', text: '', rating: 1};

const reducer = (state, {type, payload}) => {
    switch(type) {
        case "setName": 
            return {...state, name: payload};
        case "setText": 
            return {...state, text: payload};
        case "setRating": 
            return {...state, rating: payload};
        case "submitForm": 
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
                    <Rating currentRating={form.rating} onRatingChange={dispatch} />
                </div>
            </form>
            <button onClick={() => dispatch({type: "submitForm"})}>Save</button>
        </div>
    );
};