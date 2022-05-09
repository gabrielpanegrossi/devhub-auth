import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as MockReactRouterDom from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { handlers } from '~mocks/handlers';
import Register from '../index';

const server = setupServer(...handlers);
const mockNavigate = jest.fn();

jest.mock('ahooks', () => ({
  useRequest: () => ({
    runAsync: async () => {},
    loading: false,
  }),
}));

jest.mock('~services', () => ({
  auth: {
    validateEmail: async () => ({ isValid: true }),
  },
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<typeof MockReactRouterDom>('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Register flow', () => {
  beforeEach(() => {
    render(
      <Router>
        <Register />
      </Router>
    );
  });
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should match snpashot', () => {
    const container = render(
      <Router>
        <Register />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render', () => {
    expect(screen.queryByRole('form')).toBeInTheDocument();
    expect(screen.queryByRole('button')).toBeEnabled();
  });

  it('should validate all form fields', async () => {
    const button = screen.queryByRole('button');

    if (button) userEvent.click(button);

    await waitFor(() => {
      expect(screen.queryAllByLabelText('Input error').length).toBe(5);
    });
  });

  it('should submit form and navigate to next page', async () => {
    const user = userEvent.setup();

    const button = screen.getByRole('button');
    const nameField = screen.getByLabelText('name');
    const lastNameField = screen.getByLabelText('lastName');
    const emailField = screen.getByLabelText('email');
    const passwordField = screen.getByLabelText('password');
    const confirmPasswordField = screen.getByLabelText('passwordConfirmation');

    await user.type(nameField, 'Gabriel');
    await user.type(lastNameField, 'Santos');
    await user.type(emailField, 'gabriel@gmail.com');
    await user.type(passwordField, 'salada123');
    await user.type(confirmPasswordField, 'salada123');

    await user.click(button);

    await waitFor(() => {
      expect(mockNavigate).toBeCalledWith('/');
    });
  });
});
