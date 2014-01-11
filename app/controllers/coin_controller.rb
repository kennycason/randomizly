class CoinController < ApplicationController

	def flip
		coin = Coin.new

		flips = 1
		if params[:number] != nil
			flips = params[:number].to_i
		end

		values = Array.new
		flips.times {
			values << coin.flip(params[:weight])
		}


		response = {}
		response[:flipped] = flips.to_s + ' coin' + (flips == 1 ? '' : 's')
		if values.length == 1
			response[:value] = values[0]
		else 
			response[:values] = values
		end
		render :json => response
	end

end
