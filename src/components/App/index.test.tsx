import { render } from '@testing-library/react';
import React from 'react';
import App from './index';

it('should render properly', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello World!')).toBeInTheDocument();
});
