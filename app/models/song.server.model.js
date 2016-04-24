var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var SongSchema = new Schema({	
    title : String,
    lyricist : String,
	language : String,
	lyricsGenre : String,
    imgurl: String,
	baseLyrics : 
	{
        stanzaCount: Number,
        unicodeLanguage: String,
        stanzas: [
		{
		  stanzaNumber: Number,
		  name: String,
		  lines: [
			{lineNumber: Number, text: String, meaning: String}			
		  ]
		}
		
	  ]
	},
	tunes: [
    {
		raaga: String,
		taala: String,
        laya : String,
        genre : String,
        compositionType : String,
		baseTempo:Number,
		baseShruthi: String,
		startMatra: Number,
		tuneComposer: String,
		tuneLyrics: {
            stanzaCount: Number,
            unicodeLanguage: String,
            beatsPerCycle: Number,
            origTempo: Number,
            newTempo: Number,
            practiceLevel: Number,
            nlaghu: Number,
            ndrutha: Number,
            stanzas: [
                {
                  stanzaNumber: Number,
                  name: String,
                  audioMeta: [
                    {
                      cycleIdx : Number,
                      beats : [
                        {
                          idx : Number, 
                          lyric : String,
                          note : String
                        } 
                      ]
                    }
                  ]
                }
            ]
        },
		bgms: [
		  {
			composer: String,
			tracks: [ 
			  { trackNumber: Number, instrument: String }
			],
            url: String
		  }					
		],
        recordings : [
            {
                singer : String,
                raaga : String,
                taala : String,
                lyricist : String,
                tuneCompo : String,
                shruti : String  
            }
        ]
	  }
	],
  learningPlanMeta: [
    {
      stanzaIdx: Number, nCycles: Number,
      practiceCharts: [
        {
          level: Number,
          nSegments: Number,
          practiceSegments: [
            {
              idx: Number, isBlank: Boolean,
              sl: Number, sb: Number,
              el: Number, eb: Number
            }
          ]
        }
      ]
    }
  ]
  });
mongoose.model('Song', SongSchema);