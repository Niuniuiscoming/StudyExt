/**
 * Created by HuangShiQing on 2017/4/18.
 */
Ext.define('app.view.border.SimpleController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.simpleController',
    control: {
        /*'button[action=operate]': {
            'click': 'onButton'
        }*/
    },
    changeResult:function(btn,record){
        var me = this;
        alert("2333");
        var form=this.getView();

        Ext.Ajax.request({
            url : 'SimpleController/countFactorial.htm',
            method : 'post',
            params : {
                INOUT_ID : selRec.data.INOUT_ID
            },
            success : function(response, opts) {
                var objs = Ext.decode(response.responseText);
                /*var win = Ext.create('app.view.durationMagement.receviedAndPayInterestManagement.productInOutManagement.ProductInOutAdd');
                win.setTitle("修改收付息");
                var formData = Ext.create('Ext.data.Model',objs);
                win.down("form").loadRecord(formData);

                win.down("form").down("#productCombo").hiddenVal=selRec.data.PRODUCT_NAME;
                win.down("form").down("#inAccountCombo").hiddenVal=selRec.data.IN_ACCOUNT_ID;
                win.down("form").down("#outAccountCombo").hiddenVal=selRec.data.OUT_ACCOUNT_ID;

                var confirmBtn = win.down("#confirmBtn");
                var cancleBtn = win.down("#cancleBtn");
                confirmBtn.on('click',me.doEditCommit,me);
                cancleBtn.on('click',me.closeWin);
                win.show();*/
            },
            failure : function(response, opts) {
                Ext.Msg.alert("警告", "请求失败");
                console.log('server-side failure with status code '
                    + response.status);
            }
        });


    }
})