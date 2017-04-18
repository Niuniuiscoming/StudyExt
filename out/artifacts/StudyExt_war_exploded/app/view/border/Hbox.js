/**
 * Created by HuangShiQing on 2017/4/18.
 */
Ext.define('app.view.border.Hbox', {
    extend: 'Ext.panel.Panel',
    requires: [
        //'Ext.layout.container.HBox'
    ],
    xtype: 'layout-vertical-box',
    width: 500,
    height: 400,

    layout: {
        type: 'hbox',
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
            margin: '0 10 0 0',
            html: '内容一'
        },
        {
            title: 'Panel 2',
            flex: 1,
            margin: '0 10 0 0',
            html: '内容二'
        },
        {
            title: 'Panel 3',
            flex: 1,
            html: '内容三'
        }
    ],
    initComponent: function() {
        this.callParent();
    }
})