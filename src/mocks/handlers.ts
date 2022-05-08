import registerHandler from './handlers/register';
import signinHandler from './handlers/auth';
import validateEmailHandler from './handlers/validateEmail';

export const handlers = [...registerHandler, ...signinHandler, ...validateEmailHandler];
