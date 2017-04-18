Ext.define('app.view.main.MainBorder',{
	extend:'Ext.container.Container',
	xtype:'mainborder',
	layout:'border',
	requires:['app.view.main.Left'],
	height:Ext.Element.getViewportHeight() - 64,
	items:[{
		xtype:'left',
		region:'west'
	},{
		xtype:'container',
		html:'test',
		layout:'card',
		region:'center'
	}]
});