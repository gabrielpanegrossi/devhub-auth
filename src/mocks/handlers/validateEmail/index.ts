import { rest } from 'msw';
import { Payload } from './interface';

const Handler = [
  rest.post<Payload>(`${process.env.REACT_APP_BACKEND_URL}/validate-email`, (req, res, ctx) => {
    const payload = req.body;
    if (payload.email === 'gabriel@gmail.com')
      return res(ctx.delay(1000), ctx.status(200), ctx.json({ isValid: true }));

    return res(ctx.delay(1000), ctx.status(200), ctx.json({ isValid: false }));
  }),
];

export default Handler;
