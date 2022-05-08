import { Routes, Route } from 'react-router-dom';
import { Auth, Register } from '~containers';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path='/signup' element={<Register />} />
    </Routes>
  );
};

export default Router;
