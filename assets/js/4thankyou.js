function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
    return;
}

function tenorCallback_randomsearch(responsetext) {
    var response_objects = JSON.parse(responsetext);
    top_10_gifs = response_objects["results"];
    document.getElementById("preview_gif").src = top_10_gifs[0]["media"][0]["nanogif"]["url"];
    return;
}

function grab_data() {
    var apikey = "LIVDSRZULELA";
    var lmt = 8;
    var search_term = "excited";
    var search_url = "https://g.tenor.com/v1/random?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;
    httpGetAsync(search_url,tenorCallback_randomsearch);
    return;
}

grab_data();