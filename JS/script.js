// let videoUrls = ytplayer.config.args.raw_player_response.playbackTracking.map.split(",");



window.onload = function(){
   let videoUrls = window.ytplayer.config.args.url_encoded_fmt_stream_map.split(' ,');
   console.log("Our extension has loaded");
}

// console.log("Our Extension has loaded Successfully");
//ytplayer.config.args.url_encoded_fmt_stream_map //to get different option of videos urls