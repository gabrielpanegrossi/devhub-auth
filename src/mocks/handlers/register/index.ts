import { rest } from 'msw';
import { Payload } from './interface';

const Handler = [
  rest.post<Payload>(`${process.env.REACT_APP_BACKEND_URL}/register`, (req, res, ctx) => {
    if (req.body.email === 'gabriel@gmail.com')
      return res(
        ctx.delay(1000),
        ctx.status(200),
        ctx.json({ status: 'success', message: `User created!` })
      );

    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({ status: 'error', message: `Try again later.` })
    );
  }),
];

export default Handler;
