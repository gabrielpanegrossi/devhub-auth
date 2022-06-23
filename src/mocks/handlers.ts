import registerHandler from './handlers/register';
import signinHandler from './handlers/auth';
import validateEmailHandler from './handlers/emailExists';
import validateTokenHandler from './handlers/validateAuthorization';
import validatePasswordRecoveryCode from './handlers/validatePasswordRecoveryCode';

export const handlers = [
  ...registerHandler,
  ...signinHandler,
  ...validateEmailHandler,
  ...validateTokenHandler,
  ...validatePasswordRecoveryCode,
];
