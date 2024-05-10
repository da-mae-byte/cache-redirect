// 検索結果内のaタグをループ
document.getElementById("center_col").querySelectorAll("a").forEach(a => {
    let url = a.href;
    if (url.indexOf("https://www.google.com") < 0) {
        const WIDTH = 500;
        let a_width = a.getBoundingClientRect().width;
        let cache_url = "http://webcache.googleusercontent.com/search?q="
                        + encodeURI("cache:" + url)
                        + "&oq=" + encodeURI(url) + "&sourceid=chrome&ie=UTF-8";
        let cache_a = "";
        if (a_width >= WIDTH) {
            cache_a = "<a style='font-size:13px;position:absolute;right:0' href='" + cache_url + "'>キャッシュ</a>";
        }
        else {
            cache_a = "<a style='font-size:13px;padding-left:10px' href='" + cache_url + "'>キャッシュ</a>";
        }
        a.insertAdjacentHTML("afterend", cache_a);
    }
});
