// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery-1.10.2.min.js
//= require handlebars-v1.3.0.js
//= require ember.min.js
//= require rainbow-custom.min.js
//= require_tree .

App = Ember.Application.create();

App.Router.map(function () {
  	this.resource('home', { path : '/' }, function() {
  		this.resource('dice_api', { path : 'dice_api' }, function() {
  			this.resource('dice_roll', { path : '/dice/:sides' });
  		});
  		this.resource('coin_api', { path : 'coin_api' }, function() {
	  		this.resource('coin_flip', { path : '/coin' });
	  		this.resource('weighted_coin_flip', { path : 'coin/:weight' });
  		});
  		this.resource('card_api', { path : 'card_api' }, function() {
	  		this.resource('card_draw', { path : '/card/draw' });
  		});
  	});
});

App.HomeRoute = Ember.Route.extend({
	model : function(params) {
		return {};
	}
});



App.DiceApiRoute = Ember.Route.extend({
	model : function(params) {
		return {};
	}
});

App.DiceRollRoute = Ember.Route.extend({
	model : function(params) {
		return $.getJSON('/1/d/' + params.sides);
	}
});



App.CoinApiRoute = Ember.Route.extend({
	model : function(params) {
		return {};
	}
});

App.CoinFlipRoute = Ember.Route.extend({
	model : function(params) {
		return $.getJSON('/1/coin');
	}
});

App.WeightedCoinFlipRoute = Ember.Route.extend({
	model : function(params) {
		return $.getJSON('/1/coin/' + params.weight);
	}
});


App.CardApiRoute = Ember.Route.extend({
	model : function(params) {
		return {};
	}
});

App.CardDrawRoute = Ember.Route.extend({
	model : function(params) {
		return $.getJSON('/card/draw');
	}
});

