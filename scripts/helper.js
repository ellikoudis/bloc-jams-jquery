class Helper {

  playPauseAndUpdate(song){
    const duration = player.prettyTime(player.getDuration());
    player.playPause(song);
    $('#time-control .total-time').text(duration)
};

const helper = new Helper();
