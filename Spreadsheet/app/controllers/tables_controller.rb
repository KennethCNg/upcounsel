load './app/assets/ruby/spreadsheet_calculator.rb'

class TablesController < ApplicationController
    
    def create
        @instructions = params[:cells]
        feed_input

        if !(@errors)
            create_table
            save_each_cell(@instructions.split("\n"), "input")
            save_each_cell(@cell_arr, "output")
            render :show
        else
            if @errors.message == "invalid slice size"
                render json: ["Invalid formatted input"], status: 422
            else
                render json: @errors, status: 422
            end
        end
    end
    

    private

    def create_table
        @table = Table.new
        @table.size = @instructions.split("\n").first
        @table.save
    end

    def feed_input
        instructions = @instructions
        begin
            @cell_arr = parse_input(instructions)
        rescue ArgumentError => e
            @errors = e
        end
    end

    def save_each_cell(cell_arr, designator)
        cell_arr[1..-1].each do |cell|
            new_cell = Cell.new
            new_cell.value = cell
            new_cell.table_id = @table.id
            new_cell.input = true if designator == "input"
            new_cell.save
        end
    end

end
