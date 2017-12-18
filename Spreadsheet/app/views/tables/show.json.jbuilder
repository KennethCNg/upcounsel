json.cells do
        json.(@table, :size)
    json.input do
        json.array!(@table.cells.where("input = true")) do |cell|        
            json.extract! cell, :id, :table_id, :value, :input
        end
    end
    json.output do
        json.array!(@table.cells.where("input = false")) do |cell|        
            json.extract! cell, :id, :table_id, :value, :input
        end
    end
end