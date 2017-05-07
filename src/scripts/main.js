(function () {
    'use strict';

    var initPipTool,
        enablePipMode,
        urlRegex2cssSelector;

    urlRegex2cssSelector = {};
    urlRegex2cssSelector['/.*amazon.*.gp.video.detail.*/'] = '#dv-web-player > div > div:nth-child(1) > div.webPlayerElement > div > div.rendererContainer > video:nth-child(2)';
    urlRegex2cssSelector['/.*youtube.*/'] = '#movie_player > div > video';
    urlRegex2cssSelector['/.*gamestar\..*\/videos/'] = '#playerID > div.jw-media.jw-reset > video';
    urlRegex2cssSelector['/.*netflix.*watch.*/'] = '#netflix-player > div.player-video-wrapper > div > video';
    urlRegex2cssSelector['/.*channel9.msdn.com.*/'] = 'body > main > div.itemBody.holder > div > div.playerContainer > div.playerGoesHere > video';

    enablePipMode = function () {
        var element,
            regEx,
            result,
            breakException;

        breakException = {};
        console.log('enablePiP');

        try {
            Object.keys(urlRegex2cssSelector).forEach(function (key) {
                console.log(key);
                regEx = new RegExp(key);
                result = regEx.test(document.URL);
                if (result) {
                    console.log('Url matched');
                    element = document.querySelector(urlRegex2cssSelector[key]);
                    if (element.webkitSetPresentationMode) {
                        // noinspection JSUnresolvedVariable
                        if ('inline' === element.webkitPresentationMode) {
                            // noinspection JSUnresolvedFunction
                            element.webkitSetPresentationMode('picture-in-picture');
                            throw breakException;
                        } else {
                            // noinspection JSUnresolvedFunction
                            element.webkitSetPresentationMode('inline');
                        }

                        return;
                    }
                } else {
                    console.log('not matched ' + document.URL);
                }
            });
        } catch (e) { }
    };

    /** Method to trigger the PiP button display */
    initPipTool = function () {
        // noinspection JSUnresolvedVariable
        /**
         * Register the listener for the menu button click
         * @param {Object} message - Message received from global instance
         */
        safari.self.addEventListener('message', function (message) {
            if ('enablePipMode' === message.name) {
                enablePipMode();
            }
        }, false);
    };

    initPipTool();
}());
