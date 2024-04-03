//export const API_Key= "AIzaSyCAhU4iFTNP_CwETvZe-4Fp8iaLfXP0cbY";
export const API_Key="AIzaSyCMrjiG0ogjNxEpWNoU61HlOVqwvv40B9o"

export const YOUTUBE_VIDEO_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_Key;

export const YOUTUBE_SEARCH_SUGGESTION_LIST="https://www.googleapis.com/youtube/v3/search?key="+API_Key+"&type=video&part=snippet&maxResults=25&regionCode=IN&q=";


//export const YOUTUBE_SEARCH_SUGGESTION="http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=ip";
//export const YOUTUBE_SEARCH_SUGGESTION="http://api.tvmaze.com/search/shows?q=";
//export const YOUTUBE_SEARCH_SUGGESTION="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
//export const YOUTUBE_SEARCH_SUGGESTION="https://youtube.googleapis.com/youtube/v3/search?q=";
//export const YOUTUBE_SEARCH_SUGGESTION="https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q="
// export const YOUTUBE_SEARCH_SUGGESTION =
// "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCAhU4iFTNP_CwETvZe-4Fp8iaLfXP0cbY&type=video&part=snippet&maxResults=25&regionCode=IN&q=";
// export const YOUTUBE_SEARCH_SUGGESTION="https://suggestqueries.google.com/complete/search?callback=?", {
//         "hl": "en", // Language
//         "ds": "yt", // Restrict lookup to youtube
//         "jsonp": "suggestCallBack", // jsonp callback function name
//         "q": request.term, // query term
//         "client": "youtube" // force youtube style response, i.e. jsonp
//       })

      export const YOUTUBE_SEARCH_SUGGESTION="https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q=";
      //+query+"&key="+apiKey+"&format=5&alt=json&callback=?"