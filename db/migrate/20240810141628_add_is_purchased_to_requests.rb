class AddIsPurchasedToRequests < ActiveRecord::Migration[7.0]
  def change
    add_column :requests, :is_purchased, :boolean
  end
end
