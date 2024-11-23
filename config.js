const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348032190117";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_27_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU0LFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidGRUT3NvVVd1N1ZmWmJDemtRSy9kZml3bUdhT2J0djN2OGpOVENiZ0RhST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDMyMTkwMTE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5M0VFQjk2MkNBMTc0MzY4ODg2REI2NkI0MTYxOThCOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzODI4NjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDMyMTkwMTE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQjY1MzM2NDY3OUNDRDAxNDA5NTg3Q0U5NTdCMzlBRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzODI4NjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDMyMTkwMTE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMEM5MUUyMzg1QTdFNzFGNzEyNEQyNTdGMkUzREY4RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzODI4NzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDMyMTkwMTE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMjI2NUM5NEU2MTZFMEFFRDVGMUFCMjU0QzhBRTA2OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzODI4NzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZnQwYUFVdTJUOXlhYzNDMms3UFN3UVwiLFxuICBcInBob25lSWRcIjogXCI1OTQ5ZmI5NC03MWE2LTRlNDUtOTk5ZC0yMzE2OTk3NmE0MGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAxODksXG4gICAgICAyMTUsXG4gICAgICAxMDMsXG4gICAgICAxNjMsXG4gICAgICAyMTEsXG4gICAgICAyNTUsXG4gICAgICAxMDMsXG4gICAgICAxNDQsXG4gICAgICAyMzgsXG4gICAgICAyNTQsXG4gICAgICA0NixcbiAgICAgIDI1LFxuICAgICAgMzUsXG4gICAgICAyNDQsXG4gICAgICAzMCxcbiAgICAgIDcxLFxuICAgICAgODAsXG4gICAgICAxOTksXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICA1MixcbiAgICAgIDE2NCxcbiAgICAgIDIyOSxcbiAgICAgIDEyNCxcbiAgICAgIDE1NSxcbiAgICAgIDE3MyxcbiAgICAgIDk2LFxuICAgICAgMjExLFxuICAgICAgMTEwLFxuICAgICAgMzYsXG4gICAgICAxNjIsXG4gICAgICAxODAsXG4gICAgICAxOTAsXG4gICAgICA5MCxcbiAgICAgIDEsXG4gICAgICAxNjUsXG4gICAgICAxNDEsXG4gICAgICAxOTMsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjdaTkhUVDZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzIxOTAxMTc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTYWRkbGVwcmltZVwiLFxuICAgIFwibGlkXCI6IFwiNzUyNDQwMTg2MjY3NDA6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG5WcU5zQ0VJeWhpTG9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwRXZuckVRSEYzVDBQMFdiNUh4MW9Xb0ZNZXlYZFc0ckpFMUZSNXR3ZkNVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlQwcmsrUUNhYkJ5UkZNODJWVktvcXEvL2V3TmJQUlNVZzBOc0xLcUlMdTR3UTNHUFAyYkFEZE83TzVIejg0YTFvamdEWU10ZFJ6RTQzM0VBRHRCbkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVHanNsQ09SdlY3ZXRBMTFhb0dlUE9KK0lUMTBDTklFait0SlVRMGNBVyt2RGxOMm5xTkJQZURuL3RGeE93QklLd1ZicFg5WDFLMjloditqakVTSkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzIxOTAxMTc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM4Mjg2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhiOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGI5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNkx0dHdBcVpsUXdxMXF0NytsQUxQcm9qVjUxRTZGV1l6cm45RW43ajlVVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjgzNzgwNDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTMzMDkyMzUxMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
