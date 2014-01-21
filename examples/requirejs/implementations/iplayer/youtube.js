
/*
 * implementations/iplayer/youtube.js
 */
define(['interfaces/iplayer'], function(IPlayer){

  function YoutubePlayer(){}

  YoutubePlayer.prototype.load = function(video){
    if(video.provider !== 'youtube') throw new Error('Type not recognize');
    this._player = new YT.Player(video.playerId);
  };

  YoutubePlayer.prototype.play = function(){
    this._player.playVideo();
  };

  YoutubePlayer.prototype.pause = function(){
    this._player.pauseVideo();
  };

  // will throw an error if the implementation does not match the interface IPlayer
  IPlayer.implement(YoutubePlayer);

  return YoutubePlayer;

});
