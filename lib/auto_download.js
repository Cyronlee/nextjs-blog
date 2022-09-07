// ==UserScript==
// @name         Auto Download CircleCI Artifact Image
// @namespace    http://github.com/
// @version      0.1
// @description  Auto download image when load circleci artifact image in a window
// @author       Siyuan Li
// @match        https://circleci-tasks-prod.s3.us-east-1.amazonaws.com/storage/artifacts/**
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
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
