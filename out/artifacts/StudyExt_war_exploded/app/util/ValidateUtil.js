/**
 * define common valiate function
 */
Ext.define('app.util.ValidateUtil', {
    singleton : true,
    alternateClassName : 'ValidateUtil',
    /**
     * validate user login true or no
     */
    // requires:['app.util.CommonUtil','app.util.ConfigUtil'],
    isLogin : false,
    /**
     * validate user's password is remembered? true or no
     */
    isRemember : false,

    /* 为Ext.Viewport添加一个消息提示组件 */
    addMessage : function() {
        Ext.Viewport.setMasked({
            xtype : 'loadmask',
            cls : 'message',
            transparent : true,
            indicator : false
        });
        this.hideMessage();
    },
    /* 显示一个消息提示 */
    showMessage : function(mes, autoHide) {
        var me = this, message = this.getMessage();
        message.setMessage(mes);
        message.show();
        // 是否自动关闭提示
        if (autoHide) {
            setTimeout(function() {
                message.hide();
            }, 500);
        }
    },
    /* 隐藏消息提示 */
    hideMessage : function() {
        this.getMessage().hide();
    },
    // 消息组件
    getMessage : function() {
        return Ext.Viewport.getMasked();
    },
    // 验证模型
    valid : function(model, values) {
        var tempModel = Ext.create(model, values);
        var  me = this, errors, valid;
        errors = tempModel.validate();
        valid = errors.isValid();
        if (!valid) {
            me.addMessage();
            errors.each(function(err) {
                me.showMessage(err.getMessage(), true);
                return false;
            });
        }
        return valid;
    },

    // 验证模型
    validModel : function(model, values) {
        var tempModel = Ext.create(model, values);
        var me = this, errors, valid;
        errors = tempModel.validate();
        valid = errors.isValid();
        if (!valid) {
            errors.each(function(err) {
                Ext.Msg.alert('提示', err.getMessage());
                return false;
            });
        }
        return valid;
    }

});