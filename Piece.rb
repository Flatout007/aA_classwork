

class Piece
    attr_reader :color, :board, :pos , :symbol
    def initialize(color,board,pos)
        @color = color
        @board = board
        @pos = pos
        @symbol = " "
    end
end

class Rook < Piece
    def initialize(color, board, pos)
        super
        @symbol = 'r'

    end
end

class Bishop < Piece
    def initialize(color, board, pos)
        super
        @symbol = 'b'

    end
end

class Queen < Piece
    def initialize(color, board, pos)
        super
        @symbol = 'Q'

    end
end

class Knight < Piece
    def initialize(color, board, pos)
        super
        @symbol = 'k'

    end
end

class King < Piece
    def initialize(color, board, pos)
        super
        @symbol = 'K'

    end
end

class Pawn < Piece
    def initialize(color, board, pos)
        super
        @symbol = 'p'

    end
end

class NullPiece < Piece
    def initialize(color, board, pos)
        super
        @symbol = ' '

    end
end