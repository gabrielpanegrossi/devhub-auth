import registerHandler from './handlers/register';
import signinHandler from './handlers/auth';
import validateEmailHandler from './handlers/validateEmail';
import validateTokenHandler from './handlers/validateAuthorization';

export const handlers = [
  ...registerHandler,
  ...signinHandler,
  ...validateEmailHandler,
  ...validateTokenHandler,
];
