//Modelo
var Item = Backbone.Model.extend({
	defaults : {
		part1 : 'Backbone4',
		part2 : 'newbies',
		counter : 0
	}
});

//Coleccion
var List = Backbone.Collection.extend({
	model : Item
});
var list = new List();

//Vista
var ListView = Backbone.View.extend({
	el : $('body'),
	events : {
		'click button#add':'addItem'
	},
	initialize : function(){
		//_.bindAll(this,'addItem','appendItem');

		this.listenTo(list, 'add', this.appendItem);
		this.counter = 0;

		this.render();
	},
	render : function(){
		$(this.el).append('<button id="add">Agregar item</button>');
		$(this.el).append('<ul></ul>');

		return this;
	},
	addItem : function(){
		list.add(new Item({counter:++this.counter}));
	},
	appendItem : function(item){
		$('ul').append('<li>Item '+item.get('counter')+'</li>');
	}

});

var app = new ListView();