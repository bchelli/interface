
/*
 * implementations/iplayer/vimeo.js
 */
define(['interfaces/iplayer'], function(IPlayer){

  function VimeoPlayer(){}

  VimeoPlayer.prototype.load = function(video){
    if(video.provider !== 'vimeo') throw new Error('Type not recognize');
    this._player = $f(document.getElementById(video.playerId));
  };

  VimeoPlayer.prototype.play = function(){
    this._player.api('play');
  };

  VimeoPlayer.prototype.pause = function(){
    this._player.api('pause');
  };

  // will throw an error if the implementation does not match the interface IPlayer
  IPlayer.implement(VimeoPlayer);

  return VimeoPlayer;

});


