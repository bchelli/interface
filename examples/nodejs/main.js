

var Interface = require('interface')
  , IPlayer = new Interface({

      load:function(video){}

    , play:function(){}
    , pause:function(){}

    })
  ;


/*
 * VIMEO
 */
function VimeoPlayer(){}

VimeoPlayer.prototype.load = function(video){
  if(video.type !== 'vimeo') throw new Error('Type not recognize');
  this._player = new Vimeo(video.vimeoAttrs);
};

VimeoPlayer.prototype.play = function(){
  this._player.api('play');
};

VimeoPlayer.prototype.pause = function(){
  this._player.api('pause');
};

IPlayer.implement(VimeoPlayer);


/*
 * YOUTUBE
 */
function YoutubePlayer(){}

YoutubePlayer.prototype.load = function(video){
  if(video.type !== 'youtube') throw new Error('Type not recognize');
  this._player = new YT(video.youtubeAttrs);
};

YoutubePlayer.prototype.play = function(){
  this._player.play();
};

YoutubePlayer.prototype.pause = function(){
  this._player.pause();
};

IPlayer.implement(YoutubePlayer);
