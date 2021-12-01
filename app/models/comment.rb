class Comment < ApplicationRecord
  belongs_to :restaurant
  belongs_to :user

  validates :content, presence: true

  after_create :broadcast_message

  def as_json(options = {})
    
    nickname = user.nickname.nil? ? user.email.match(/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,5}$/)[0] : user.nickname
  
    {
      id: id,
      author: nickname,
      content: content,
      created_at: created_at.strftime("%d/%m/%Y %H:%M:%S")
      restaurant: restaurant.name
    }
  end

  private

  def broadcast_message
    ActionCable.server.broadcast "comments", self
  end
end
