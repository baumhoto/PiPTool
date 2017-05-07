(function () {
    'use strict';

    var togglePipMode,
        cachedAdditionalDomains,
        enablePipMode;

    /** Handler for the menu button */
    togglePipMode = function () {
        // noinspection JSUnresolvedVariable, JSUnresolvedFunction
        safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('enterPipMode');
    };

    enablePipMode = function () {
        // noinspection JSUnresolvedVariable, JSUnresolvedFunction
        safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('enablePipMode');
    };

    cachedAdditionalDomains = null;

    // noinspection JSUnresolvedVariable
    /** Register the menu button command */
    // safari.application.addEventListener('command', togglePipMode, false);
    safari.application.addEventListener('command', enablePipMode, false);

    // noinspection JSUnresolvedVariable
    safari.application.addEventListener('message', function (message) {
        var additionalDomains;

        if ('retrieveSettings' === message.name) {
            if (cachedAdditionalDomains) {
                additionalDomains = cachedAdditionalDomains;
            } else {
                // noinspection JSUnresolvedVariable
                additionalDomains = safari.extension.settings.getItem('plexDomains') || '';

                /** Remmove spaces */
                additionalDomains = additionalDomains.replace(/\s/g, '');

                /** Trim left pipe */
                additionalDomains = additionalDomains.replace(/^\|+/, '');

                /** Trim right pipe */
                additionalDomains = additionalDomains.replace(/\|+$/, '');

                additionalDomains = additionalDomains.split('|');

                additionalDomains = additionalDomains.filter(function (additionalDomain) {
                    return /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(additionalDomain) || /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(additionalDomain);
                });

                additionalDomains = additionalDomains.join('|');

                cachedAdditionalDomains = additionalDomains;
            }

            // noinspection JSUnresolvedVariable, JSUnresolvedFunction
            safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('retrieveSettingsResponse', additionalDomains);
        }
    }, false);
}());
