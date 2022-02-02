const admin = process.env.EMAIL_CADASTRO_CONSULTA_ADMIN
const dev = process.env.EMAIL_CADASTRO_CONSULTA_DEV

export default (req, res, next) => {
    const email = req.headers.authorization;

    if (!email) {
      return res
        .status(401)
        .send({ status: "error", message: "No email provided." });
    }

    if(email != admin && email != dev){
        return res
        .status(500)
        .send({ status: "error", message: "Failed to authenticate token." });
    }

    next();
  };