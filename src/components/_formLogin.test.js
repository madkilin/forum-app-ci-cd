/**
 *  Testing Scenario
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React, { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormLogin from './_formLogin';

import '@testing-library/jest-dom';

describe('FormLogin component', () => {
  it('should update email input correctly', async () => {
    // Arrange
    await act(async () => {
      render(<FormLogin onHandlerSubmit={() => {}} />);
    });
    // Act
    const emailInput = screen.getByPlaceholderText('email');
    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    });

    // Assert
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    await act(async () => {
      render(<FormLogin onHandlerSubmit={() => {}} />);
    });
    // Act
    const passwordInput = screen.getByPlaceholderText('password');
    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: 'passwordtest' } });
    });

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });
  it('should handle form submission', async () => {
    // Arrange
    const mockSubmit = jest.fn();
    render(<FormLogin onHandlerSubmit={mockSubmit} />);
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const loginButton = screen.getByDisplayValue('Login');

    // Action
    await act(async () => {
      await userEvent.type(emailInput, 'email@test.com');
      await userEvent.type(passwordInput, 'password123');
    });
    await act(async () => {
      fireEvent.submit(loginButton);
    });
    // Assert
    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'email@test.com',
      password: 'password123',
      event: expect.anything(),
    });
  });
});
