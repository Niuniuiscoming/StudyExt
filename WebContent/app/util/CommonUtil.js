/**
 * define common methods used by projects
 */

Ext.define('app.util.CommonUtil', {
	singleton: true,
	alternateClassName:'CommonUtil',
	/**
	 * display a message-box with follows params
	 * @param {Object} title
	 * @param {Object} msg
	 * @param {Object} fn
	 */
	showMessage: function(title, msg, fn) {
		Ext.Msg.confirm(title,msg, fn);
	},
	/**
	 * load server's data with ajax method
	 * @param {Object} url
	 * @param {Object} params
	 * @param {Object} fn
	 * fn is callback with params (options,success,response)
	 */
	loadData:function(url,params,fn){
		Ext.Ajax.request({
			url:url,
			cors:true,
			//useDefaultXhrHeader:false,
			//defaultXhrHeader:'XDomainRequest ',
			//withCredentials:true,
			params:params,
			method:'POST',
			callback:fn			
		});
	},
	/*为Ext.Viewport添加一个消息提示组件*/
    addMessage: function () {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            transparent: true,
            indicator: false
        });
        this.hideMessage();
    },
    /*显示一个消息提示*/
    showToast: function (mes, autoHide) {
        var me = this, message = this.getMessage();
        message.setMessage(mes);
        message.show();
        //是否自动关闭提示
        if (autoHide) {
            setTimeout(function () {
                message.hide();
            },
            500);
        }
    },
	/*隐藏消息提示*/
    hideMessage: function () {
        this.getMessage().hide();
    },
    //消息组件
    getMessage: function () {
        return Ext.Viewport.getMasked();
    },
	
});