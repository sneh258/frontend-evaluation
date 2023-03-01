import React from 'react';
import Card_header from '../Card_header';
import { fireEvent, render, screen,} from '@testing-library/react';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Home', () => {
  it('should show the home page when the home page is rendered', () => {
    render(<Card_header/>);
    expect(screen.getByText('filter')).toBeTruthy();
    expect(screen.getByText('Registered')).toBeTruthy();
    expect(screen.getByText('Bookmarked')).toBeTruthy();
    expect(screen.getByText('Seats Available')).toBeTruthy();
    expect(screen.getByText('All')).toBeTruthy();
  });
  it('should navigate to the home page when the All buton is clicked', () => {
    render(<Card_header/>);
    expect(mockNavigate).toBeCalledTimes(0);
    fireEvent.click(screen.getByText('All'));
    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
