class Card
  	SHORT_RANKS = %w(2 3 4 5 6 7 8 9 10 J Q K A)
  	SHORT_SUITS = %w(♠ ♥ ♣ ♦)
  	RANKS = %w(2 3 4 5 6 7 8 9 10 Jack Queen King Ace)
  	SUITS = %w(Spade Heart Clubs Diamond)

  	attr_accessor :rank, :suit

  	def initialize(id)
    	@symbol =  SHORT_RANKS[id % 13] + SHORT_SUITS[id % 4]
    	@rank = RANKS[id % 13]
    	@suit = SUITS[id % 4]	
    end

end