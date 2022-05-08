import { rest } from 'msw';
import { Payload } from './interface';

const Handler = [
  rest.post<Payload>(`${process.env.REACT_APP_BACKEND_URL}/signin`, (req, res, ctx) => {
    const payload = req.body;
    if (payload.email === 'gabriel@gmail.com')
      return res(
        ctx.delay(1000),
        ctx.status(200),
        ctx.json({
          token: '6B810C90AA9A99858230C3D5ED479096A190FA4B',
        })
      );

    return res(
      ctx.delay(1000),
      ctx.status(401),
      ctx.json({ errorMessage: 'email or password incorrect!' })
    );
  }),
];

export default Handler;
