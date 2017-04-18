Ext.define('app.view.main.MainContainerWrap', {
    extend: 'Ext.container.Container',
    xtype: 'maincontainerwrap',

    layout: {
        type: 'hbox',
        align: 'stretch',       
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    },
    beforeLayout : function() {
     
        var me = this,
         height = Ext.Element.getViewportHeight() - 64; 
           
        me.minHeight = height;

        me.callParent(arguments);
    }
});
