class CreateCells < ActiveRecord::Migration[5.1]
  def change
    create_table :cells do |t|
      t.string :value, null: false
      t.integer :table_id, null: false
      t.boolean :input, default: false, null: false

      t.timestamps
    end
    
    add_index :cells, :table_id
  end
end
