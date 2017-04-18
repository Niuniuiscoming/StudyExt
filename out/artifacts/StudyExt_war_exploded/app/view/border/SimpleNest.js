/**
 * Created by HuangShiQing on 2017/4/18.
 */
Ext.define('app.view.border.SimpleNest', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border',
        'app.view.border.FactorialExample',
        'app.view.border.SimpleController'
    ],
    controller: 'simpleController',
    layout: 'border',
    width: 500,
    height: 400,

    bodyBorder: false,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    items: [
        {
            title: 'Footer',
            region: 'south',
            height: 100,
            minHeight: 75,
            maxHeight: 150

        },
        {
            title: 'Navigation',
            region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            layout: 'accordion',
            items:[{
                title: 'Panel 1',
                html: 'Panel1 content!'
            },{
                title: 'Panel 2',
                html: 'Panel2 content!'
            },{
                title: 'Panel 3',
                html: 'Panel3 content!'
            }]
        },
        {
            title: '嵌套的简单实现--阶乘',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            xtype:'factorialExample'
        }
    ],
    initComponent: function() {
        this.callParent();
    }
})