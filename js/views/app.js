var AppView = Backbone.View.extend({
	el : $('body'),
	events : {
		'click #add' : 'toggleAddPost'
	},
	initialize : function(){
		window.app.collections.notes = new Pad.Collections.Notes();
		this.listenTo(window.app.collections.notes, 'add', this.appendItem);
		
		var xhr = $.get('http://10.20.104.192:3000/articles/all');
		xhr.done(function(data){
			console.log(data);

			//levanta los datos recibidos en data, en este caso del package.json
			data.forEach(function(item){
				window.app.collections.notes.add(item);
			});
		});

		this.render();
	},
	render : function(){

	},
	toggleAddPost : function(){
		$("#new-post").fadeToggle();
		//list.add(new Item());
	},
	appendItem : function(item){
		console.log('item');
		// var it = new ItemView({
		// 	model : item
		// });
		// $('ul').append(it.render().el);
	}
});

Pad.App = AppView;
