class Letter

	def get(num) 
		letters = Array.new
		num.times {
			letters << (65 + rand(26)).chr
		}
		return letters
	end

end