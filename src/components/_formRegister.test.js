/**
 *  Testing Scenario
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React, { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormRegister from './_formRegister';

import '@testing-library/jest-dom';

describe('FormRegister component', () => {
  it('should update name input correctly', async () => {
    // Arrange
    await act(async () => {
      render(<FormRegister onHandlerSubmit={() => {}} />);
    });
    // Act
    const nameInput = screen.getByPlaceholderText('nama');
    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'nametest' } });
    });

    // Assert
    expect(nameInput).toHaveValue('nametest');
  });
  it('should update email input correctly', async () => {
    // Arrange
    await act(async () => {
      render(<FormRegister onHandlerSubmit={() => {}} />);
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
      render(<FormRegister onHandlerSubmit={() => {}} />);
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
    render(<FormRegister onHandlerSubmit={mockSubmit} />);
    const nameInput = screen.getByPlaceholderText('nama');
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const registerButton = screen.getByDisplayValue('Register');

    // Action
    await act(async () => {
      await userEvent.type(nameInput, 'nameTest');
      await userEvent.type(emailInput, 'email@test.com');
      await userEvent.type(passwordInput, 'password123');
    });
    await act(async () => {
      fireEvent.submit(registerButton);
    });
    // Assert
    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'nameTest',
      email: 'email@test.com',
      password: 'password123',
      event: expect.anything(),
    });
  });
});
