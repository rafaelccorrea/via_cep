import { Request } from "../util";
import buscaCep from "../services/viaCepService";
import { buscaCepValidation } from "../validations";

const request = new Request();

class viaCepController {

  static async getCep(req, res) {

    try {

      await buscaCepValidation.getCep.validate(
        { id: req.params.id },
        {
          abortEarly: false,
        }
      );

      const busca = await buscaCep(req.params.id);

      if (!busca) {
        request.setError("Cep inexistente!", 400);
        return request.send(res);
      }

      if (busca) {
        request.setSuccess(200, "Cep consultado com sucesso", busca);
      } else request.setError("Não foi possível consultar o Cep!", 400);

      return request.send(res);
    } catch (error) {
      request.setError(error);
      return request.send(res);
    }
  }

}

export default viaCepController;
