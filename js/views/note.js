
var NoteView = Backbone.View.extend({
	model : Pad.Models.Note,
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