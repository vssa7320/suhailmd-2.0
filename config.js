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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94784812570";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_58_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgzLFxuICAgICAgICA1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTExLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHT3JDN0lJRWNqV2ZiU2hCSlRMamFrN1Q2VXp3UGFhWFRQK1l5SURLQWdBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJZDJ1SjBKUlJnYVFBVGd0Mk1MX1BRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhYTU3ZjAxLTczZTMtNGMyNS1hODg0LTFlMzUzZGE1MTE5YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDQzLFxuICAgICAgOTIsXG4gICAgICA2OCxcbiAgICAgIDE0NixcbiAgICAgIDEyMixcbiAgICAgIDQ2LFxuICAgICAgNjksXG4gICAgICAyMjMsXG4gICAgICAyNyxcbiAgICAgIDI0NSxcbiAgICAgIDIyNixcbiAgICAgIDEyMyxcbiAgICAgIDE0NixcbiAgICAgIDE4NCxcbiAgICAgIDg5LFxuICAgICAgMTQ5LFxuICAgICAgMTM3LFxuICAgICAgMjAyLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAxLFxuICAgICAgMTQyLFxuICAgICAgMTE1LFxuICAgICAgNzQsXG4gICAgICA2LFxuICAgICAgNCxcbiAgICAgIDI0NCxcbiAgICAgIDE3MSxcbiAgICAgIDEzLFxuICAgICAgMTU1LFxuICAgICAgNzAsXG4gICAgICAyMzIsXG4gICAgICA0OCxcbiAgICAgIDE4NixcbiAgICAgIDE2NSxcbiAgICAgIDMxLFxuICAgICAgMjUxLFxuICAgICAgMTMyLFxuICAgICAgMjQ1LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg3QUhKUU1RXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NDgxMjU3MDo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlN2Li5oYWNrZXJcIixcbiAgICBcImxpZFwiOiBcIjI1NjQ0ODU4ODE4OTc0OTo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQ2l3Sm9JRUxmRzJic0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkl2d2JZVnNUOG5Db25hOHlaNm9EOW5WTXdXNXdqTHRid1BVOTRXalpxVlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiclVsVDNndjI2bXlEOEZhb3FaTTNPN0IvY2xPTE5FMlp5NWJGTnhjeHRlRkFFOGFSYU1GY0tqK1Z1RGlJb1J3VjdpS2sxQk1FTDlJeEN6Rzl4elcyREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVWNPdHFndlJqTllENGF1WVVZYkN1dzRYaHBiTCtEV3gyb25Da1h4ckZLMXI5Wk9kejcvNWNpd2hiKzFtVDBMdFQyU2NqaTkrc1FNeUp1R0VFbmNSRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3ODQ4MTI1NzA6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU4MTE4OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLZmVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtmZS5qc29uIjogIntcImtleURhdGFcIjpcImVGall6WkVyaGtBZE13ZXVpWFEzZkRKMlV0emRCYmR4Z3pkQ2t5cDFDa1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjIwMzA2MjU2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzM1MzUyMTczNTc1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "VSSA-XMD",
  ownername:process.env.OWNER_NAME|| "VIHANGA SULAKSHANA",


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
