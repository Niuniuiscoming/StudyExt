Ext.define('app.view.main.Main', {
	extend: 'Ext.container.Viewport',
	requires: ['app.view.main.HeaderBar','app.view.main.Left',
	'app.view.main.MainContainerWrap','app.view.main.MainController',
	'app.view.main.MainModel'],
	itemId: 'mainView',
	controller: 'main',
	viewModel: 'main',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	 listeners: {
        render: 'onMainViewRender'
    },
	items: [{
		xtype: 'headerbar',
	}, {
            xtype: 'maincontainerwrap',
            id: 'mainContainerWrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                	xtype:'left'
                },
                {
                	xtype:'container',
                	style:'background-color:red;',
                	width:10
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    itemId: 'contentPanel',
                    scrollable: 'y',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }]
});