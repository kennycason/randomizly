class DiceController < ApplicationController

	def roll
		dice = Dice.new

		sum = 0;
		values = Array.new
		params[:number].to_i.times {
			roll = dice.roll(params[:sides].to_i)
			values << roll
			sum += roll
		}
		mod = 0
		if params[:mod] != nil
			mod = params[:mod].to_i
			sum += mod
		end

		response = {}
		response[:rolled] = params[:number] + 'd' + params[:sides]
		if params[:mod] != nil
			if mod > 0
				response[:rolled] += '+' + mod.to_s
			elsif mod < 0
				response[:rolled] +=  mod.to_s
			end
		end

		if params[:number].to_i > 1
			response[:sum] = sum
		end

		if values.length == 1
			response[:value] = values[0]
		else 
			response[:values] = values
		end

		render :json => response
	end

end
