import Api from '../util/Api'

const buscaCep = async (dados) => {

    const result = Api.post(`/${dados}/json/`).then((res) => {
        console.log('retorno API', res.data)
    }).catch((err) => {
        console.log('error', err.response.data)
    })
    return result.data;
}

export default buscaCep