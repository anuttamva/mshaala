//extra function present
angular.module('songs').controller('SongsController', ['$scope','$routeParams', '$location', 'Authentication', 'Songs',function($scope, $routeParams, $location, Authentication, Songs)
{
    $scope.authentication = Authentication;
    
    $scope.create = function() {
        var song = new Songs({
            title: this.title,
            lyricist: this.lyricist,
            language: this.language,
            lyricsGenre: this.lyricsGenre,
            baseLyrics: {
                stanzaCount: 4,
              unicodeLanguage: "Kannada"
              ,stanzas: [
                {
                  stanzaNumber: 1,
                  name: "Pallavi",
                  lines: [
                    {lineNumber: 1, text:"aa"},
                    {lineNumber: 2, text:"bb"}
                  ]
                },
                {
                  stanzaNumber: 2,
                  name: "Charana",
                  lines: [
                    {lineNumber: 1, text:"cc"},
                    {lineNumber: 2, text:"dd"}
                  ]
                },
                {
                  stanzaNumber: 3,
                  name: "Charana",
                  lines: [
                    {lineNumber: 1, text:"ee"},
                    {lineNumber: 2, text:"ff"}
                  ]
                },
                {
                  stanzaNumber: 4,
                  name: "Charana",
                  lines: [
                    {lineNumber: 1, text:"gg"},
                    {lineNumber: 2, text:"hh"}
                  ]
                }
              ]
            },
            tunes: [
              {
                tuneGenre: "Karnatic Devotional",
                raaga: "Malahari",
                taala: "Roopaka",
                laya : "madhyama",
                genre : "Carnatic Classical Music",
                baseTempo: 120,
                baseShruthi: "C4",
                startMatra: 1,
                tuneComposer: "Purandara Dasaru",
                tuneLyrics: {
                  stanzaCount: 4,
                  unicodeLanguage: "Kannada",
                  stanzas: [
                    {
                      stanzaNumber: 1,
                      name: "Pallavi",
                      lines: [
                        {lineNumber: 1, text:"yy", midiTune: "0xFFFFFFFFFFF"}
                        ,{lineNumber: 2,text:"bs", midiTune: "0xFFFFFFFFFFF"}
                        ,{lineNumber: 3, text:"lam", midiTune: "0xFFFFFFFFFFF"}
                      ]
                    },
                    {
                      stanzaNumber: 2,
                      name: "Charana",
                      lines: [
                        {lineNumber: 1,text:"ll",midiTune: "0xFFFFFFFFFFF"},
                        {lineNumber: 2, text:"mm", midiTune: "0xFFFFFFFFFFF"},
                        {lineNumber: 3, text:"nn", midiTune: "0xFFFFFFFFFFF"},
                        {lineNumber: 4, text:"oo", midiTune: "0xFFFFFFFFFFF"},
                        {lineNumber: 5, text:"pp", midiTune: "0xFFFFFFFFFFF"}
                      ]
                    },
                    {
                      stanzaNumber: 3,
                      name: "Charana",
                      lines: [
                        {lineNumber: 1,text:"qq",midiTune: "0xFFFFFFFFFFF"},
                        {lineNumber: 2,text:"rr",midiTune: "0xFFFFFFFF"},
                        {lineNumber: 3, text:"ss", midiTune: "0xFFFFFFFFFFF"},
                        {lineNumber: 4, text:"tt", midiTune: "0xFFFFFFFFFFF"},
                        {lineNumber: 5, text:"uu", midiTune: "0xFFFFFFFFFFF"}
                      ]
                    },
                    {
                      stanzaNumber: 4,
                      name: "Charana",
                      lines: [
                        {lineNumber: 1, text:"vv", midiTune: "0xFFFFFFFFFFF"},
                        {lineNumber: 2,text:"ww",midiTune: "0xFFFFFFFF"},
                        {lineNumber: 3, text:"xx", midiTune: "0xFFFFFFFFFFF"},
                        {lineNumber: 4, text:"yy", midiTune: "0xFFFFFFFFFFF"},
                        {lineNumber: 5, text:"zz", midiTune: "0xFFFFFFFFFFF"}
                      ]
                    }
                  ]
                },
                bgms: [
                  {
                    composer: "B. J. Bharath",
                    tracks: [ 
                      { trackNumber: 1, instrument: "Tanpura" },
                      { trackNumber: 2, instrument: "Tabla" },
                      { trackNumber: 3, instrument: "Harmonium" },
                      { trackNumber: 4, instrument: "Flute" },
                      { trackNumber: 5, instrument: "Sitar" }
                    ]
                  },
                  {
                    composer: "Rajan Nagendra",
                    tracks: [ 
                      { trackNumber: 1, instrument: "Tanpura" },
                      { trackNumber: 2, instrument: "Mridangam" },
                      { trackNumber: 3, instrument: "Violin" },
                      { trackNumber: 4, instrument: "Ghatam" }
                    ]
                  }					
                ],
                recordings : [
                  {
                    singer : "Stuthi Bhat",
                    raaga : "adf",
                    taala : "adsf",
                    lyricist : "asdf",
                    tuneCompo : "asdf",
                    shruti : "asdf"
                  },
                  {
                    singer : "Vamsi Krishna",
                    raaga : "kkk",
                    taala : "llll",
                    lyricist :"mmmm",
                    tuneCompo :"hlmk",
                    shruti : "klmn"
                  }
                ]
              }
            ]
        });
        song.$save(function(response) {
            $location.path('songs/' + response._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };
    
    $scope.find = function() {
        $scope.songs = Songs.query();
    };
    $scope.findOne = function() {
        $scope.song = Songs.get({
            songId: $routeParams.songId
        });
    };
    $scope.getImageClass = function(){
        return {compoimg: true};
    };
    $scope.imgpath = "/img/purandaradaasu.jpe";
}])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('brown', {
      'default': '900'})
    .warnPalette('grey',{
      'default':'900',"hue-1":"800","hue-2":"600","hue-3":"200"});
});


    