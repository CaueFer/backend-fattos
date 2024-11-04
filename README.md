# Challenge Fattocs (backend)

Este desafio técnico consiste em um sistema de gerenciamento de tarefas desenvolvido com [NestJS](https://nestjs.com/) e utiliza [PostgreSQL](https://www.postgresql.org/) como banco de dados para armazenar as informações das tarefas. O backend é responsável por gerenciar as operações CRUD (Criar, Ler, Atualizar e Deletar) das tarefas, garantindo a persistência dos dados e a lógica de negócios necessária.

## Visualização do Projeto

Você pode acessar a API do projeto no link:
👉 [API Challenge Fattos](https://backend-fattos.vercel.app/api)

## Funcionalidades

### CRUD de Tarefas

- **Criar Tarefa**: Permite adicionar uma nova tarefa ao sistema. O nome, custo e data limite são recebidos como parâmetros, e o campo `Ordem de Apresentação` é gerado automaticamente.
- **Ler Tarefas**: Fornece uma lista de todas as tarefas cadastradas, incluindo todos os campos, exceto o campo `Ordem de Apresentação`.
- **Atualizar Tarefa**: Permite editar uma tarefa existente. Apenas o nome, custo e data limite podem ser alterados. O sistema verifica se o novo nome da tarefa já existe.
- **Deletar Tarefa**: Remove uma tarefa específica, com a confirmação da operação para evitar exclusões acidentais.

### Regras de Negócio

- **Unicidade do Nome da Tarefa**: Não pode haver duas tarefas com o mesmo nome no banco de dados.
- **Gerenciamento da Ordem de Apresentação**: O campo `Ordem de Apresentação` deve ser único e é gerado automaticamente, assegurando que não haja conflitos ao adicionar novas tarefas.

## Tecnologias Utilizadas

- **NestJS**: Framework para a criação de APIs, permitindo uma arquitetura modular e escalável.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional para armazenar as tarefas e garantir a integridade dos dados.

## Conclusão

Este sistema de gerenciamento de tarefas foi desenvolvido com o objetivo de demonstrar habilidades em desenvolvimento backend, garantindo que todas as operações sejam realizadas de forma eficiente e segura.

**Portfólio**: Para mais projetos, visite meu portfólio: [https://c-dev.netlify.app](https://c-dev.netlify.app)
