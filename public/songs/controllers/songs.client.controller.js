//extra function present
angular.module('songs').controller('SongsController', ['$scope','$routeParams', '$location', 'Authentication', 'Songs','ngAudio',function($scope, $routeParams, $location, Authentication, Songs, ngAudio)
{
    $scope.authentication = Authentication;
    
    $scope.create = function() {
        var song = new Songs($scope.sng);
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
                    baseLyrics : 
                    {
                        stanzaCount: 0,
                        unicodeLanguage: "Sanskrit",
                        stanzas: [
                        ]
                    },
                    tunes: [
                    ],
                  learningPlanMeta: [
                    
                  ]
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
    $scope.addStanza = function(){
        $scope.song.newStanza = true;
        $scope.sng.baseLyrics.stanzaCount += 1;
        $scope.sng.baseLyrics.stanzas.push({
                  stanzaNumber: $scope.sng.baseLyrics.stanzaCount,
                  name: "",
                  lines: [
                  ]
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
            console.log(i);
            $scope.sng.tunes[tuneNo].tuneLyrics.stanzas[stzNo].audioMeta[$scope.sng.tunes[tuneNo].tuneLyrics.stanzas[stzNo].audioMeta.length-1].beats.push(
                {
                  idx : i+1, 
                  lyric : "",
                  note : ""
                }
            );
        }
    };
    
    $scope.addBgm = function(tuneNo){
        $scope.sng.tunes[tuneNo].bgms.push(
          {
            composer: "",
            tracks: [ ]
          }
        );
    };
    
    $scope.addBgmInst = function(tuneNo,bgmNo){
        $scope.sng.tunes[tuneNo].bgms[bgmNo].tracks.push(
            { trackNumber: $scope.sng.tunes[tuneNo].bgms[bgmNo].tracks.length+1, instrument: "" }
        );
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
    
    $scope.change = function() {
          //$location.path('songs/create');
          
        //var fromTrans = document.getElementById("fromTrans"); 
          //var fromStr = fromTrans.value;
          //alert(fromTrans.value.charCodeAt(0));

          var toTrans = document.getElementById("toTrans"); 
          var toStr = toTrans.value;
          //alert(toTrans.value);
          //var l = document.getElementsByClassName("trans");
          var fromS  = pramukhIME.getLanguage();
          var fromStr = fromS.language;
          //alert(fromStr)
          
          
          if(fromStr=="english")
          {
          pramukhIME.addLanguage(PramukhIndic,toStr);
          //alert("hello");
          var list = document.getElementsByClassName("trans");
          
          var str = list[0].innerHTML;
          
          list[0].innerHTML=pramukhIME.convert(str,fromStr,toStr);

          var str = list[1].innerHTML;
          //alert("6");
          list[1].innerHTML=pramukhIME.convert(str,fromStr,toStr);
          //alert("bye!");

          var i;
          for (i = 0; i < list.length; i++) {
              str = list[i].innerHTML;
              list[i].innerHTML=pramukhIME.convert(str,fromStr,toStr);
          }
        }
        else
        { //alert("hi");
          // $location.path('songs/' + response._id);
          //alert("hello");

          var list = document.getElementsByClassName("trans");
          /*pramukhIME.addLanguage(PramukhIndic,"Hindi");
          //pramukhIME.addLanguage(PramukhIndic,"kannada");
          pramukhIME.enable();
          s = document.getElementById("first_name").value;
          s1 = pramukhIME.convert(s,"Hindi","English");
          pramukhIME.disable();
          pramukhIME.addLanguage(PramukhIndic,"kannada");
          document.getElementById("first_name").value= pramukhIME.convert(s1,"English","kannada");
          pramukhIME.disable();
          pramukhIME.addLanguage(PramukhIndic,"Hindi");
          pramukhIME.enable();
          */
          var i;
          for (i = 0; i < list.length; i++) {
              pramukhIME.addLanguage(PramukhIndic,fromStr);
              pramukhIME.enable();
              str = list[i].innerHTML;
              str = pramukhIME.convert(str,fromStr,"English");
              pramukhIME.disable();
          //    alert(str);
              pramukhIME.addLanguage(PramukhIndic,toStr);
              list[i].innerHTML=pramukhIME.convert(str,"English",toStr);
              //pramukhIME.disable();
          }

        }  
    };
                    
    
    $scope.imgpath = "/img/purandaradaasu.jpe";
    $scope.hoversnd = "/audio/button-3.mp3";
    $scope.clicksnd = "/audio/button-4.mp3";
    $scope.audio = ngAudio.load('http://dl.enjoypur.vc/upload_file/5570/6757/PagalWorld%20-%20Bollywood%20Mp3%20Songs%202016/Sanam%20Re%20(2016)%20Mp3%20Songs/01%20Sanam%20Re%20%28Title%20Song%29%20Arijit%20Singh%20190Kbps.mp3');
}])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('brown', {
      'default': '900'})
    .warnPalette('grey',{
      'default':'900',"hue-1":"800","hue-2":"600","hue-3":"200"});
});


    