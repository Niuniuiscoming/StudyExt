/**
 * Created by HuangShiQing on 2017/4/17.
 */
Ext.define('app.view.border.Vbox', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.VBox'
    ],
    xtype: 'layout-vertical-box',
    width: 500,
    height: 400,

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },

    bodyPadding: 10,

    defaults: {
        frame: true,
        bodyPadding: 10
    },
    items: [
        {
            title: 'Panel 1',
            flex: 1,
            margin: '0 0 10 0',
            html: '内容一'
        },
        {
            title: 'Panel 2',
            height: 100,
            margin: '0 0 10 0',
            html: '内容二'
        },
        {
            title: 'Panel 3',
            flex: 2,
            html: '内容三'
        }
    ],
    initComponent: function() {
        this.callParent();
    }
})