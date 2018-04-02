// This tab will be shown in the customer module

Ext.define('Shopware.apps.SesamePlugin.view.detail.SesameArticleTab', {
    extend: 'Ext.container.Container',
    padding: 10,
    title: 'Aliexpress.com Article Informations',

    initComponent: function() {
        var me = this;

        me.items  =  [{
            xtype: 'label',
            html: '<h1>Hello world</h1>'
        }];

        me.callParent(arguments);
    }

});