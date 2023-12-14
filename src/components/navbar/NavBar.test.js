import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import  '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import { LoginContext } from '../../context/LoginContext';

// Mock the context value
const contextValue = {
  setCurrentUser: jest.fn(),
};

// Mock the LoginContext provider
const LoginContextProvider = ({ children }) => (
  <LoginContext.Provider value={contextValue}>{children}</LoginContext.Provider>
);

// Wrapper component with the context provider
const Wrapper = ({ children }) => (
  <Router>
    <LoginContextProvider>{children}</LoginContextProvider>
  </Router>
);

// Tests
describe('NavBar component', () => {
  test('renders NavBar with correct elements', () => {
    render(<NavBar />, { wrapper: Wrapper });

    // Check if important elements are present
    expect(screen.getByText('Orange')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
    // Add more assertions based on your component structure
  });

  test('clicking on Logout button calls logOutHandler', () => {
    render(<NavBar />, { wrapper: Wrapper });

    // Click the Logout button
    fireEvent.click(screen.getByText('Logout'));

    // Check if logOutHandler function is called
    expect(contextValue.setCurrentUser).toHaveBeenCalledWith(false);
  });
});
