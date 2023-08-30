class AddKanbanColumnToTasks < ActiveRecord::Migration[7.0]
  def change
    add_reference :tasks, :kanban_column, null: false, foreign_key: true
  end
end
