import Api from '../util/Api'

const buscaCep = async (dados) => {
    const result = await Api.get(`/${dados}/json/`)
    return result.data;
}

export default buscaCep