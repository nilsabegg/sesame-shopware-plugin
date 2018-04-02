<?php
namespace SesamePlugin;

use Shopware\Bundle\PluginInstallerBundle\Service\InstallerService;
use Shopware\Components\Plugin;
use Shopware\Components\Plugin\Context\InstallContext;
use Shopware\Models\Plugin\Plugin as PluginModel;
use Symfony\Component\DependencyInjection\ContainerBuilder;

/**
 * Class Sesame
 * @package SesamePlugin
 */
class SesamePlugin extends Plugin
{
    /**
     * @param ContainerBuilder $container
     */
    public function build(ContainerBuilder $container)
    {
        $container->setParameter('sesame_plugin.plugin_dir', $this->getPath());
        parent::build($container);
    }
}