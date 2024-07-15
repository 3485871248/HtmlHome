const songButton = document.getElementById('play-button');
const music = new Audio("https://m701.music.126.net/20240715115905/681e1e77540f110ddef37abf553b684a/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/44313476104/566c/fb87/2285/5a766db1b52abc1e4f3648eff203f7ce.m4a")
let isPlaying = false;

function playSong() {
    if (isPlaying === false) {
        songButton.src = "https://s3.bmp.ovh/imgs/2024/07/15/4f6ace258b738198.png"
        music.play().then(() => {
            music.loop = true;
        })
            .catch(() => {
                console.log("播放失败")
            })
        isPlaying = true;
    }
    else {
        songButton.src = "https://s3.bmp.ovh/imgs/2024/07/15/4e6fc6d1f465cff6.png"
        isPlaying = false;
        music.pause()
    }
}