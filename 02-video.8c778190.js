!function(){var e=document.querySelector("iframe"),t=new Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3)),t.setCurrentTime(localStorage.getItem("videoplayer-current-time")).catch((function(e){console.error(e)}))}();
//# sourceMappingURL=02-video.8c778190.js.map
