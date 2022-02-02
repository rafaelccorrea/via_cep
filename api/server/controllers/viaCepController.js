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

      const buscaCache = await myCache.get("cep")

      if (buscaCache == undefined) {

        const busca = await buscaCep(req.params.id);

        if (busca.erro) {
          request.setError("Cep inexistente!", 400);
          return request.send(res);
        }
          
          await myCache.set("cep", busca, 300);
        
        if (busca) {
          request.setSuccess(200, "Cep consultado com sucesso", busca);
        } else request.setError("Não foi possível consultar o Cep!", 400);
        return request.send(res);
        
      }else{
        request.setSuccess(200, "Cep consultado via cache", buscaCache);
        return request.send(res);
      }
      
    } catch (error) {
      request.setError(error);
      return request.send(res);
    }
  }

}

export default viaCepController;
