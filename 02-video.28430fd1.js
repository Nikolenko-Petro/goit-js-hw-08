const e=document.querySelector("iframe"),t=new Player(e);t.on("timeupdate",throttle((e=>{localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));t.setCurrentTime(localStorage.getItem("videoplayer-current-time")).catch((function(e){console.error(e)}));
//# sourceMappingURL=02-video.28430fd1.js.map
