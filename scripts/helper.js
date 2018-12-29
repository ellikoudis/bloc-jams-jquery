class Helper {

  playPauseAndUpdate(song){
    player.playPause(song);

    $('#time-control .total-time').text( totalTime );

  };


const helper = new Helper();
