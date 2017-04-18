/**
 * 应用程序总入口
 */


 Ext.Loader.setConfig({
    enabled : true,
    paths : {
        'ux' : 'app/ux'
    }
});


Ext.application({
    name: 'app',
    appFolder: 'app',
    extend: 'app.Application',
    requires:['app.view.main.Main'],
    mainView: 'app.view.main.Main'
    
});
