class Helper {

  playPauseAndUpdate(song){
    const duration = player.prettyTime(player.getDuration());
    player.playPause(song);
    let totalTime = null;
    if(song !== undefined){
      totalTime = song.duration;
    } else {
      totalTime = player.getDuration();
    }

    $('#time-control .total-time').text( totalTime );

  };
}

const helper = new Helper();
