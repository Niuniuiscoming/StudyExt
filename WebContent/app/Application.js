/**
 * 应用程序入口初始化配置
 */

Ext.Loader.setConfig({
    enabled : true,
    paths : {
        'ux' : 'app/ux'
    }
});
Ext.define('app.Application', {
    extend: 'Ext.app.Application',
    appFolder: 'app',
    name: 'app',	
    stores: [
        
    ],  
    launch: function () {

    },  
    onAppUpdate: function () {
        Ext.Msg.confirm('应用程序更新', '程序已经更新，需要重新加载吗?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }  
});
