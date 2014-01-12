class DeckController < ApplicationController

	def draw
		deck = Deck.new

		if params[:decks] != nil
			params[:decks].to_i.times {
				deck.addDeck()
			}
			deck.shuffle()
		end

		num = 1
		if params[:number] != nil
			num = params[:number].to_i
			if num < 1
				num = 1
			elsif num > deck.remaining
				num = deck.remaining
			end
		end

		response = {}
		if num == 1
			response[:value] = deck.draw
		else
			response[:values] = Array.new
			num.times {
				response[:values] << deck.draw
			}
		end
		render :json => response
	end

end
