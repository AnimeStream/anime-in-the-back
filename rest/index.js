import {
  getUserById,
  login,
  register
} from './controllers';

export default app => {
  // public
  app.route('/api').get((req, res) => {
    res.json({ message: "Server is up and running" });
  });

  app.route('/api/login').post(login);
  app.route('/api/register').post(register);

  // protected routes
  app.route('/api/auth/users/:id').get(getUserById);
}