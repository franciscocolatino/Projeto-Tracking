# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

KanbanColumn.create(name: "A Fazer", position: 1)
KanbanColumn.create(name: "Em Progresso", position: 2)
KanbanColumn.create(name: "Quase lá", position: 3)
KanbanColumn.create(name: "Concluídas", position: 4)
ano_atual = Date.current.year

# Loop para criar 100 tarefas com datas diferentes
50.times do |i|
  mes = (i % 12) + 1  # Gere números de 1 a 12 para os meses
  dia = (i % 28) + 1  # Gere números de 1 a 28 para os dias

  # Crie uma tarefa com data de criação e atualização para o ano atual e o mês/dia gerados
  Task.create(
    title: "Tarefa ##{i + 1}",
    description: "Descrição da Tarefa ##{i + 1}",
    kanban_column_id: rand(1..4),
    created_at: "#{ano_atual}-#{mes.to_s.rjust(2, '0')}-#{dia.to_s.rjust(2, '0')} 10:00:00",
    updated_at: "#{ano_atual}-#{mes.to_s.rjust(2, '0')}-#{dia.to_s.rjust(2, '0')} 14:00:00"
  )
end
