ALPHABET = ('A'..'Z').to_a
REF_REGEX = /^([A-Z]+)([0-9]+)$/

# commented out for testing purposes
# file = File.open('./inputs/input2.txt')
# instructions = file.read.split("\n")
# instructions = STDIN.read.split("\n")

def parse_input(instructions)
    # instructions = STDIN.read.split("\n")
  instructions = instructions.split("\n")
  size = instructions.shift
  row_size = size.split.first.to_i
  

  @cells = {}

  instructions.each_slice(row_size).with_index do |row, row_number|
    row.each_with_index do |value, col_number|
      location = [ALPHABET[col_number], row_number + 1].join
      @cells[location] = value
    end
  end

  # go through and evaluate each cell 
  @cells.each do |loc, value|
    @cells[loc] = evaluate_cell(loc, value)
  end


  # output final result
  res = [size]
  @cells.values.each do |val|
    rounded_val = (val*100000).round / 100000.0
    res.push(rounded_val.to_s)
  end
  
  res
end

def evaluate_cell(loc, value, cells_traversed = [loc])
  evaluation = []
  
    value.to_s.split.each do |term|
  
      if reference_match = term.match(REF_REGEX)
        if cells_traversed.include? term
          cells_traversed << term
            raise ArgumentError.new "cyclic dep detected. trace: #{cells_traversed.join(' >> ')}"
        else
          going_deeper = cells_traversed.clone
          going_deeper << term 
          result = evaluate_cell(loc, @cells[term], going_deeper).to_f
          # cache result so we don't need to calculate again
          @cells[term] = result
          evaluation << result
        end
      elsif ["-", "/", "*", "+", "**"].include?(term)
        operands = evaluation.pop(2)
        evaluation << operands[0].send(term, operands[1])
      else
        evaluation << term.to_f
      end
    end
  
    return evaluation.first  
end

