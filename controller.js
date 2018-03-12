

var matcherController = {
	model: matcherModel,
	view: matcherView,
	selecting: false,

	init: function(size) {
		this.model.init(size);
		this.view.init();
	},

	selectCard: function( id ) {
		if( this.selecting || this.model.sameCard(id) ) return;
		this.selecting = true;
		this.view.revealCard(id);

		if( this.model.selectedCard ) {

			
		} else {
			this.model.setSelectedCard(id);
			this.selecting = false;
		}
	}
		
};


