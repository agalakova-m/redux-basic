import './styles.css';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { increment, decrement } from './redux/actions';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, 0);

addBtn.addEventListener('click', () => {
  store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
  setTimeout(() => {
    store.dispatch(increment());
  }, 2000);
});

themeBtn.addEventListener('click', () => {
  // document.body.classList.toggle('dark');
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state;
});

store.dispatch({ type: 'INIT' });
