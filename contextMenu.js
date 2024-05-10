'use strict';

{
    chrome.runtime.onInstalled.addListener(() => {
        chrome.contextMenus.create({
            id: 'redirectToCacheOfThisPage',
            contexts: ["page"],
            title: 'キャッシュで開きなおす'
        });
        chrome.contextMenus.create({
            id: 'goToCacheOfThisPage',
            contexts: ["link"],
            title: 'リンク先をキャッシュで開く'
        });
    });

    // メニューをクリック時に実行
    chrome.contextMenus.onClicked.addListener(item => {
        let url = "";
        if (item.menuItemId == "redirectToCacheOfThisPage") {
            url = item.pageUrl;
        }
        else if (item.menuItemId == "goToCacheOfThisPage") {
            url = item.linkUrl;
        }
        if (url != "" && url.indexOf("webcache.googleusercontent.com") < 0) {
            let cache_url = "http://webcache.googleusercontent.com/search?q="
                            + encodeURI("cache:" + url)
                            + "&oq=" + encodeURI(url) + "&sourceid=chrome&ie=UTF-8";
            chrome.tabs.update(null, { url: cache_url });
        }
    });
}
