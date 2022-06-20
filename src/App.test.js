import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EPMG link', () => {
  render(<App />);
  const linkElement = screen.getByText(/EPMG/i);
  expect(linkElement).toBeInTheDocument();
});
