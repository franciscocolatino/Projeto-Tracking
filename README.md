# Quadro de tarefas

## 🖥 Projeto
  Projeto feito para teste de seleção no estágio.

### Tecnologias usadas

- [Ruby-on-Rails](https://rubyonrails.org/)
- [Ruby](https://www.ruby-lang.org/pt/)
- [bootstrap](https://getbootstrap.com/)
- [SortableJS](https://github.com/SortableJS/Sortable)
- [Chart.js](https://www.chartjs.org/)
  
## Executar O Projeto

- Clone o repositório em sua máquina:
  ```bash
  $ git clone https://github.com/franciscocolatino/quadro-tarefas.git
  ```
- Acesse o repositório usando:
  ```bash
  $ cd quadro-tarefas
  ```
- Instalando as dependências:
  ```bash
  $ bundle install
  ```
- Crie o banco de dados:
  ```bash
  $ rails db:create
  ```
- Executando a migration e seeder:
  ```bash
  $ rails db:migrate db:seed
  ```
- Iniciando aplicação:
  ```bash
  $ rails s
  ```
- No navegador acesse:
  ```bash
  $ localhost:3000
  ```
## Observações
  - Gostaria de destacar que o seeder já implementou algumas tarefas e criou três colunas no banco de dados. Essa abordagem foi adotada com o intuito de ajudar na visualização dos gráficos gerados a partir dos dados inseridos no banco.
  - A funcionalidade de arrastar e soltar está funcionando; além disso, é possível alterar a ordem das tarefas através do arrastar e soltar também.
  - O gráfico de tarefas concluídas pega os dados da coluna com maior posição.
  - Na raiz do projeto tem um arquivo chamado UML.png contendo o diagrama de classes.
