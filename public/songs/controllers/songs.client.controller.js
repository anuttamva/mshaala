//extra function present
angular.module('songs').controller('SongsController', ['$scope','$routeParams', '$location', 'Authentication', 'Songs','ngAudio',function($scope, $routeParams, $location, Authentication, Songs, ngAudio)
{
    $scope.authentication = Authentication;
    
    $scope.create = function() {
        var song = new Songs($scope.sng);
//        console.log(song.title);
        song.$save(function(response) {
            $location.path('songs/' + response._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };
    
    $scope.sng = {	
                    title : this.title,
                    lyricist : this.lyricist,
                    language : this.language,
                    lyricsGenre : this.lyricsGenre,
                    imgurl : "/img/" + this.title,
                    baseLyrics : 
                    {
                        stanzaCount: 0,
                        unicodeLanguage: "Sanskrit",
                        stanzas: [
                        ]
                    },
                    tunes: [ ],
                  learningPlanMeta: [
                    
                  ]
                };

        
    $scope.find = function() {
        $scope.songs = Songs.query();
    };
    $scope.findOne = function() {
        /*$scope.song = */Songs.get({
            songId: $routeParams.songId
        }).$promise.then(function(songaud){
            $scope.song = songaud;
//            console.log("in only song : ",song);
//            console.log("in only songaud : ",songaud);
//            console.log("in $scope.song : ",$scope.song.tunes[0].bgms[0]);
            $scope.audio = ngAudio.load($scope.song.tunes[0].bgms[0].url);
    //        $scope.audio=ngAudio.load("/audio/S Janaki - Sri gananatha.mp3");
//            console.log("scope audio ",$scope.audio);
        });
    };



    $scope.getImageClass = function(){
        return {compoimg: true};
    };
    $scope.addStanza = function(){
        $scope.song.newStanza = true;
        $scope.sng.baseLyrics.stanzaCount += 1;
        $scope.sng.baseLyrics.stanzas.push({
                  stanzaNumber: $scope.sng.baseLyrics.stanzaCount,
                  name: "",
                  lines: []
                });
    };
    $scope.addLine = function(stzNo){
        $scope.song.newLine = true;
        $scope.sng.baseLyrics.stanzas[stzNo].lines.push(
            {lineNumber: $scope.sng.baseLyrics.stanzas[stzNo].lines.length + 1 , text:"", meaning:""}
        );
    };
    
    
    $scope.addTune = function(){
        $scope.sng.tunes.push(
            {
                tuneComposer: "",
                genre : "",
                compositionType : "",
                raaga: "",
                taala: "",
                laya : "",
                baseTempo:null,
                baseShruthi: "",
                startMatra: null,
                tuneLyrics: {
                    stanzaCount: null,
                    unicodeLanguage: "",
                    beatsPerCycle: null,
                    origTempo: null,
                    newTempo: null,
                    practiceLevel: 0,
                    nlaghu:null,
                    ndrutha: null,
                    stanzas: [ ]
                },
                bgms: [					
                ],
                recordings : [ ]
              }
        )   
    };
    
    $scope.addTuneStanza = function(tuneNo){
        $scope.sng.tunes[tuneNo].tuneLyrics.beatsPerCycle = $scope.sng.tunes[tuneNo].tuneLyrics.nlaghu + $scope.sng.tunes[tuneNo].tuneLyrics.ndrutha;
        $scope.song.newTune.newStanza = true;
        $scope.sng.tunes[tuneNo].tuneLyrics.stanzas.push(
            {
              stanzaNumber: $scope.sng.tunes[tuneNo].tuneLyrics.stanzas.length + 1,
              name: "",
              audioMeta: [
                
              ]
            }
        );
    };
    
    $scope.addTuneLine = function(tuneNo, stzNo){
        $scope.song.newTune.newLine = true;
        $scope.sng.tunes[tuneNo].tuneLyrics.stanzas[stzNo].audioMeta.push(
            {
              cycleIdx : 1,
              beats : [  
              ]
            }
        );
        for(i=0;i<$scope.sng.tunes[tuneNo].tuneLyrics.beatsPerCycle;i++){
//            console.log(i);
            $scope.sng.tunes[tuneNo].tuneLyrics.stanzas[stzNo].audioMeta[$scope.sng.tunes[tuneNo].tuneLyrics.stanzas[stzNo].audioMeta.length-1].beats.push(
                {
                  idx : i+1, 
                  lyric : "",
                  note : ""
                }
            );
        }
    };
    
//    $scope.audio;// = ngAudio.load($scope.s);
    $scope.addBgm = function(tuneNo){
        $scope.sng.tunes[tuneNo].bgms.push(
          {
            composer: "",
            tracks: [ ],
            url : ""
          }
        );
        
    };
    
    $scope.addBgmInst = function(tuneNo,bgmNo){
        $scope.sng.tunes[tuneNo].bgms[bgmNo].tracks.push(
            { trackNumber: $scope.sng.tunes[tuneNo].bgms[bgmNo].tracks.length+1, instrument: "" }
            
        );
//      ;
    };
    $scope.addRec = function(tuneNo){
        $scope.song.newTune.newRec = true;
        $scope.sng.tunes[tuneNo].recordings.push(
            {
                singer : "",
                raaga : "",
                taala : "",
                lyricist : "",
                tuneCompo : "",
                shruti : ""  
            }
        );
    };
    
    
    $scope.addLearningPlan = function(){
        $scope.song.learnPlan = true;
        $scope.song.plan = false;
        for(i=0;i<$scope.sng.baseLyrics.stanzas.length;i++){
            $scope.sng.learningPlanMeta.push(
                {
                    stanzaIdx: i+1, nCycles: null,
                    practiceCharts: [ ]
                }
            );
        }
        console.log("dfdf");
    }
    
    $scope.addNewLevel = function(stnzNo){
        $scope.song.newLevel = true;
//        $scope.sng.learningPlanMeta[stnzNo].stanzaIdx = stnzNo;
//        $scope.sng.learningPlanMeta[stnzNo].nCycles = $scope.sng.tunes[tuneNo].tuneLyrics.stanzas[stzNo].audioMeta.length;
        $scope.sng.learningPlanMeta[stnzNo].practiceCharts.push(

                {
                  level: null,
                  nSegments: null,
                  practiceSegments: [ ]
                }
        );
        console.log($scope.sng.learningPlanMeta[stnzNo].practiceCharts);
    };
    
    $scope.addSeg = function(stnzNo,level){
        $scope.song.learnPlan.seg = true;
//        if($scope.sng.learningPlanMeta[stnzNo].practiceCharts[level].nSegments != 0)
//            $scope.song.seg = false;
        $scope.sng.learningPlanMeta[stnzNo].practiceCharts[level].practiceSegments.length = 0;
        
        for(i=0;i<$scope.sng.learningPlanMeta[stnzNo].practiceCharts[level].nSegments;i++){
            $scope.sng.learningPlanMeta[stnzNo].practiceCharts[level].practiceSegments.push(
                {
                  idx: i+1, isBlank: false,
                  sl: null, sb: null,
                  el: null, eb: null
                }
            );
        }
        
    };
    
//    $scope.validate = function(){
//        levels={};
//        for (i=0;i<$scope.sng.learningPlanMeta.length;i++){
//             a=[]
//             for (j=0;j<$scope.sng.learningPlanMeta[i].practiceCharts.length;j++){
//                    a.push($scope.sng.learningPlanMeta[i].practiceCharts.level);
//        }
//        levels[$scope.sng.learningPlanMeta[i].stanzaIdx]=a;
//            
//             })
//        for(i=0;i<a.length-1;i++)
//            {
//                if(a[i]!=a[i+1])
//                    {
//                        return false;
//                    }
//            }
//        return true;
//        
//    };
    
//    $scope.upload = function(){
//          
//    };
    
    $scope.imgpath = "/img/purandaradaasu.jpe";
    $scope.hoversnd = "/audio/button-3.mp3";
    $scope.clicksnd = "/audio/button-4.mp3";
//    $scope.sng.tunes[0].bgms[0].url
}])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('brown', {
      'default': '900'})
    .warnPalette('grey',{
      'default':'900',"hue-1":"800","hue-2":"600","hue-3":"200"});
});


    