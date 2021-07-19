import { render, screen, waitFor, act } from '@testing-library/react';
import React from 'react';
import RandomJokes from './RandomJokes';

const mockGetJoke = jest.fn().mockImplementation(() => Promise.resolve({ data: { setup: "setup", punchline: "punchline" } }));
jest.mock('./api', () => (
  jest.fn().mockImplementation(() => ({
    getRandomJoke: jest.fn().mockImplementation(() => {
      return mockGetJoke();
    })
  }))
));

describe('RandomJokes:', () => {
  test('renders question text on api response', async () => {
    act(() => {
      render(<RandomJokes />);
    });

    expect(screen.getByTestId("jokes-loading")).toBeInTheDocument();

    await waitFor(() => screen.getByTestId("jokes-question"), {
      timeout: 15000
    })
    expect(screen.getByTestId("jokes-question")).toBeInTheDocument();
    expect(screen.queryByTestId("jokes-loading")).not.toBeInTheDocument();
  });
});
