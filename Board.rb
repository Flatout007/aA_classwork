require_relative "Piece.rb"
require_relative "Display.rb"
class Board

    def initialize
        @board = Array.new(8){Array.new(8)}
        #white
        add_piece(Rook.new("white", self, [0,0]), [0,0])
        add_piece(Knight.new("white", self, [0,1]), [0,1])
        add_piece(Bishop.new("white", self, [0,2]), [0,2])
        add_piece(Queen.new("white", self, [0,3]), [0,3])
        add_piece(King.new("white", self, [0,4]), [0,4])
        add_piece(Bishop.new("white", self, [0,5]), [0,5])
        add_piece(Knight.new("white", self, [0,6]), [0,6])
        add_piece(Rook.new("white", self, [0,7]), [0,7])

        # white pawns
        add_piece(Pawn.new("white", self, [1,0]), [1,0])
        add_piece(Pawn.new("white", self, [1,1]), [1,1])
        add_piece(Pawn.new("white", self, [1,2]), [1,2])
        add_piece(Pawn.new("white", self, [1,3]), [1,3])
        add_piece(Pawn.new("white", self, [1,4]), [1,4])
        add_piece(Pawn.new("white", self, [1,5]), [1,5])
        add_piece(Pawn.new("white", self, [1,6]), [1,6])
        add_piece(Pawn.new("white", self, [1,7]), [1,7])

        #black
        add_piece(Rook.new("black", self, [7,0]), [7,0])
        add_piece(Knight.new("black", self, [7,1]), [7,1])
        add_piece(Bishop.new("black", self, [7,2]), [7,2])
        add_piece(Queen.new("black", self, [7,3]), [7,3])
        add_piece(King.new("black", self, [7,4]), [7,4])
        add_piece(Bishop.new("black", self, [7,5]), [7,5])
        add_piece(Knight.new("black", self, [7,6]), [7,6])
        add_piece(Rook.new("black", self, [7,7]), [7,7])

        # black pawns
        add_piece(Pawn.new("black", self, [6,0]), [6,0])
        add_piece(Pawn.new("black", self, [6,1]), [6,1])
        add_piece(Pawn.new("black", self, [6,2]), [6,2])
        add_piece(Pawn.new("black", self, [6,3]), [6,3])
        add_piece(Pawn.new("black", self, [6,4]), [6,4])
        add_piece(Pawn.new("black", self, [6,5]), [6,5])
        add_piece(Pawn.new("black", self, [6,6]), [6,6])
        add_piece(Pawn.new("black", self, [6,7]), [6,7])


    end

 def board
    @board
 end 
    
    def move_piece(start_pos,end_pos)
        raise "nothing at start position" if self[start_pos].nil? 

        if valid_pos(start_pos) && valid_pos(end_pos)  #change to null piece?

            self[end_pos] = self[start_pos] 
            self[start_pos] = nil     #change to null piece?

        end

    end

    def add_piece(piece,pos)
        self[pos] = piece
    end

    def valid_pos(pos)
        if pos == nil || pos.any? do |i|
            i<0 || i>board.length 
           end
           raise "invalid position"
           return false
        end

       return true
    end

    def [](pos)
        @board[pos[0]][pos[1]]
    end

    def []=(pos,value)   
         @board[pos[0]][pos[1]] = value   
    end
   
end

chess = Board.new()

display = Display.new(chess)
#display.render
chess.move_piece([6,0],[5,0])
#chess.move_piece([6,1],[5,0])
#display.render()

# raise error if no piece at start
# raise error also if pos is not on board