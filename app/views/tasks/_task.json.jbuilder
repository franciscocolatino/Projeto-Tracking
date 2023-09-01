json.extract! task, :id, :title, :order ,:description, :created_at, :updated_at, :kanban_column_id
json.url task_url(task, format: :json)
