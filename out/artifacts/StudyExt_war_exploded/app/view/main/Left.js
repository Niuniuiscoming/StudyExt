Ext.define('app.view.main.Left', {
	extend: 'Ext.Container',
	xtype: 'left',
	requires: [
		'app.store.NavigationTree'
	],
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	style:'background-color:white;',
	initComponent: function() {
		var store = Ext.create('app.store.NavigationTree');
		this.items = [{
			xtype: 'treelist',
			reference: 'navigationTreeList',
			itemId: 'navigationTreeList',
			//ui: 'navigation',
			store: store,
			width: 250,
			expanderFirst: false,
			expanderOnly: false,
			listeners: {
				selectionchange: 'onNavigationTreeSelectionChange'
			}
		}];

		this.callParent();
	}
})