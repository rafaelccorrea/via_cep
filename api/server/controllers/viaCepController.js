import { Request } from "../util";
import buscaCep from "../services/viaCepService";
import { buscaCepValidation } from "../validations";
import NodeCache from "node-cache"

const request = new Request();
const myCache = new NodeCache();

class viaCepController {

  static async getCep(req, res) {

    try {

      await buscaCepValidation.getCep.validate(
        { id: req.params.id },
        {
          abortEarly: false,
        }
      );

      const buscaCache = await myCache.get("cep");

      if (buscaCache && buscaCache.cep.replace('-','') == req.params.id) {
        request.setSuccess(200, "Cep consultado via cache", buscaCache);
        return request.send(res);
      }

      const busca = await buscaCep(req.params.id);

      if (busca.erro) {
        request.setError("Cep inexistente!", 400);
        return request.send(res);
      }

      await myCache.set("cep", busca, 300);
      
      request.setSuccess(200, "Cep consultado com sucesso", busca);
      return request.send(res);

    } catch (error) {
      request.setError("Não foi possível consultar o Cep!", 400);
      return request.send(res);
    }
  }

}

export default viaCepController;
