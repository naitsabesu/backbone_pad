//Modelo
var Item = Backbone.Model.extend({
	defaults : {
		part1 : 'Backbone4',
		part2 : 'newbies'
	}
});

//Coleccion
var List = Backbone.Collection.extend({
	model : Item
});
list = new List();

var ItemView = Backbone.View.extend({
	tagName : 'li',
	initialize : function(){},
	render : function(){
		$(this.el).html('<span>'+this.model.get('part1') + this.model.get('part2')+'</span>');
		return this;
	}
});

var AppView = Backbone.View.extend({
	el : $('body'),
	events : {
		'click #add' : 'addItem'
	},
	initialize : function(){
		this.listenTo(list, 'add', this.appendItem);
		this.render();
	},
	render : function(){
		$(this.el).append('<button id="add">Agregar item</button>');
		$(this.el).append('<ul></ul>');

		return this;
	},
	addItem : function(){
		console.log('addItem');
		list.add(new Item());
	},
	appendItem : function(model){
		console.log('appendItem');
		var itemView = new ItemView({
			model : model
		});

		$('ul').append(itemView.render().el);
	}
});

var app = new AppView();

