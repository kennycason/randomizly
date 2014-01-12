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

		if num == 1
			render :json => deck.draw
		else
			values = Array.new
			num.times {
				values << deck.draw
			}

			response = {}
			render :json => values
		end
	end

end
