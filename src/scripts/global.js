(function () {
    'use strict';

    var enablePipMode;

    enablePipMode = function () {
        // noinspection JSUnresolvedVariable, JSUnresolvedFunction
        safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('enablePipMode');
    };

    // noinspection JSUnresolvedVariable
    /** Register the menu button command */
    // safari.application.addEventListener('command', togglePipMode, false);
    safari.application.addEventListener('command', enablePipMode, false);
}());
