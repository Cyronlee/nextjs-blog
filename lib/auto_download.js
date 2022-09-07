// ==UserScript==
// @name         GitHub PR Tools (merge)
// @namespace    https://github.com/
// @version      0.2
// @description  Adds Merge It button
// @author       Scott Kingsley Clark
// @include      /https?:\/\/github\.com.*\/pull\/.*/
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const downloadImage = (url, fileName) => {
        fetch(url).then(async res => await res.blob()).then((blob) => {

            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = URL.createObjectURL(blob);

            a.download = fileName;
            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
            window.close();
        })
    }

    const src = document.getElementsByTagName('img')[0].getAttribute('src');
    const fileName = document.title.split(' ')[0];
    downloadImage(src, fileName);
})();
