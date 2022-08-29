const tokenValidate = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization || authorization === '') {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = tokenValidate;