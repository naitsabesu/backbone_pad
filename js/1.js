var ListView = Backbone.View.extend({
	el : $('body'),
	initialize : function(){
		_.bindAll(this, 'render');
		this.render();
	},
	render : function(){
		$(this.el).append('<ul><li>Backbone 4 newbies</li></ul>');
		return this;
	}
});

var listView = new ListView();