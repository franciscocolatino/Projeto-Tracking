class KanbanColumn < ApplicationRecord
  has_many :tasks
  validates :name, :position, presence: true, uniqueness: { case_sensitive: false }


end
