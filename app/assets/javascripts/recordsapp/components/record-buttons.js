/**
 * Copyright 2014 Mainio Tech Ltd.
 * 
 * @author Antti Hukkanen
 * @license See LICENSE (project root)
 */

(function($) {

$(document).on('recordsapp:load', function() {
	RecordsApp.RecordButtonsComponent = Ember.Component.extend({
		
		actions: {
			
			editRecord: function() {
				this.sendAction('edit-action', this.get('record'));
			},
			
			removeRecord: function() {
				this.sendAction('remove-action', this.get('record'));
			}
			
		},
		
		init: function() {
			this._super();
			
			var record = this.get('record');
			var specialRecord = Ember.A(['NS', 'SOA', 'PTR']).any(function(item) {
				return record.get('type') == item;
			});
			this.set('canManageRecord', !specialRecord);
		}
		
	});
});

})(jQuery);
