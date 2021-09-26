const admin = false;

const requiereAdmin = (req, res, next) => {
  if (!admin) {
    return res.status(401).json({
      error: -1,
      descripcion: `ruta ${req.url} metodo ${req.method} no autorizado`,
    });
  }
  next();
};


export {requiereAdmin}