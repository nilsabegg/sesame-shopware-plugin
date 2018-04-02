//{block name="backend/article/view/detail/window"}
// {$smarty.block.parent}
Ext.define('Shopware.apps.Sesame.view.detail.Window', {
    override: 'Shopware.apps.Article.view.detail.Window',

    getTabs: function () {
        var me = this,
            result = me.callParent();

        result.push(Ext.create('Shopware.apps.Sesame.view.detail.SesameArticleTab'));

        return result;
    }

});
//{/block}










