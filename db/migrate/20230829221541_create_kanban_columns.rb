class CreateKanbanColumns < ActiveRecord::Migration[7.0]
  def change
    create_table :kanban_columns do |t|
      t.string :name, null: false
      t.integer :position, null: false

      t.timestamps
    end
  end
end
