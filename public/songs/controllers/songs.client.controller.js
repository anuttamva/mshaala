//extra function present
angular.module('songs').controller('SongsController', ['$scope','$routeParams', '$location', 'Authentication', 'Songs','ngAudio',function($scope, $routeParams, $location, Authentication, Songs, ngAudio)
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
                  stanzaCount: 1,
                  unicodeLanguage: "Kannada",
                  beatsPerCycle: 1,
                  origTempo: 120,
                  newTempo: 120,
                  nlaghu: 2,
                  ndrutha: 4,
                  practiceLevel: 0,
                  stanzas: [
                    {
                      stanzaNumber: 1,
                      name: "Pallavi",
                      audioMeta: [
                        {
                          cycleIdx: 1,
                          beats: [
                            {
                              idx: 1, 
                              lyric: "",
                              note: ""
                            }
                          ]
                        }  
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
            ],
            "learningPlanMeta": [
              {
                "stanzaIdx":1, "nCycles":6,
                "practiceCharts": [
                  {
                    "level": 0,
                    "nSegments": 29,
                    "practiceSegments": [
                      {
                        "idx":1, "isBlank": true,
                        "sl":1, "sb":1,
                        "el":1, "eb":8
                      },
                      {
                        "idx":2, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":1, "eb":16
                      },
                      {
                        "idx":3, "isBlank": false,
                        "sl":2, "sb":1,
                        "el":2, "eb":8
                      },
                      {
                        "idx":4, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":1, "eb":16
                      },
                      {
                        "idx":5, "isBlank": true,
                        "sl":2, "sb":1,
                        "el":2, "eb":8
                      },
                      {
                        "idx":6, "isBlank": false,
                        "sl":3, "sb":9,
                        "el":3, "eb":16
                      },
                      {
                        "idx":7, "isBlank": false,
                        "sl":4, "sb":1,
                        "el":4, "eb":8
                      },
                      {
                        "idx":8, "isBlank": false,
                        "sl":3, "sb":9,
                        "el":3, "eb":16
                      },
                      {
                        "idx":9, "isBlank": false,
                        "sl":4, "sb":1,
                        "el":4, "eb":8
                      },
                      {
                        "idx":10, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":1, "eb":16
                      },
                      {
                        "idx":11, "isBlank": true,
                        "sl":2, "sb":1,
                        "el":2, "eb":8
                      },
                      {
                        "idx":12, "isBlank": false,
                        "sl":3, "sb":9,
                        "el":3, "eb":16
                      },
                      {
                        "idx":13, "isBlank": false,
                        "sl":7, "sb":1,
                        "el":7, "eb":8
                      }
                    ]
                  },
                  {
                    "level": 1,
                    "nSegments": 7,
                    "practiceSegments": [
                      {
                        "idx":1, "isBlank": true,
                        "sl":1, "sb":1,
                        "el":1, "eb":8
                      },
                      {
                        "idx":2, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":2, "eb":8
                      },
                      {
                        "idx":3, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":2, "eb":8
                      },
                      {
                        "idx":4, "isBlank": false,
                        "sl":3, "sb":9,
                        "el":4, "eb":8
                      },
                      {
                        "idx":5, "isBlank": false,
                        "sl":3, "sb":9,
                        "el":4, "eb":8
                      },
                      {
                        "idx":6, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":2, "eb":8
                      },
                      {
                        "idx":7, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":1, "eb":16
                      }

                    ]
                  }
                  
                ]
              } ,
              {
                "stanzaIdx":2, "nCycles":5,
                "practiceCharts": [
                  {
                    "level": 1,
                    "nSegments": 11,
                    "practiceSegments": [
                      {
                        "idx":1, "isBlank": false,
                        "sl":7, "sb":9,
                        "el":7, "eb":16
                      },
                      {
                        "idx":2, "isBlank": false,
                        "sl":7, "sb":1,
                        "el":7, "eb":8
                      },
                      {
                        "idx":3, "isBlank": false,
                        "sl":7, "sb":9,
                        "el":7, "eb":16
                      },
                      {
                        "idx":4, "isBlank": false,
                        "sl":9, "sb":1,
                        "el":9, "eb":8
                      },
                      {
                        "idx":5, "isBlank": false,
                        "sl":9, "sb":9,
                        "el":9, "eb":16
                      },
                      {
                        "idx":6, "isBlank": false,
                        "sl":9, "sb":1,
                        "el":9, "eb":8
                      },
                      {
                        "idx":7, "isBlank": false,
                        "sl":9, "sb":9,
                        "el":9, "eb":16
                      },
                      {
                        "idx":8, "isBlank": false,
                        "sl":11, "sb":1,
                        "el":11, "eb":8
                      },
                      {
                        "idx":9, "isBlank": false,
                        "sl":11, "sb":1,
                        "el":11, "eb":8
                      },
                      {
                        "idx":10, "isBlank": false,
                        "sl":11, "sb":1,
                        "el":11, "eb":8
                      },
                      {
                        "idx":11, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":1, "eb":16
                      }
                        
                    ]
                    
                  },
                  {
                    "level": 1,
                    "nSegments": 7,
                    "practiceSegments": [
                      {
                        "idx":1, "isBlank": false,
                        "sl":7, "sb":1,
                        "el":7, "eb":16
                      },
                      {
                        "idx":2, "isBlank": false,
                        "sl":7, "sb":1,
                        "el":7, "eb":16
                      },
                      {
                        "idx":3, "isBlank": false,
                        "sl":9, "sb":1,
                        "el":9, "eb":16
                      },
                      {
                        "idx":4, "isBlank": false,
                        "sl":9, "sb":1,
                        "el":9, "eb":16
                      },
                      {
                        "idx":5, "isBlank": false,
                        "sl":11, "sb":1,
                        "el":11, "eb":8
                      },
                      {
                        "idx":6, "isBlank": false,
                        "sl":11, "sb":1,
                        "el":11, "eb":8
                      },
                      {
                        "idx":7, "isBlank": false,
                        "sl":11, "sb":1,
                        "el":11, "eb":8
                      }
                        
                    ]
                  }
                ]
              },
              {
                "stanzaIdx": 3, "nCycles": 2,
                "practiceCharts": [
                  {
                    "level": 0, "nSegments": 5,
                    "practiceSegments": [
                      {
                        "idx":1, "isBlank": false,
                        "sl":2, "sb":1,
                        "el":2, "eb":8
                      },
                      {
                        "idx":2, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":1, "eb":16
                      },
                      {
                        "idx":3, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":1, "eb":16
                      },
                      {
                        "idx":4, "isBlank": false,
                        "sl":1, "sb":1,
                        "el":1, "eb":16
                      },
                      {
                        "idx":5, "isBlank": false,
                        "sl":2, "sb":1,
                        "el":2, "eb":8
                      }

                      
                    ]
                    
                  } ,
                  {
                    "level": 1,
                    "nSegments": 6,
                    "practiceSegments": [
                      {
                        "idx":1, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":1, "eb":16
                      },  
                      {
                        "idx":2, "isBlank": false,
                        "sl":2, "sb":1,
                        "el":2, "eb":8
                      },  
                      {
                        "idx":3, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":1, "eb":16
                      },  
                      {
                        "idx":4, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":1, "eb":16
                      },  
                      {
                        "idx":5, "isBlank": false,
                        "sl":1, "sb":9,
                        "el":1, "eb":16
                      },  
                      {
                        "idx":6, "isBlank": false,
                        "sl":2, "sb":1,
                        "el":2, "eb":8
                      }  
                    ]
                    
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
    $scope.audio = ngAudio.load('/audio/Cheerleader.mp3');
}])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('brown', {
      'default': '900'})
    .warnPalette('grey',{
      'default':'900',"hue-1":"800","hue-2":"600","hue-3":"200"});
});


    