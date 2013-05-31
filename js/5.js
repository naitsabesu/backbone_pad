var Item = Backbone.Model.extend({
	defaults : {
		part1 : 'Backbone4',
		part2 : 'newbies'
	}
});

var ListView = Backbone.Collection.extend({
	model : Item
});

var list = new ListView();

var ItemView = Backbone.View.extend({
	model : Item,
	tagName : 'li',
	template: _.template($('#item-template').html()),
	events : {
		'click span.swap':'swap',
		'click span.delete':'remove'
	},
	initialize : function(){
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'remove', this.unrender);
	},
	render : function(){
		$(this.el).html(this.template(this.model.toJSON()));
		return this;      
	},
	unrender : function(){
		$(this.el).remove(); //quita el elemento del DOM
	},
	swap : function(){
		var swaped = {
			part1 : this.model.get('part2'),
			part2 : this.model.get('part1')			
		};
		this.model.set(swaped);
	},
	remove : function(){
		this.model.destroy(); 
		//elimina el objeto de su coleccion -> esto borra el dato de la bd 
		//se usa el Backbone.sync para evitar esto (por el ejemplo)
	}
});

var AppView = Backbone.View.extend({
	el : $('body'),
	events : {
		'click #add' : 'addItem'
	},
	initialize : function(){
		this.listenTo(list,'add',this.appendItem);
		this.render();
	},
	render : function(){

	},
	addItem	: function(){
		list.add(new Item());
	},
	appendItem : function(item){
		var it = new ItemView({
			model : item
		});
		$('ul').append(it.render().el);
	}
})

new AppView();