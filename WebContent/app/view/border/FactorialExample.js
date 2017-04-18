/**
 * Created by HuangShiQing on 2017/4/18.
 */
Ext.define('app.view.border.FactorialExample', {
    extend: 'Ext.form.Panel',
    xtype: 'factorialExample',
    layout: 'column',
    cls: 'submitForm',
    height: 'auto',
    bodyPadding: '5 10 5 0',

    defaults: {
        xtype: 'textfield',
        labelAlign: 'right',
        columnWidth: 0.5
    },
    items: [{
        fieldLabel: '阶乘(n!):',
        name:'factorial',
        listeners:{
            'change':'changeResult'
        }
    },{
        fieldLabel: '计算结果',
        name:'result'
    }]
});