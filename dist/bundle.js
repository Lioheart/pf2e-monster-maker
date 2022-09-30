(()=>{"use strict";const e=["-1","0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];var t;!function(e){e.name="PF2EMONSTERMAKER.name",e.level="PF2EMONSTERMAKER.level",e.str="PF2EMONSTERMAKER.str",e.dex="PF2EMONSTERMAKER.dex",e.con="PF2EMONSTERMAKER.con",e.int="PF2EMONSTERMAKER.int",e.wis="PF2EMONSTERMAKER.wis",e.cha="PF2EMONSTERMAKER.cha",e.hp="PF2EMONSTERMAKER.hp",e.per="PF2EMONSTERMAKER.per",e.ac="PF2EMONSTERMAKER.ac",e.fort="PF2EMONSTERMAKER.fort",e.ref="PF2EMONSTERMAKER.ref",e.wil="PF2EMONSTERMAKER.wil",e.strikeBonus="PF2EMONSTERMAKER.strikeBonus",e.strikeDamage="PF2EMONSTERMAKER.strikeDamage",e.spellcasting="PF2EMONSTERMAKER.spellcasting",e.acrobatics="PF2EMONSTERMAKER.acrobatics",e.arcana="PF2EMONSTERMAKER.arcana",e.athletics="PF2EMONSTERMAKER.athletics",e.crafting="PF2EMONSTERMAKER.crafting",e.deception="PF2EMONSTERMAKER.deception",e.diplomacy="PF2EMONSTERMAKER.diplomacy",e.intimidation="PF2EMONSTERMAKER.intimidation",e.medicine="PF2EMONSTERMAKER.medicine",e.nature="PF2EMONSTERMAKER.nature",e.occultism="PF2EMONSTERMAKER.occultism",e.performance="PF2EMONSTERMAKER.performance",e.religion="PF2EMONSTERMAKER.religion",e.society="PF2EMONSTERMAKER.society",e.stealth="PF2EMONSTERMAKER.stealth",e.survival="PF2EMONSTERMAKER.survival",e.thievery="PF2EMONSTERMAKER.thievery"}(t||(t={}));const r=[t.acrobatics,t.arcana,t.athletics,t.crafting,t.deception,t.diplomacy,t.intimidation,t.medicine,t.nature,t.occultism,t.performance,t.religion,t.society,t.stealth,t.survival,t.thievery],o={[t.str]:"system.abilities.str.mod",[t.dex]:"system.abilities.dex.mod",[t.con]:"system.abilities.con.mod",[t.int]:"system.abilities.int.mod",[t.wis]:"system.abilities.wis.mod",[t.cha]:"system.abilities.cha.mod",[t.hp]:"system.attributes.hp.max",[t.per]:"system.attributes.perception.value",[t.ac]:"system.attributes.ac.value",[t.fort]:"system.saves.fortitude.value",[t.ref]:"system.saves.reflex.value",[t.wil]:"system.saves.will.value"};var i;!function(e){e.extreme="PF2EMONSTERMAKER.extreme",e.high="PF2EMONSTERMAKER.high",e.moderate="PF2EMONSTERMAKER.moderate",e.low="PF2EMONSTERMAKER.low",e.terrible="PF2EMONSTERMAKER.terrible",e.none="PF2EMONSTERMAKER.none"}(i||(i={}));const a={"PF2EMONSTERMAKER.brute":{[t.per]:i.low,[t.str]:i.extreme,[t.con]:i.high,[t.dex]:i.low,[t.int]:i.low,[t.wis]:i.low,[t.cha]:i.low,[t.ac]:i.low,[t.fort]:i.high,[t.ref]:i.low,[t.wil]:i.low,[t.hp]:i.high,[t.strikeBonus]:i.moderate,[t.strikeDamage]:i.extreme},"PF2EMONSTERMAKER.magicalStriker":{[t.strikeBonus]:i.high,[t.strikeDamage]:i.high,[t.spellcasting]:i.high},"PF2EMONSTERMAKER.skirmisher":{[t.dex]:i.high,[t.fort]:i.low,[t.ref]:i.high},"PF2EMONSTERMAKER.sniper":{[t.per]:i.high,[t.dex]:i.high,[t.fort]:i.low,[t.ref]:i.high,[t.hp]:i.low,[t.strikeBonus]:i.high,[t.strikeDamage]:i.high},"PF2EMONSTERMAKER.soldier":{[t.str]:i.high,[t.ac]:i.high,[t.fort]:i.high,[t.strikeBonus]:i.high,[t.strikeDamage]:i.high},"PF2EMONSTERMAKER.spellcaster":{[t.int]:i.high,[t.wis]:i.high,[t.cha]:i.high,[t.fort]:i.low,[t.wil]:i.high,[t.hp]:i.low,[t.strikeBonus]:i.low,[t.strikeDamage]:i.low,[t.spellcasting]:i.high}},h=[{name:"PF2EMONSTERMAKER.abilityScores",availableOptions:[i.terrible,i.low,i.moderate,i.high,i.extreme],defaultValue:i.moderate,statisticEntries:[{name:t.str},{name:t.dex},{name:t.con},{name:t.int},{name:t.wis},{name:t.cha}]},{name:"Defence + Perception",availableOptions:[i.terrible,i.low,i.moderate,i.high,i.extreme],defaultValue:i.moderate,statisticEntries:[{name:t.hp,availableOptions:[i.low,i.moderate,i.high]},{name:t.per},{name:t.ac,availableOptions:[i.low,i.moderate,i.high,i.extreme]},{name:t.fort},{name:t.ref},{name:t.wil}]},{name:"PF2EMONSTERMAKER.strikes",availableOptions:[i.low,i.moderate,i.high,i.extreme],defaultValue:i.moderate,statisticEntries:[{name:t.strikeBonus},{name:t.strikeDamage}]},{name:t.spellcasting,defaultValue:i.none,availableOptions:[i.none,i.moderate,i.high,i.extreme],statisticEntries:[{name:t.spellcasting}]},{name:"PF2EMONSTERMAKER.skills",defaultValue:i.none,availableOptions:[i.none,i.low,i.moderate,i.high,i.extreme],statisticEntries:[{name:t.acrobatics},{name:t.arcana},{name:t.athletics},{name:t.crafting},{name:t.deception},{name:t.diplomacy},{name:t.intimidation},{name:t.medicine},{name:t.nature},{name:t.occultism},{name:t.performance},{name:t.religion},{name:t.society},{name:t.stealth},{name:t.survival},{name:t.thievery}]}],m={abilityScores:{"-1":{[i.extreme]:"4",[i.high]:"3",[i.moderate]:"2",[i.low]:"0"},0:{[i.extreme]:"4",[i.high]:"3",[i.moderate]:"2",[i.low]:"0"},1:{[i.extreme]:"5",[i.high]:"4",[i.moderate]:"3",[i.low]:"1"},2:{[i.extreme]:"5",[i.high]:"4",[i.moderate]:"3",[i.low]:"1"},3:{[i.extreme]:"5",[i.high]:"4",[i.moderate]:"3",[i.low]:"1"},4:{[i.extreme]:"6",[i.high]:"5",[i.moderate]:"3",[i.low]:"2"},5:{[i.extreme]:"6",[i.high]:"5",[i.moderate]:"4",[i.low]:"2"},6:{[i.extreme]:"7",[i.high]:"5",[i.moderate]:"4",[i.low]:"2"},7:{[i.extreme]:"7",[i.high]:"6",[i.moderate]:"4",[i.low]:"2"},8:{[i.extreme]:"7",[i.high]:"6",[i.moderate]:"4",[i.low]:"3"},9:{[i.extreme]:"7",[i.high]:"6",[i.moderate]:"4",[i.low]:"3"},10:{[i.extreme]:"8",[i.high]:"7",[i.moderate]:"5",[i.low]:"3"},11:{[i.extreme]:"8",[i.high]:"7",[i.moderate]:"5",[i.low]:"3"},12:{[i.extreme]:"8",[i.high]:"7",[i.moderate]:"5",[i.low]:"4"},13:{[i.extreme]:"9",[i.high]:"8",[i.moderate]:"5",[i.low]:"4"},14:{[i.extreme]:"9",[i.high]:"8",[i.moderate]:"5",[i.low]:"4"},15:{[i.extreme]:"9",[i.high]:"8",[i.moderate]:"6",[i.low]:"4"},16:{[i.extreme]:"10",[i.high]:"9",[i.moderate]:"6",[i.low]:"5"},17:{[i.extreme]:"10",[i.high]:"9",[i.moderate]:"6",[i.low]:"4"},18:{[i.extreme]:"10",[i.high]:"9",[i.moderate]:"6",[i.low]:"5"},19:{[i.extreme]:"11",[i.high]:"10",[i.moderate]:"6",[i.low]:"5"},20:{[i.extreme]:"11",[i.high]:"10",[i.moderate]:"7",[i.low]:"6"},21:{[i.extreme]:"11",[i.high]:"10",[i.moderate]:"7",[i.low]:"6"},22:{[i.extreme]:"11",[i.high]:"10",[i.moderate]:"8",[i.low]:"6"},23:{[i.extreme]:"11",[i.high]:"10",[i.moderate]:"8",[i.low]:"6"},24:{[i.extreme]:"13",[i.high]:"12",[i.moderate]:"9",[i.low]:"7"}},hitPoints:{"-1":{[i.high]:"9",[i.moderate]:"7",[i.low]:"5"},0:{[i.high]:"18",[i.moderate]:"15",[i.low]:"12"},1:{[i.high]:"25",[i.moderate]:"20",[i.low]:"15"},2:{[i.high]:"38",[i.moderate]:"30",[i.low]:"23"},3:{[i.high]:"56",[i.moderate]:"45",[i.low]:"34"},4:{[i.high]:"75",[i.moderate]:"60",[i.low]:"45"},5:{[i.high]:"94",[i.moderate]:"75",[i.low]:"56"},6:{[i.high]:"119",[i.moderate]:"95",[i.low]:"71"},7:{[i.high]:"144",[i.moderate]:"115",[i.low]:"86"},8:{[i.high]:"169",[i.moderate]:"135",[i.low]:"101"},9:{[i.high]:"194",[i.moderate]:"155",[i.low]:"116"},10:{[i.high]:"219",[i.moderate]:"175",[i.low]:"131"},11:{[i.high]:"244",[i.moderate]:"195",[i.low]:"146"},12:{[i.high]:"269",[i.moderate]:"215",[i.low]:"161"},13:{[i.high]:"294",[i.moderate]:"235",[i.low]:"176"},14:{[i.high]:"319",[i.moderate]:"255",[i.low]:"191"},15:{[i.high]:"344",[i.moderate]:"275",[i.low]:"206"},16:{[i.high]:"369",[i.moderate]:"295",[i.low]:"221"},17:{[i.high]:"394",[i.moderate]:"315",[i.low]:"236"},18:{[i.high]:"419",[i.moderate]:"335",[i.low]:"251"},19:{[i.high]:"444",[i.moderate]:"355",[i.low]:"266"},20:{[i.high]:"469",[i.moderate]:"375",[i.low]:"281"},21:{[i.high]:"500",[i.moderate]:"400",[i.low]:"300"},22:{[i.high]:"538",[i.moderate]:"430",[i.low]:"323"},23:{[i.high]:"575",[i.moderate]:"460",[i.low]:"345"},24:{[i.high]:"625",[i.moderate]:"500",[i.low]:"375"}},perceptionSaves:{"-1":{[i.extreme]:"9",[i.high]:"8",[i.moderate]:"5",[i.low]:"2",[i.terrible]:"0"},0:{[i.extreme]:"10",[i.high]:"9",[i.moderate]:"6",[i.low]:"3",[i.terrible]:"1"},1:{[i.extreme]:"11",[i.high]:"10",[i.moderate]:"7",[i.low]:"4",[i.terrible]:"2"},2:{[i.extreme]:"12",[i.high]:"11",[i.moderate]:"8",[i.low]:"5",[i.terrible]:"3"},3:{[i.extreme]:"14",[i.high]:"12",[i.moderate]:"9",[i.low]:"6",[i.terrible]:"4"},4:{[i.extreme]:"15",[i.high]:"14",[i.moderate]:"11",[i.low]:"8",[i.terrible]:"6"},5:{[i.extreme]:"17",[i.high]:"15",[i.moderate]:"12",[i.low]:"9",[i.terrible]:"7"},6:{[i.extreme]:"18",[i.high]:"17",[i.moderate]:"14",[i.low]:"11",[i.terrible]:"8"},7:{[i.extreme]:"20",[i.high]:"18",[i.moderate]:"15",[i.low]:"12",[i.terrible]:"10"},8:{[i.extreme]:"21",[i.high]:"19",[i.moderate]:"16",[i.low]:"13",[i.terrible]:"11"},9:{[i.extreme]:"23",[i.high]:"21",[i.moderate]:"18",[i.low]:"15",[i.terrible]:"12"},10:{[i.extreme]:"24",[i.high]:"22",[i.moderate]:"19",[i.low]:"16",[i.terrible]:"14"},11:{[i.extreme]:"26",[i.high]:"24",[i.moderate]:"21",[i.low]:"18",[i.terrible]:"15"},12:{[i.extreme]:"27",[i.high]:"25",[i.moderate]:"22",[i.low]:"19",[i.terrible]:"16"},13:{[i.extreme]:"29",[i.high]:"26",[i.moderate]:"23",[i.low]:"20",[i.terrible]:"18"},14:{[i.extreme]:"30",[i.high]:"28",[i.moderate]:"25",[i.low]:"22",[i.terrible]:"19"},15:{[i.extreme]:"32",[i.high]:"29",[i.moderate]:"26",[i.low]:"23",[i.terrible]:"20"},16:{[i.extreme]:"33",[i.high]:"30",[i.moderate]:"28",[i.low]:"25",[i.terrible]:"22"},17:{[i.extreme]:"35",[i.high]:"32",[i.moderate]:"29",[i.low]:"26",[i.terrible]:"23"},18:{[i.extreme]:"36",[i.high]:"33",[i.moderate]:"30",[i.low]:"27",[i.terrible]:"24"},19:{[i.extreme]:"38",[i.high]:"35",[i.moderate]:"32",[i.low]:"29",[i.terrible]:"26"},20:{[i.extreme]:"39",[i.high]:"36",[i.moderate]:"33",[i.low]:"30",[i.terrible]:"27"},21:{[i.extreme]:"41",[i.high]:"38",[i.moderate]:"35",[i.low]:"32",[i.terrible]:"28"},22:{[i.extreme]:"43",[i.high]:"39",[i.moderate]:"36",[i.low]:"33",[i.terrible]:"30"},23:{[i.extreme]:"44",[i.high]:"40",[i.moderate]:"37",[i.low]:"34",[i.terrible]:"31"},24:{[i.extreme]:"46",[i.high]:"42",[i.moderate]:"38",[i.low]:"36",[i.terrible]:"32"}},armorClass:{"-1":{[i.extreme]:"18",[i.high]:"15",[i.moderate]:"14",[i.low]:"12"},0:{[i.extreme]:"19",[i.high]:"16",[i.moderate]:"15",[i.low]:"13"},1:{[i.extreme]:"19",[i.high]:"16",[i.moderate]:"15",[i.low]:"13"},2:{[i.extreme]:"21",[i.high]:"18",[i.moderate]:"17",[i.low]:"15"},3:{[i.extreme]:"22",[i.high]:"19",[i.moderate]:"18",[i.low]:"16"},4:{[i.extreme]:"24",[i.high]:"21",[i.moderate]:"20",[i.low]:"18"},5:{[i.extreme]:"25",[i.high]:"22",[i.moderate]:"21",[i.low]:"19"},6:{[i.extreme]:"27",[i.high]:"24",[i.moderate]:"23",[i.low]:"21"},7:{[i.extreme]:"28",[i.high]:"25",[i.moderate]:"24",[i.low]:"22"},8:{[i.extreme]:"30",[i.high]:"27",[i.moderate]:"26",[i.low]:"24"},9:{[i.extreme]:"31",[i.high]:"28",[i.moderate]:"27",[i.low]:"25"},10:{[i.extreme]:"33",[i.high]:"30",[i.moderate]:"29",[i.low]:"27"},11:{[i.extreme]:"34",[i.high]:"31",[i.moderate]:"30",[i.low]:"28"},12:{[i.extreme]:"36",[i.high]:"33",[i.moderate]:"32",[i.low]:"30"},13:{[i.extreme]:"37",[i.high]:"34",[i.moderate]:"33",[i.low]:"31"},14:{[i.extreme]:"39",[i.high]:"36",[i.moderate]:"35",[i.low]:"33"},15:{[i.extreme]:"40",[i.high]:"37",[i.moderate]:"36",[i.low]:"34"},16:{[i.extreme]:"42",[i.high]:"39",[i.moderate]:"38",[i.low]:"36"},17:{[i.extreme]:"43",[i.high]:"40",[i.moderate]:"39",[i.low]:"37"},18:{[i.extreme]:"45",[i.high]:"42",[i.moderate]:"41",[i.low]:"39"},19:{[i.extreme]:"46",[i.high]:"43",[i.moderate]:"42",[i.low]:"40"},20:{[i.extreme]:"48",[i.high]:"45",[i.moderate]:"44",[i.low]:"42"},21:{[i.extreme]:"49",[i.high]:"46",[i.moderate]:"45",[i.low]:"43"},22:{[i.extreme]:"51",[i.high]:"48",[i.moderate]:"47",[i.low]:"45"},23:{[i.extreme]:"52",[i.high]:"49",[i.moderate]:"48",[i.low]:"46"},24:{[i.extreme]:"54",[i.high]:"51",[i.moderate]:"50",[i.low]:"48"}},strikeBonus:{"-1":{[i.extreme]:"10",[i.high]:"8",[i.moderate]:"6",[i.low]:"4"},0:{[i.extreme]:"10",[i.high]:"8",[i.moderate]:"6",[i.low]:"4"},1:{[i.extreme]:"11",[i.high]:"9",[i.moderate]:"7",[i.low]:"5"},2:{[i.extreme]:"13",[i.high]:"11",[i.moderate]:"9",[i.low]:"7"},3:{[i.extreme]:"14",[i.high]:"12",[i.moderate]:"10",[i.low]:"8"},4:{[i.extreme]:"16",[i.high]:"14",[i.moderate]:"12",[i.low]:"9"},5:{[i.extreme]:"17",[i.high]:"15",[i.moderate]:"13",[i.low]:"11"},6:{[i.extreme]:"19",[i.high]:"17",[i.moderate]:"15",[i.low]:"12"},7:{[i.extreme]:"20",[i.high]:"18",[i.moderate]:"16",[i.low]:"13"},8:{[i.extreme]:"22",[i.high]:"20",[i.moderate]:"18",[i.low]:"15"},9:{[i.extreme]:"23",[i.high]:"21",[i.moderate]:"19",[i.low]:"16"},10:{[i.extreme]:"25",[i.high]:"23",[i.moderate]:"21",[i.low]:"17"},11:{[i.extreme]:"27",[i.high]:"24",[i.moderate]:"22",[i.low]:"19"},12:{[i.extreme]:"28",[i.high]:"26",[i.moderate]:"24",[i.low]:"20"},13:{[i.extreme]:"29",[i.high]:"27",[i.moderate]:"25",[i.low]:"21"},14:{[i.extreme]:"31",[i.high]:"29",[i.moderate]:"27",[i.low]:"23"},15:{[i.extreme]:"32",[i.high]:"30",[i.moderate]:"28",[i.low]:"24"},16:{[i.extreme]:"34",[i.high]:"32",[i.moderate]:"30",[i.low]:"25"},17:{[i.extreme]:"35",[i.high]:"33",[i.moderate]:"31",[i.low]:"27"},18:{[i.extreme]:"37",[i.high]:"35",[i.moderate]:"33",[i.low]:"28"},19:{[i.extreme]:"38",[i.high]:"36",[i.moderate]:"34",[i.low]:"29"},20:{[i.extreme]:"40",[i.high]:"38",[i.moderate]:"36",[i.low]:"31"},21:{[i.extreme]:"41",[i.high]:"39",[i.moderate]:"37",[i.low]:"32"},22:{[i.extreme]:"43",[i.high]:"41",[i.moderate]:"39",[i.low]:"33"},23:{[i.extreme]:"44",[i.high]:"42",[i.moderate]:"40",[i.low]:"35"},24:{[i.extreme]:"46",[i.high]:"44",[i.moderate]:"42",[i.low]:"36"}},strikeDamage:{"-1":{[i.extreme]:"1d6+1",[i.high]:"1d4+1",[i.moderate]:"1d4",[i.low]:"1d4"},0:{[i.extreme]:"1d6+3",[i.high]:"1d6+2",[i.moderate]:"1d4+2",[i.low]:"1d4+1"},1:{[i.extreme]:"1d8+4",[i.high]:"1d6+3",[i.moderate]:"1d6+2",[i.low]:"1d4+2"},2:{[i.extreme]:"1d12+4",[i.high]:"1d10+4",[i.moderate]:"1d8+4",[i.low]:"1d6+3"},3:{[i.extreme]:"1d12+8",[i.high]:"1d10+6",[i.moderate]:"1d8+6",[i.low]:"1d6+5"},4:{[i.extreme]:"2d10+7",[i.high]:"2d8+5",[i.moderate]:"2d6+5",[i.low]:"2d4+4"},5:{[i.extreme]:"2d12+7",[i.high]:"2d8+7",[i.moderate]:"2d6+6",[i.low]:"2d4+6"},6:{[i.extreme]:"2d12+10",[i.high]:"2d8+9",[i.moderate]:"2d6+8",[i.low]:"2d4+7"},7:{[i.extreme]:"2d12+12",[i.high]:"2d10+9",[i.moderate]:"2d8+8",[i.low]:"2d6+6"},8:{[i.extreme]:"2d12+15",[i.high]:"2d10+11",[i.moderate]:"2d8+9",[i.low]:"2d6+8"},9:{[i.extreme]:"2d12+17",[i.high]:"2d10+13",[i.moderate]:"2d8+11",[i.low]:"2d6+9"},10:{[i.extreme]:"2d12+20",[i.high]:"2d12+13",[i.moderate]:"2d10+11",[i.low]:"2d6+10"},11:{[i.extreme]:"2d12+22",[i.high]:"2d12+15",[i.moderate]:"2d10+12",[i.low]:"2d8+10"},12:{[i.extreme]:"3d12+19",[i.high]:"3d10+14",[i.moderate]:"3d8+12",[i.low]:"3d6+10"},13:{[i.extreme]:"3d12+21",[i.high]:"3d10+16",[i.moderate]:"3d8+14",[i.low]:"3d6+11"},14:{[i.extreme]:"3d12+24",[i.high]:"3d10+18",[i.moderate]:"3d8+15",[i.low]:"3d6+13"},15:{[i.extreme]:"3d12+26",[i.high]:"3d12+17",[i.moderate]:"3d10+14",[i.low]:"3d6+14"},16:{[i.extreme]:"3d12+29",[i.high]:"3d12+18",[i.moderate]:"3d10+15",[i.low]:"3d6+15"},17:{[i.extreme]:"3d12+31",[i.high]:"3d12+19",[i.moderate]:"3d10+16",[i.low]:"3d6+16"},18:{[i.extreme]:"3d12+34",[i.high]:"3d12+20",[i.moderate]:"3d10+17",[i.low]:"3d6+17"},19:{[i.extreme]:"4d12+29",[i.high]:"4d10+20",[i.moderate]:"4d8+17",[i.low]:"4d6+14"},20:{[i.extreme]:"4d12+32",[i.high]:"4d10+22",[i.moderate]:"4d8+19",[i.low]:"4d6+15"},21:{[i.extreme]:"4d12+34",[i.high]:"4d10+24",[i.moderate]:"4d8+20",[i.low]:"4d6+17"},22:{[i.extreme]:"4d12+37",[i.high]:"4d10+26",[i.moderate]:"4d8+22",[i.low]:"4d6+18"},23:{[i.extreme]:"4d12+39",[i.high]:"4d12+24",[i.moderate]:"4d10+20",[i.low]:"4d6+19"},24:{[i.extreme]:"4d12+42",[i.high]:"4d12+26",[i.moderate]:"4d10+22",[i.low]:"4d6+21"}},spellcasting:{"-1":{[i.extreme]:"11",[i.high]:"8",[i.moderate]:"5"},0:{[i.extreme]:"11",[i.high]:"8",[i.moderate]:"5"},1:{[i.extreme]:"12",[i.high]:"9",[i.moderate]:"6"},2:{[i.extreme]:"14",[i.high]:"10",[i.moderate]:"7"},3:{[i.extreme]:"15",[i.high]:"12",[i.moderate]:"9"},4:{[i.extreme]:"17",[i.high]:"13",[i.moderate]:"10"},5:{[i.extreme]:"18",[i.high]:"14",[i.moderate]:"11"},6:{[i.extreme]:"19",[i.high]:"16",[i.moderate]:"13"},7:{[i.extreme]:"21",[i.high]:"17",[i.moderate]:"14"},8:{[i.extreme]:"22",[i.high]:"18",[i.moderate]:"15"},9:{[i.extreme]:"24",[i.high]:"20",[i.moderate]:"17"},10:{[i.extreme]:"25",[i.high]:"21",[i.moderate]:"18"},11:{[i.extreme]:"26",[i.high]:"22",[i.moderate]:"19"},12:{[i.extreme]:"28",[i.high]:"24",[i.moderate]:"21"},13:{[i.extreme]:"29",[i.high]:"25",[i.moderate]:"22"},14:{[i.extreme]:"31",[i.high]:"26",[i.moderate]:"23"},15:{[i.extreme]:"32",[i.high]:"28",[i.moderate]:"25"},16:{[i.extreme]:"33",[i.high]:"29",[i.moderate]:"26"},17:{[i.extreme]:"35",[i.high]:"30",[i.moderate]:"27"},18:{[i.extreme]:"36",[i.high]:"32",[i.moderate]:"29"},19:{[i.extreme]:"38",[i.high]:"33",[i.moderate]:"30"},20:{[i.extreme]:"39",[i.high]:"34",[i.moderate]:"31"},21:{[i.extreme]:"40",[i.high]:"36",[i.moderate]:"33"},22:{[i.extreme]:"42",[i.high]:"37",[i.moderate]:"34"},23:{[i.extreme]:"43",[i.high]:"38",[i.moderate]:"35"},24:{[i.extreme]:"44",[i.high]:"40",[i.moderate]:"37"}},skills:{"-1":{[i.extreme]:"8",[i.high]:"5",[i.moderate]:"4",[i.low]:"2"},0:{[i.extreme]:"9",[i.high]:"6",[i.moderate]:"5",[i.low]:"3"},1:{[i.extreme]:"10",[i.high]:"7",[i.moderate]:"6",[i.low]:"4"},2:{[i.extreme]:"11",[i.high]:"8",[i.moderate]:"7",[i.low]:"5"},3:{[i.extreme]:"13",[i.high]:"10",[i.moderate]:"9",[i.low]:"6"},4:{[i.extreme]:"15",[i.high]:"12",[i.moderate]:"10",[i.low]:"8"},5:{[i.extreme]:"16",[i.high]:"13",[i.moderate]:"12",[i.low]:"9"},6:{[i.extreme]:"18",[i.high]:"15",[i.moderate]:"13",[i.low]:"10"},7:{[i.extreme]:"20",[i.high]:"17",[i.moderate]:"15",[i.low]:"12"},8:{[i.extreme]:"21",[i.high]:"18",[i.moderate]:"16",[i.low]:"13"},9:{[i.extreme]:"23",[i.high]:"20",[i.moderate]:"18",[i.low]:"14"},10:{[i.extreme]:"25",[i.high]:"22",[i.moderate]:"19",[i.low]:"16"},11:{[i.extreme]:"26",[i.high]:"23",[i.moderate]:"21",[i.low]:"18"},12:{[i.extreme]:"28",[i.high]:"25",[i.moderate]:"22",[i.low]:"19"},13:{[i.extreme]:"30",[i.high]:"27",[i.moderate]:"24",[i.low]:"21"},14:{[i.extreme]:"31",[i.high]:"28",[i.moderate]:"25",[i.low]:"22"},15:{[i.extreme]:"33",[i.high]:"30",[i.moderate]:"27",[i.low]:"23"},16:{[i.extreme]:"35",[i.high]:"32",[i.moderate]:"28",[i.low]:"25"},17:{[i.extreme]:"36",[i.high]:"33",[i.moderate]:"30",[i.low]:"26"},18:{[i.extreme]:"38",[i.high]:"35",[i.moderate]:"31",[i.low]:"28"},19:{[i.extreme]:"40",[i.high]:"37",[i.moderate]:"33",[i.low]:"29"},20:{[i.extreme]:"41",[i.high]:"38",[i.moderate]:"34",[i.low]:"30"},21:{[i.extreme]:"43",[i.high]:"40",[i.moderate]:"36",[i.low]:"31"},22:{[i.extreme]:"45",[i.high]:"42",[i.moderate]:"37",[i.low]:"32"},23:{[i.extreme]:"46",[i.high]:"43",[i.moderate]:"38",[i.low]:"34"},24:{[i.extreme]:"48",[i.high]:"45",[i.moderate]:"40",[i.low]:"36"}}},l={[t.str]:m.abilityScores,[t.dex]:m.abilityScores,[t.con]:m.abilityScores,[t.int]:m.abilityScores,[t.wis]:m.abilityScores,[t.cha]:m.abilityScores,[t.hp]:m.hitPoints,[t.per]:m.perceptionSaves,[t.ac]:m.armorClass,[t.fort]:m.perceptionSaves,[t.ref]:m.perceptionSaves,[t.wil]:m.perceptionSaves,[t.strikeBonus]:m.strikeBonus,[t.strikeDamage]:m.strikeDamage,[t.spellcasting]:m.spellcasting,[t.acrobatics]:m.skills,[t.arcana]:m.skills,[t.athletics]:m.skills,[t.crafting]:m.skills,[t.deception]:m.skills,[t.diplomacy]:m.skills,[t.intimidation]:m.skills,[t.medicine]:m.skills,[t.nature]:m.skills,[t.occultism]:m.skills,[t.performance]:m.skills,[t.religion]:m.skills,[t.society]:m.skills,[t.stealth]:m.skills,[t.survival]:m.skills,[t.thievery]:m.skills};class d extends FormApplication{constructor(){super(...arguments),this.data=h,this.actor=this.object,this.level="-1"}static get defaultOptions(){return mergeObject(super.defaultOptions,{classes:["form"],popOut:!0,template:"modules/pf2e-monster-maker/forms/monsterMakerForm.html",id:"monsterMakerForm",title:"Monster Maker Form",height:800,width:400})}applyName(e){return{name:e[t.name]?e[t.name]:"."}}applyLevel(){return{"system.details.level.value":parseInt(this.level)}}applyHitPoints(e){let r=e[t.hp];return{"system.attributes.hp.value":parseInt(l[t.hp][this.level][r])}}applyStrike(e){const r=e[t.strikeBonus],o=e[t.strikeDamage],i=parseInt(l[t.strikeBonus][this.level][r]);let a={name:".",type:"melee",data:{damageRolls:[{damage:l[t.strikeDamage][this.level][o]}],bonus:{value:i}}};return Item.create(a,{parent:this.actor})}applySpellcasting(e){const r=e[t.spellcasting],o=parseInt(l[t.spellcasting][this.level][r]),i={name:"Spellcasting",type:"spellcastingEntry",system:{spelldc:{value:o,dc:o+8},tradition:{value:"arcane"},prepared:{value:"innate"},showUnpreparedSpells:{value:!0}}};return Item.create(i,{parent:this.actor})}async applySkills(e){for(const t of r){const r=e[t];if(r!==i.none){const e={name:t,type:"lore",data:{mod:{value:parseInt(l[t][this.level][r])}}};await Item.create(e,{parent:this.actor})}}}async _updateObject(e,r){if(r){let e={};console.log(r),this.level=r[t.level];for(const t of Object.keys(r))if(o[t]){let i=o[t],a=r[t];e[i]=parseInt(l[t][this.level][a])}Object.assign(e,this.applyName(r)),Object.assign(e,this.applyLevel()),await this.actor.update(e),await this.actor.update(this.applyHitPoints(r)),await this.applyStrike(r),await this.applySpellcasting(r),await this.applySkills(r)}}getData(){return Handlebars.registerHelper("json",(function(e){return JSON.stringify(e)})),{CreatureStatistics:JSON.parse(JSON.stringify(this.data)),Levels:e,RoadMaps:a}}}Hooks.on("init",(async function(){await game.settings.register("foundryvtt-pf2e-monster-maker","roadmaps",{scope:"world",config:!1,type:Object,default:{}})})),Hooks.on("renderActorSheet",(async function(e,t){let r=e.object;if("npc"!==r?.type)return;if(!r.canUserModify(game.user,"update"))return;let o=t.find(".window-header .window-title"),i=$('<a class="popout" style><i class="fas fa-book"></i>Monster Maker</a>');i.on("click",(()=>{new d(r).render(!0)})),o.after(i)}))})();