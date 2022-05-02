import { Routes, Route } from 'react-router-dom';
import { ProfileForm, Auth, Profile, Register } from '~containers';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path='/signup' element={<Register />} />
      <Route index element={<Profile />} />
      <Route index element={<ProfileForm />} />
    </Routes>
  );
};

export default Router;
