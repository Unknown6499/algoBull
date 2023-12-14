import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '../../../../algoBull/src/pages/profile/Profile';

describe('Profile Component', () => {
  it('renders user information', () => {
    const { getByText, getByAltText } = render(<Profile />);

    // Ensure that user information is rendered
    expect(getByText('Full Name')).toBeInTheDocument();
    expect(getByText('Bio: User Bio')).toBeInTheDocument();
    expect(getByAltText('User Profile Picture')).toBeInTheDocument();
  });

  it('allows editing bio', () => {
    const { getByText, getByPlaceholderText } = render(<Profile />);

    // Click the "Edit Bio" button
    fireEvent.click(getByText('Edit Bio'));

    // Ensure that the input field for bio is rendered
    expect(getByPlaceholderText('Enter new bio')).toBeInTheDocument();

    // Simulate typing in the new bio
    fireEvent.change(getByPlaceholderText('Enter new bio'), {
      target: { value: 'New Bio' },
    });

    // Click the "Save" button
    fireEvent.click(getByText('Save'));

    // Ensure that the new bio is displayed
    expect(getByText('Bio: New Bio')).toBeInTheDocument();
  });

  it('allows editing profile picture', () => {
    const { getByText, getByPlaceholderText } = render(<Profile />);

    // Click the "Change Profile Picture" button
    fireEvent.click(getByText('Change Profile Picture'));

    // Ensure that the input field for profile picture is rendered
    expect(getByPlaceholderText('Enter new profile picture URL')).toBeInTheDocument();

    // Simulate typing in the new profile picture URL
    fireEvent.change(getByPlaceholderText('Enter new profile picture URL'), {
      target: { value: 'https://example.com/new-profile-picture.jpg' },
    });

    // Click the "Save" button
    fireEvent.click(getByText('Save'));

    // Ensure that the new profile picture is displayed
    expect(getByAltText('user profile picture').src).toBe('https://example.com/new-profile-picture.jpg');
  });
});
