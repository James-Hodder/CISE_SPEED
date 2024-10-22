// TDD code for starRating

import React from 'react';
import { render, screen } from '@testing-library/react';
import StarRating from '@/components/starRating/starRating'; // Adjusted import path

describe('StarRating Component', () => {
  test('renders no stars for rating of 0', () => {
    render(<StarRating rating={0} />);
    const stars = screen.queryAllByText('★');
    expect(stars.length).toBe(0); // Expect no stars to be rendered
  });

  test('renders three stars for rating of 3', () => {
    render(<StarRating rating={3} />);
    const stars = screen.queryAllByText('★');
    expect(stars.length).toBe(3); // Expect three stars to be rendered
  });

  test('renders five stars for rating of 5', () => {
    render(<StarRating rating={5} />);
    const stars = screen.queryAllByText('★');
    expect(stars.length).toBe(5); // Expect five stars to be rendered
  });

  test('renders no stars for rating less than 0', () => {
    render(<StarRating rating={-1} />);
    const stars = screen.queryAllByText('★');
    expect(stars.length).toBe(0); // Expect no stars to be rendered
  });

  test('renders six stars for rating more than 6', () => {
    render(<StarRating rating={7} />);
    const stars = screen.queryAllByText('★');
    expect(stars.length).toBe(6); // Expect clamped value, should render 6 stars
  });
});
