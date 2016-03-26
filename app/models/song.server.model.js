var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var SongSchema = new Schema({	
    title : String,
    lyricist : String,
	language : String,
	lyricsGenre : String,
	baseLyrics : 
	{
        stanzaCount: Number
        ,unicodeLanguage: String
	    ,stanzas: [
		{
		  stanzaNumber: Number,
		  name: String,
		  lines: [
			{lineNumber: Number, text:String}
			
		  ]
		}
		
	  ]
	},
	tunes: [
    {
		tuneGenre: String,
		raaga: String,
		taala: String,
        laya : String,
        genre : String,
		baseTempo:Number,
		baseShruthi: String,
		startMatra: Number,
		tuneComposer: String,
		tuneLyrics: {
		  stanzaCount: Number,
		  unicodeLanguage: String,
		  stanzas: [
			{
			  stanzaNumber: Number,
			  name: String,
			  lines: [
				{lineNumber: Number
				,text:String
				,midiTune: String}
				]
			}
			
		  ]
		},
		bgms: [
		  {
			composer: String,
			tracks: [ 
			  { trackNumber: Number, instrument: String }
		
			]
		  }					
		],
        recordings : [
            {
                singer : String,
                raaga : String,
                taala : String,
                lyricist : String,
                tuneCompo : String ,
                shruti : String  
            }
        ]
	  }
	]
  });
mongoose.model('Song', SongSchema);