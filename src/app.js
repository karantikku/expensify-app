import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({description: 'Water Bill', amount: 500}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 300}));
store.dispatch(setTextFilter('water bill'));
const visibleExpenses = getVisibleExpense(store.getState().expenses, store.getState().filters);
console.log(visibleExpenses);
ReactDOM.render(<AppRouter />, document.getElementById('app'));

