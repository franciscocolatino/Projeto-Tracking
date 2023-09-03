class Task < ApplicationRecord
  belongs_to :kanban_column
  validates :title, presence: true, uniqueness: { case_sensitive: false }

end
