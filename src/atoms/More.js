import { useContext } from "react";
import * as actionTypes from '../context/actionTypes';
import context from "../context/context";

const options = [{
    value: 'none',
    name: 'None'
},
{
    value: 'population',
    name: 'Population'
}, {
    value: 'area',
    name: 'Area'
}];

const More = () => {
    const reducer = useContext(context);
    const { dispatch } = reducer;

    const handleChangeSorter = e => {
        dispatch({
            type: actionTypes.UPDATE_SORT_BY,
            payload: e.target.value
        })
    }

    return (
        <select onChange={handleChangeSorter}>
            {
                options.map(o => {
                    return (
                        <option key={o.value} value={o.value}>{o.name}</option>
                    )
                })
            }
        </select>
    )
}

export {
    More
}