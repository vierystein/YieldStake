// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders YieldStake title', () => {
    render(<App />);
    const titleElement = screen.getByText(/YieldStake/i);
    expect(titleElement).toBeInTheDocument();
});
