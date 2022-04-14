import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from '../containers/Form';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Form} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
