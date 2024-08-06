class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.string :item_name
      t.decimal :cost
      t.string :url

      t.timestamps
    end
  end
end
