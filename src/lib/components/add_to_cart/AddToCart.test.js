import React from 'react';
import ReactDOM from 'react-dom';
import AddToCart from './AddToCart';

it('AddToCart renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddToCart />, div);
});
