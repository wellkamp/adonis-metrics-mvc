# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

<h1> Projeto Métricas de um computador com AdoniJS </h1> 
<h2> Projeto para a cadeira de tópicos especiais </h2>

<p align="center">
 <a href="#status">Status do projeto</a> •
 <a href="#prerequisitos">Pré-requisitos</a> • 
</p>

<h2 id='status'>Status do projeto</h2>
<p>Em construção</p>

<h2 id='prerequisitos'>Pré-requisitos</h2>
<p> Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
<a href="www.github.com">Git,</a> <a href="https://www.python.org/">Python</a>.
</p>

<p>Além disto é bom ter um editor ou IDE para trabalhar com o código. Este projeto foi utilizado a IDE 
<a href="https://www.jetbrains.com/pt-br/pycharm/">Pycharm</a>.</p>

```bash
# Clonar o repositorio
git clone https://github.com/wellkamp/adonis-metrics-mvc.git

# Acessar a raiz do projeto e instalar os pacotes
npm install

# Configurar o arquivo .env

# Rodar as migrações
adonis migration:run

# Rodar as seeds
adonis seed

# Rodar o servidor
adonis serve --dev

```
