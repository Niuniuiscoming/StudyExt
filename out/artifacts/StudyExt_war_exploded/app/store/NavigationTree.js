Ext.define('app.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    root: {
        expanded: true,
        children: [

            {
                text: 'Ext布局',
                expanded: false,
                selectable: false,
                iconCls: 'x-fa fa-leanpub',
                routeId : 'pages-parent',
                id:       'pages-parent',
                children: [
                    {
                        text: 'Vbox布局',
                        view: 'border.Vbox',
                        leaf: true,
                        iconCls: 'x-fa fa-file-o',
                        routeId:'border.Vbox'
                    },

                    {
                        text: 'Hbox布局',
                        view: 'border.Hbox',
                        leaf: true,
                        iconCls: 'x-fa fa-exclamation-triangle',
                        routeId: 'border.Hbox'
                    },{
                        text: '简单嵌套布局',
                        view: 'border.SimpleNest',
                        leaf: true,
                        iconCls: 'x-fa fa-exclamation-triangle',
                        routeId: 'border.SimpleNest'

                    }
                ]
            }
        ]
    },
    fields: [
        {
            name: 'text'
        }
    ]
});
