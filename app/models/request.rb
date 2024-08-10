class Request < ApplicationRecord
  validates :item_name, presence: true
  validates :cost, presence: true
  validates :url, presence: true,
                  format: {
                    with: %r{\Ahttps?://(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)\z},
                    message: 'Must be URL'
                  }
end
