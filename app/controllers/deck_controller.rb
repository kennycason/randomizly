class DeckController < ApplicationController

	def draw
		deck = Deck.new

		num = 1
		if params[:number] != nil
			num = params[:number].to_i
			if num < 1
				num = 1
			elsif num > 52
				num = 52
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
