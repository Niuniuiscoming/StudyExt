Ext.define('app.view.main.HeaderBar',{
	extend:'Ext.toolbar.Toolbar',
	alternateClassName:'headerbar',
	xtype:'headerbar',
	height: 64,
	style:'background-color:blue;',
    itemId: 'headerBar',
	items:['->',{
		text:'查询',
		iconCls:'x-fa fa-search'
	}]
})