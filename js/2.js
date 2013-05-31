var ListView = Backbone.View.extend({
	el : $('body'),
	events : {
		'click button#add' : 'addItem' //click sobre el boton con id "add"
	},
	initialize : function()	{
		_.bindAll(this, 'render','addItem');

		this.count = 0;
		this.render();
	},
	render : function(){
		$(this.el).append('<button id="add">Agregar item</button>');
		$(this.el).append('<ul></ul>');
		return this;
	},
	addItem : function(){
		this.count++;
		$('ul').append('<li>Item '+this.count+'</li>');
	}
});

var listView = new ListView();