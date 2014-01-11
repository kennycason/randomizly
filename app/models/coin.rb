class Coin

	def flip(weight)
		dice = Dice.new 

		if weight == nil
			if dice.roll(100) > 50
				return 'heads'
			end
			return 'tails'
		else
			if dice.roll(100) <= weight.to_i
				return 'heads'
			end
			return 'tails'
		end
	end

end