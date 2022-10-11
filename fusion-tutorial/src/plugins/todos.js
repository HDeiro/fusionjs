const todos = [
  'Buy milk', 
  'Walk dog',
  'Conquer the World',
];

export default async (ctx, next) => {
  if (ctx.path === '/api/todos' 
    && ctx.method === 'GET') {
    ctx.response.body = todos;
  }
  await next();
};