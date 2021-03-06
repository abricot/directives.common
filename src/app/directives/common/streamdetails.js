"use strict";
angular.module('directives.streamdetails', [])
.directive('streamdetails', function () {
  return {
    restrict: 'E',
    replace : true,
    templateUrl: 'template/streamdetails/streamdetails.tpl.html',
    scope: {
      details: '='
    },
    link: function (scope, elem, attrs) {
      scope.hasAudio = function () {
        return scope.details && scope.details.audio && scope.details.audio.length >0;
      };
      scope.hasVideo = function () {
        return scope.details && scope.details.video && scope.details.video.length >0;
      };
      scope.hasSubtitle = function () {
        return scope.details && scope.details.subtitle && scope.details.subtitle.length >0;
      };

      scope.getVideoMode = function () {
        if(scope.hasVideo()) {
          var firstVideo = scope.details.video[0];
          if(firstVideo.width >= 1280) {
            return 'HD';
          } else {
            return 'SD';
          }
          return scope.details.video[0].height;
        } else {
          return '';
        }
      };

      scope.getAudioChannels = function () {
        if(scope.hasAudio()) {
          var firstAudio = scope.details.audio[0];
          if(firstAudio.channels < 3) {
            return firstAudio.channels;
          } else {
            return firstAudio.channels-1+'.1'; 
          }
        } else {
          return '';
        }
      };

      scope.getAudioCodec = function () {
        return scope.details.audio[0].codec;
      };

      scope.getAudioLanguage = function () {
        if(scope.details.audio.length === 1) {
          var firstAudio = scope.details.audio[0];
          return firstAudio.language;
        } else {
          return 'multi';
        }
      };

      scope.getSubtitles = function () {
        if(scope.details.subtitle.length === 1) {
          var firstSubtitle = scope.details.subtitle[0];
          return firstSubtitle.language;
        } else {
          return 'multi';
        }
      };
    }
  };
}); 