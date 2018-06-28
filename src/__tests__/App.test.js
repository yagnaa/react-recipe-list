import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import SearchBar from '../components/simple/SearchBar';
import { full } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the search bar', () => {
  const wrapped = full(<App />).dive();

  expect(wrapped.find(SearchBar).length).toEqual(1);
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the Navigation bar', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
