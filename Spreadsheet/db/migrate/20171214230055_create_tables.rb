class CreateTables < ActiveRecord::Migration[5.1]
  def change
    create_table :tables do |t|
      t.string :size, null: false
      
      t.timestamps
    end
  end
end
