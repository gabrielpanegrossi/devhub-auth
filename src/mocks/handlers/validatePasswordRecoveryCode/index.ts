import { rest } from 'msw';
import { Payload } from './interface';

const Handler = [
  rest.post<Payload>(
    `${process.env.REACT_APP_BACKEND_URL}/password-recovery/code`,
    (req, res, ctx) => {
      const payload = req.body;
      if (payload.email === 'gabriel@gmail.com' && payload.code === '1111')
        return res(
          ctx.delay(1000),
          ctx.status(200),
          ctx.json({ status: 'success', isValid: true })
        );

      return res(ctx.delay(1000), ctx.status(200), ctx.json({ status: 'error', isValid: false }));
    }
  ),
];

export default Handler;
