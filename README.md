# Via_cep

Api básica de para consultas de cep.

## Run Projeto

yarn dev
npm run dev

## Postman.

Rota:

### Método Post
http://localhost:8000/api/busca/17512756

### Exemplo:

![image](https://user-images.githubusercontent.com/68115778/152246963-45549dc7-c9ef-4372-b9c9-f30a4297b156.png)

### Retorno Padrão Sucesso

![image](https://user-images.githubusercontent.com/68115778/152246855-b65ae0e4-47e6-407d-accb-9bd55b9922f6.png)

### Retorno Padrão Erro

![Screenshot_1](https://user-images.githubusercontent.com/68115778/152246764-c2d71c85-04f6-4ade-bce3-fb1f4638f77b.png)

### Middleware de emailing

Para que seja posivel realizar as requisicoes e necessario
passar o email valido no Header conforme exemplo abaixo.

![Screenshot_2](https://user-images.githubusercontent.com/68115778/152256386-e87559ab-eea1-4bb1-a4cd-d6db316932cd.png)

### Pré configuração do middleware de autenticação com JWT pronta.
