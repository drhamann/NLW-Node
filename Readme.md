## Aula 1
Aula https://nextlevelweek.com/episodios/node/aula-1/edicao/6

 * Instalar node
 * Instalar yarn
 * Instalar Insominia
 * Iniciar comandos
 * Usar o pacote express para gerar rotas

 ## Aula 2 
 * Banco
 * Routes / Query / Body
 * Knex

## Commands 
yarn add typeorm reflect-metadata sqlite3
yarn typeorm migration:revert
yarn typeorm migration:run
yarn typeorm migration:create -n CreateTags
yarn add @types/jsonwebtoken -d
yarn add jsonwebtoken

### Regras
* Cadastro de usuario
    * Não é permetido cadastrar mais de um usuario com o mesmo email
    * Não é permetido cadastrar usuario sem email
* Cadastro de TAG
    * Não é permetido cadastrar de uma tag com o mesmo nome
    * Não é permetido cadastrar tag sem nome
    * Não é permetido cadastro por usuarios que não sejam admnistradores
* Cadastro de elogios
    * Não é permetido cadastrar elogio para si
    * Não é permetido cadastrar elogios para usuarios inexistentes ou invalidos
* Deve possuir autenticação para cadastro

## Aula 4

* JWT
    * jwt.io
    * Header
    * Payload
