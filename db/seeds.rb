# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

KanbanColumn.create(name: "A Fazer", position: 1)
KanbanColumn.create(name: "Em Progresso", position: 2)
KanbanColumn.create(name: "Concluídas", position: 3)

Task.create(title: 'Limpar a casa', description: 'A Fazer', order: 1, kanban_column_id: 1)
Task.create(title: 'Terminar o projeto', description: 'Em Progresso', order: 2, kanban_column_id: 2)
Task.create(title: 'Atividade de LAC', description: 'Concluída', order: 3, kanban_column_id: 3)
Task.create(title: 'Estudar pra prova', description: 'Em Progresso', order: 4, kanban_column_id: 2)
