const {EdgeTTS}=require('node-edge-tts');
const books=require('./books.json');const fs=require('fs');
(async()=>{for(const b of books){const file=`audio/${b.id}.mp3`;if(fs.existsSync(file)&&fs.statSync(file).size>10000)continue;console.log('Generating',b.id);await new EdgeTTS({voice:'vi-VN-HoaiMyNeural',lang:'vi-VN',rate:'-8%',timeout:90000}).ttsPromise(b.text,file);console.log('Saved',b.id,fs.statSync(file).size)}})().catch(e=>{console.error(e.message);process.exit(1)});
