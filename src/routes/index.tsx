import { Routes, Route } from 'react-router-dom';
import {
  Auth,
  Register,
  PasswordRecoveryTemplate,
  PasswordRecoveryEmail,
  PasswordRecoveryCode,
} from '~containers';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path='signup' element={<Register />} />
      <Route path='password-recovery' element={<PasswordRecoveryTemplate />}>
        <Route index element={<PasswordRecoveryEmail />} />
        <Route path='code' element={<PasswordRecoveryCode />} />
      </Route>
    </Routes>
  );
};

export default Router;
