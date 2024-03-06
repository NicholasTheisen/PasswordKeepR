/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

router.get('/', (req, res) => {
  const user = {
    id: 1,
    name: 'Hardcoded User',
    email: 'user@example.com',
  };

  res.render('user', { user });
});
