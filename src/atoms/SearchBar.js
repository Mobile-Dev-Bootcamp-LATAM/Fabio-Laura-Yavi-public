import { useContext } from "react";
import context from "../context/context";
import * as actionTypes from '../context/actionTypes';

const SearchBar = () => {
    const reducer = useContext(context);
    const { state, dispatch } = reducer;
    const { filterBy } = state;

    const handleChange = e => {
        dispatch({
            type: actionTypes.SET_FILTER_BY,
            payload: e.target.value
        });
    }

    return (
        <div>
            <label>Search</label>
            <input type='text' onChange={handleChange} value={filterBy}/>
        </div>
    )
}

export {
    SearchBar
}