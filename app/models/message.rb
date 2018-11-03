class Message < ApplicationRecord
  belongs_to :gruop
  belongs_to :user

  validates :content, presence: true, unless: :image?
end
