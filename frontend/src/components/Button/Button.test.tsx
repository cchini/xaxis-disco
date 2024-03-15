/**
 *  @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('disco-app/Button', () => {
  it('should render correctly', () => {
    render(<Button>Hello</Button>);
    const heading = screen.getByRole('button');
    expect(heading).toBeInTheDocument();
  });

  it('should render custom className', () => {
    render(<Button className="customClassName">Button</Button>);
    const button = screen.getByRole('button');
    expect(button.classList.contains('customClassName')).toBe(true);
  });

  it('should render secondary button', () => {
    render(<Button hierarchy="secondary">Button</Button>);
    const button = screen.getByRole('button');
    expect(button.classList.contains('btnXaxis__secondary')).toBe(true);
  });
});
