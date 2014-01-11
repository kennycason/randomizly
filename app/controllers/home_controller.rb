class HomeController < ApplicationController

  def index
  	dice = Dice.new
  	@roll = dice.roll(20)
  end

end
