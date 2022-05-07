import { rest } from 'msw';

const Handler = [
  rest.post(`${process.env.REACT_APP_BACKEND_URL}/register`, (req, res, ctx) => {
    console.log(req.body);
    return res(ctx.delay(1000), ctx.status(200), ctx.json({}));
  }),
];

export default Handler;
