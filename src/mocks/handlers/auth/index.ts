import { rest } from 'msw';
import { Payload } from './interface';

const Handler = [
  rest.post<Payload>(`${process.env.REACT_APP_BACKEND_URL}/signin`, (req, res, ctx) => {
    const payload = req.body;
    if (payload.email === 'gabriel@gmail.com' && payload.password === 'salada123')
      return res(
        ctx.delay(1000),
        ctx.status(200),
        ctx.cookie('auth-token', '6B810C90AA9A99858230C3D5ED479096A190FA4B', {
          maxAge: 86400,
          secure: true,
        }),
        ctx.json({ status: 'sucess' })
      );

    return res(
      ctx.delay(1000),
      ctx.status(401),
      ctx.json({ errorMessage: 'Invalid email or password!' })
    );
  }),
];

export default Handler;
