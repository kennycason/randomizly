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
  		this.resource('deck_api', { path : 'deck_api' }, function() {
	  		this.resource('deck_draw', { path : '/deck/draw' });
  		});
  		this.resource('api_console', { path : 'api_console' }, function() {
  			this.resource('api_call', { path : '/call' });
  		});
  	});
});

App.HomeRoute = Ember.Route.extend({
	model : function(params) {
		return {};
	}
});

App.HomeView = Ember.View.extend({
  	didInsertElement: function() {
  		if(!window.location.hash.substr(1)) { // by default load dice_api
  			$("#dice_api a").click();
  		}
  	}
});


App.DiceApiRoute = Ember.Route.extend({
	model : function(params) {
		return {};
	}
});

App.DiceApiView = Ember.View.extend({
  	didInsertElement: function() {
  		cleanCodeJS();
  		Rainbow.color();
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

App.CoinApiView = Ember.View.extend({
  	didInsertElement: function() {
  		cleanCodeJS();
  		Rainbow.color();
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


App.DeckApiRoute = Ember.Route.extend({
	model : function(params) {
		return {};
	}
});

App.DeckApiView = Ember.View.extend({
  	didInsertElement: function() {
  		cleanCodeJS();
  		Rainbow.color();
  	}
});

App.DeckDrawRoute = Ember.Route.extend({
	model : function(params) {
		return $.getJSON('/deck/draw');
	}
});



App.ApiConsoleRoute = Ember.Route.extend({
	model : function(params) {
		return {};
	},
	actions: {
	    call: function() {

			$.ajax({
				async: false,
			  	dataType: "json",
			  	url: $("#api_method").val(),
			  	success: function(response) {
					$("#api_response").show();
					$(".response_container").html('<pre><code data-language="json">' + JSON.stringify(response, undefined, 2) + '</code></pre>');
					Rainbow.color();
			  	}
			});
	    }
	}
});

App.ApiConsoleView = Ember.View.extend({
  	didInsertElement: function() {
  		$("#submit_api_button").click();
  	}
});


// unused
App.ApiCallRoute = Ember.Route.extend({
	model : function(params) {
		var method = $("#api_method").val();

		return $.getJSON(method).then(function(response) {
			return { response : JSON.stringify(response, undefined, 2) };
		});
	}
});
// unused
App.ApiCallView = Ember.View.extend({
  	didInsertElement: function() {
  		$("#api_response_tag script").remove();
  		Rainbow.color();
  	}
});


function cleanCodeJS() {
  	$("code").each(function() {
  		var json = $.parseJSON($(this).html());
  		var jsonPretty = JSON.stringify(json, undefined, 2);
  		$(this).html(jsonPretty);
  	});
}
