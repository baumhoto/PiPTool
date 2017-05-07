# PiPTool
PiPTool is a Safari 10 extension built to add the Picture-in-Picture functionality to the video players that do not have it implemented.

This is a fork of the original PiPTool. I found it tedious to create custom logic to inject a PiP-Button into each site, so i decided that i just want to use the button in the Safari-Toolbar to enable Pip. Therefore i removed most of the code and just use a simple mapping of a Regex to a Css-Selector.

```javascript
urlRegex2cssSelector = {};
urlRegex2cssSelector['/.*amazon.*.gp.video.detail.*/'] = '#dv-web-player > div > div:nth-child(1) > div.webPlayerElement > div > div.rendererContainer > video:nth-child(2)';
urlRegex2cssSelector['/.*youtube.*/'] = '#movie_player > div > video';
```

Regex is used to check if the url matches. If true then the Css-Selector will be used to get the video Element.

Open the website with the video, *then interact with the video once e.g. by clicking pause/play*. After that click on the button in the Safari Toolbar which should send the Video into PiP-Mode.

#currently supported:
1. Nexflix
2. Youtube
3. Amazon Prime Video
4. Channel9
5. Gamestar

Edit main.js to add additional ones

## Installation
- Don't have a developer subscription, so no download. You need to clone the repo and build the extension locally.

## Development
1. Prerequisites: [Node.js](https://nodejs.org/en/), [Grunt](http://gruntjs.com), [JSCS](http://jscs.info) and [JSHint](http://jshint.com)
2. Clone the repo
3. Use "npm install" to install the needed packages
4. If you want to develop, use "grunt live" to build and then listen for changes in the project files
5. If you want to build the extension, use "grunt build"

Note: you need to use Safari to build the ".safariextz" file. The build command above just generates the files for Safari.

## Improvements
- make the mapping from RegEx to Css-Selector user modifyable.

## Changelog
### Version 1.8.2
- Fix Search mode

### Version 1.8.1
- Changed versioning type
- Improved Plex native support
- Added settings for additional Plex domains. The settings are accessible via Extensions panel in Safari preferences. You can add 1 domain like this: "test.com" or multiple domains "test1.com|test2.com|test3.com". IPs are supported too.
- Improved picker mode by adding a red border to the current hovered element
- Improved menu icon

### Version 1.8
- Added menu button to trigger the PiP mode manually for a picked video. Just click the PiPTool button then navigate with the mouse above page elements. If the selected element is a video, then it will trigger the PiP mode.
- Reorganized the project a little

### Version 1.7
- Added initial Plex support
- Added Netflix support (many thanks to [Joe Kuhns](https://github.com/JoeKuhns) for his hard work)
- Fixed issue with YouTube not working on embedded videos
- Improved the performance by triggering the plugin only on the supported websites (thanks, again, to [Joe Kuhns](https://github.com/JoeKuhns))
- Created a more programatic way to handle the project (instructions coming soon)
- more to come

### Version 1.6
- Fixed PiP button not displaying when navigating to a movie from YouTube homepage
- Added the possibility to bind custom event to trigger the PiP button loading
- Possible fix for the [https://github.com/bfmatei/PiPTool.safariextension/issues/3](YouTube playlists issues)

### Version 1.5
- Add the possibility to auto-update the extension

### Version 1.4
- Add functionality for DailyMotion. More to come soon
- Optimize the code

### Version 1.3
- Make it work with all the YouTube videos in a page (for multiple embedded videos on same page)

### Version 1.2
- Simplify the code by removing unnecessary attribute

### Version 1.1
- Changed icon with the one offered in [Material Design Icons](https://design.google.com/icons/#ic_picture_in_picture)

### Version 1.0
- Initial release

## Known Bugs
- When leaving picture-in-picture mode the video stops
