# Projeto Express TypeScript

Este é um projeto Express TypeScript que usa o Prisma para gerenciar migrações de banco de dados. Ele também usa um arquivo .env para armazenar variáveis de ambiente sensíveis.

## Utilização 

Voce pode integrar ao um front-end fazendo requisições as rotas da aplicação ou fazer testes utilizando softwares de testes de api como o "Insominia" e o "Postman"

# Rotas
Auth POST:
```
/auth
```
Faz o login do usuario e retorna um token de autenticação que precisa ser usado no header das demais requisições Ex
```
{
"Authorization": "dfasedharehaeb654yare62" (token)
}

```

Tasks GET:
```
/task
```
Lista todas as task registradas
e passando os parametros userId ou taskId no
body da requisição voce pode listar por id da
taks ou pelo usuario que registrou a mesma ou ambos

Task POST:
```
/task
```
cria uma nova task passando os parametros no body da requisição Ex:
```
{
	"name":"primeira tarefa",
    "status":"começo" ,
    "description":"testando rota" ,
    "expires_date_in_minutes": 111111,
    "userId": 1
}
```
Task PUT:
```
/task/:id
```
atualiza alguma informação de alguma task passando o id na url e passando o parametro a ser atualizado no body

Task DELETE:
```
/task/:id
```
deleta alguma task criada passando o id na url

User GET:
```
/user
```
lista todos os usuarios registrados
User GET:
```
/user/:userId
```
lista um unico usuario pelo seu id passado na url

User POST:
```
/user
```
cria um novo usuario passando os parametros no body da requisição Ex:
```
{
	"email": "jhow_killer@gmail.com",
	"password":"12345678",
	"name": "jhowjhow"
}
```
User PUT:
```
/user/:userId
```
atualiza alguma informação de algum usuario passando o id na url e passando o parametro a ser atualizado no body
User DELETE:
```
/user/:userId
```
deleta algum usuario criada passando o id na url


## Configuração

Antes de começar a usar este projeto, você precisa configurar algumas variáveis de ambiente. Crie um arquivo `.env` na raiz do seu projeto com as seguintes informações:

```dotenv
DATABASE_URL=""
JWT_SECRET=""
```
Certifique-se de que o PostgreSQL esteja instalado e configurado corretamente e que o banco de dados "mydb" exista.

Instalação
Para instalar as dependências do projeto, execute o seguinte comando:

```pnmp
pnpm install
```

## Execução
Você pode executar o projeto em diferentes modos usando os seguintes comandos definidos em package.json:

Modo de Desenvolvimento
Para iniciar o servidor em modo de desenvolvimento, que suporta recarga automática quando você faz alterações no código, use o seguinte comando:

```dev
pnpm run dev
```
Modo de Produção
Para construir e iniciar o servidor em modo de produção, use o seguinte comando:

```start
pnpm run start
```

## Migrações
para fazer a conecção no banco de dados e criar as tabelas voce tem rodar o seguinte comando:

```migrate
pnpm prisma migrate dev # ou para deploy # pnpm prisma migrate deploy
```

## Compilação
Se você deseja apenas compilar o projeto sem executá-lo, você pode usar o seguinte comando:

```
pnpm run build
```
Este comando irá gerar a pasta dist com os arquivos compilados.

## Contribuindo
Se você deseja contribuir para este projeto, siga estas etapas:

Faça um fork do repositório.
Crie uma branch para suas alterações:
```
git checkout -b feature/nova-feature.
```
Faça suas alterações e comite-as: 
```
git commit -m 'Adiciona nova feature'.
```
Faça um push para a branch:
```
git push origin feature/nova-feature.
```
Abra um pull request.

Agradecimentos
Agradecemos por escolher este projeto. Se você tiver alguma dúvida ou encontrar problemas, não hesite em entrar em contato.

Divirta-se codificando!
