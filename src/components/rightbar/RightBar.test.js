import React from 'react';
import { render, screen } from '@testing-library/react';
import  '@testing-library/jest-dom';
import RightBar from './RightBar';

describe('RightBar Component', () => {
  test('renders RightBar component with suggestions', () => {
    render(<RightBar />);
    
    // Check if the "Suggestions for you" text is present
    const suggestionsText = screen.getByText(/Suggestions for you/i);
    expect(suggestionsText).toBeInTheDocument();

    // Check if the first user's information is displayed
    const firstUserName = screen.getByText(/unknown kumar/i);
    expect(firstUserName).toBeInTheDocument();

    // You can add more assertions based on your component's structure
  });

  test('renders RightBar component with recent activities', () => {
    render(<RightBar />);
    
    // Check if the "Recent activities" text is present
    const recentActivitiesText = screen.getByText(/Recent activities/i);
    expect(recentActivitiesText).toBeInTheDocument();

    // Check if the recent activity information is displayed
    const recentActivityText = screen.getByText(/changed their profile picture/i);
    expect(recentActivityText).toBeInTheDocument();

    // You can add more assertions based on your component's structure
  });

  test('renders RightBar component with online friends', () => {
    render(<RightBar />);
    
    // Check if the "Online Friends" text is present
    const onlineFriendsText = screen.getByText(/Online Friends/i);
    expect(onlineFriendsText).toBeInTheDocument();

    // Check if online friends' information is displayed
    const onlineFriends = screen.getAllByText(/unknown kumar/i);
    expect(onlineFriends.length).toBeGreaterThanOrEqual(1);

    // You can add more assertions based on your component's structure
  });

  // Add more test cases as needed
});
