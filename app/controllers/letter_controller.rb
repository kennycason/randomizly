class LetterController < ApplicationController

	def get
		letter = Letter.new

		if params[:number] == nil
			letters = letter.get(1)
		else
			letters = letter.get(params[:number].to_i)
		end

		response = {}
		if letters.length == 1
			response[:value] = letters[0]
		else
			response[:values] = letters
		end
		render :json => response
	end

end
