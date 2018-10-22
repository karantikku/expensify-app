import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByDate } from '../actions/filters';
import { sortByAmount } from '../actions/filters';
const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text} 
            onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select 
            value={props.filters.sortBy}
            onChange={(e) => {
                {e.target.value === 'date' ? props.dispatch(sortByDate(e.target.value)) : props.dispatch(sortByAmount(e.target.value))}
            }}>
            <option value="amount">Amount</option>
            <option value="date">Date</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}
export default connect(mapStateToProps)(ExpenseListFilters);