import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AxiosInstance } from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import * as MockReactRouterDom from 'react-router-dom';
import Register from '../index';
import { act } from 'react-dom/test-utils';

jest.mock('react-query', () => ({
  useMutation: () => ({
    mutateAsync: async (asyncFunction: AxiosInstance) => asyncFunction,
    isLoading: false,
  }),
}));

jest.mock('~services', () => ({
  auth: {
    emailExists: async (email: string) => {
      if (email === 'gabriel@gmail.com') return { exists: false };
      return { exists: true };
    },
    register: async () => ({ status: 'Success' }),
  },
}));

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<typeof MockReactRouterDom>('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Register flow', () => {
  beforeEach(async () => {
    render(
      <Router>
        <Register />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByRole('form')).toBeInTheDocument();
    });
  });

  it('should match snpashot', async () => {
    const container = render(
      <Router>
        <Register />
      </Router>
    );
    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });

  it('should render', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should validate all form fields', async () => {
    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getAllByLabelText('Input error').length).toBeGreaterThan(0);
    });
  });

  it('should reject an already registered email', async () => {
    const button = screen.getByRole('button');
    const emailField = screen.getByLabelText('email');

    fireEvent.input(emailField, { target: { value: 'reject@gmail.com' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('This email is already registered.')).toBeInTheDocument();
    });
  });

  it('should submit form and navigate to next page', async () => {
    const button = screen.getByRole('button');
    const nameField = screen.getByLabelText('name');
    const lastNameField = screen.getByLabelText('lastName');
    const emailField = screen.getByLabelText('email');
    const passwordField = screen.getByLabelText('password');
    const confirmPasswordField = screen.getByLabelText('passwordConfirmation');

    fireEvent.input(nameField, { target: { value: 'Gabriel' } });
    fireEvent.input(lastNameField, { target: { value: 'Santos' } });
    fireEvent.input(emailField, { target: { value: 'gabriel@gmail.com' } });
    fireEvent.input(passwordField, { target: { value: 'salada123' } });
    fireEvent.input(confirmPasswordField, { target: { value: 'salada123' } });
    fireEvent.click(button);

    waitFor(() => {
      expect(mockNavigate).toBeCalledWith('/');
    });
  });
});
