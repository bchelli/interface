
/*
 * main.js
 *
 *   This Module is a Video Player Factory
 *   I allows you to create a player that could be a Youtube or a Vimeo Player
 *
 */
define(
  [
    'implementations/iplayer/vimeo'
  , 'implementations/iplayer/youtube'

  , 'interfaces/ivideo'
  ]
, function(
    VimeoPlayer
  , YoutubePlayer

  , IVideo
  ){

    return function(video){

      // check the arguments
      if(!video)          throw new Error('Video object is expected.');
      IVideo.implement(video);

      var Factory;

      switch(video.provider){
        case 'vimeo':     Factory = VimeoPlayer;                                break;
        case 'youtube':   Factory = YoutubePlayer;                              break;
        default:          throw new Error('This Video Provider not managed.');  break;
      }

      return new Factory(video);

    }

  }
);
