/**
 * Copyright 2014 Mainio Tech Ltd.
 *
 * @author Antti Hukkanen
 * @license See LICENSE (project root)
 */

(function($) {

$(document).on('recordsapp:load', function() {
	RecordsApp.Record = DS.Model.extend({
		name: DS.attr('string'),
		type: DS.attr('string'),
		ttl: DS.attr('number'),
		permanent: DS.attr('boolean'),
		datas: DS.attr('array'),
		/* Makes the record "undirty" */
		clean: function() {
            this.adapterWillCommit();
            this._inFlightAttributes = this._attributes;
            this._attributes = Ember.create(null);
            this.get('store').didSaveRecord(this, null);
		}
	});
});

})(jQuery);