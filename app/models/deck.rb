class Deck
    attr_accessor :cards

  	def initialize
      reset()
  	end

  	def reset
    	# shuffle array and init each Card
    	@cards = (0..51).to_a.shuffle.collect { |id| Card.new(id) }
  	end

    def addDeck
      @cards += Deck.new.cards
    end

  	def shuffle
  		@cards.shuffle!
  	end

    def draw
	 	return @cards.pop
	end
	     
	def remaining
	    return @cards.length
	 end

end