var Note = Backbone.Model.extend({
	defaults : {
		date : '',
		title: '',
		detail: '',		
		image: '',
		active: true,
		completed: false
	}
});
Pad.Models.Note = Note;