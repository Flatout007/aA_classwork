

class Display
    attr_reader :board
    def initialize(board)
        @board = board
    end

    def render() 
        @board.board.each() do |row|
            puts " "
            row.each() do |pos|
                if pos.nil? == false
                    print pos.symbol 
                 else 
                    print " "
                end
            end 
        end
    end
end
