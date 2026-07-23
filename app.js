'use strict';
/* Doodlebuds design studio — engine lifted verbatim from the artist's own
   deterministic pixel engine. All artwork © Yongshan Yu. */
const D = {"bodies":[["...BBBBB...","..BWBBBBB..","..BBeBBeB..","..BuBBBBu..","..BBBBBBB..","...BBBBB...","...DD..DD..","...DD..DD..","..........."],["....BBB....","..BBBBBBB..",".BWBeBBeBB.",".BBuBBBBuB.",".BBBBBBBBB.","..BBBBBBB..","....D.D....","...........","..........."],["....BBB....","...BBBBB...","...BeBeB...","...uBBBu...","...BBBBB...","...BBBBB...","...BBBBB...","....D.D....","..........."],["....BBB....","...BBBBB...","..BBeBeBB..","..BuBBBuB..",".BBBBBBBBB.",".BBBBBBBBB.","..BBBBBBB..","...D...D...","..........."],[".....B.....","....BBB....","...BeBeB...","..BBuBuBB..",".BBBBBBBBB.",".BBBBBBBBB.",".BBBBBBBBB.","..D.....D..","..........."],["..BBBBBBB..","..BWBBBBB..","..BeBBBeB..","..BuBBBuB..","..BBBBBBB..","..BBBBBBB..","..DD...DD..","...........","..........."],["...........","..BBBBBBB..",".BBeBBBeBB.",".BuBBBBBuB.",".BBBBBBBBB.",".BBBBBBBBB.","..D..D..D..","...........","..........."],[".....B.....","....BBB....","...BBBBB...","..BeBBBeB..","..BuBBBuB..","..BBBBBBB..","...BBBBB...","....D.D....","..........."]],"plants":[[["...........","..LL.......","...LL......",".....S.....",".....S....."],["....DDD....","....DDD....",".....S.....",".....S.....",".....S....."],["....w.w....","....wYw....","....w.w....",".....S.....",".....S....."]],[["...........","...L...L...","....L.L....",".....S.....",".....S....."],["...D...D...","...DD.DD...","....S.S....",".....S.....",".....S....."],["...w...w...","...wY.Yw...","....S.S....",".....S.....",".....S....."]],[["...........","....L......",".....SL....","....LS.....",".....S....."],[".....D.....","....DD.....",".....SL....","....LS.....",".....S....."],["....P.P....","....PPP....",".....P.....",".....S.....",".....S....."]],[["...........",".....L.....","....LL.....",".....S.....",".....S....."],["....DDD....","....DDD....","....DDD....",".....S.....",".....S....."],["....B.B....","....BBB....","....BwB....",".....S.....",".....S....."]],[["...........",".....L.....","....LL.....",".....S.....",".....S....."],["....L.L....",".....L.....",".....S.....",".....S.....",".....S....."],["....L.L....",".....Y.....","....L.L....",".....S.....",".....S....."]],[["...........","......L....",".....SL....",".....S.....",".....S....."],[".....D.....","....DDD....",".....D.....",".....S.....",".....S....."],[".....Y.....","....YYY....",".....Y.....",".....S.....",".....S....."]],[["...........","....L......","....LS.....",".....S.....",".....S....."],["....P.P....",".....S.....",".....S.....",".....S.....",".....S....."],["...P.P.P...","....P.P....",".....S.....",".....S.....",".....S....."]],[["...........","....SS.....","......S....",".....S.....",".....S....."],["....SSL....","......S....",".....S.....",".....S.....",".....S....."],["....PP.....","....SPP....",".....S.....",".....S.....",".....S....."]],[["...........",".....L.....",".....S.....",".....S.....",".....S....."],["....DDD....",".....S.....",".....S.....",".....S.....",".....S....."],["...DDwDD...","..DDDDDDD..",".....S.....",".....S.....",".....S....."]],[["...........","....S......",".....S.....","....S......",".....S....."],["....D......",".....S.....","....S......",".....S.....",".....S....."],["....Y......","....YS.....",".....S.....","....S......",".....S....."]],[["...........","....P......",".....SP....",".....S.....",".....S....."],["....PP.....","....PP.....",".....S.....",".....S.....",".....S....."],["...P.w.P...","....PwP....","...P.S.P...",".....S.....",".....S....."]],[["...........",".....L.....",".....S.....",".....S.....",".....S....."],["....YYY....","....YDY....",".....S.....",".....S.....",".....S....."],["...YYYYY...","...YDDDY...","...YYYYY...",".....S.....",".....S....."]],[["...........",".....L.....","....LS.....",".....S.....",".....S....."],["....www....",".....w.....",".....S.....",".....S.....",".....S....."],["....w.w....","...w.w.w...","....w.w....",".....S.....",".....S....."]],[[".....L.....",".....S.....",".....S.....",".....S.....",".....S....."],[".....D.....",".....D.....",".....S.....",".....S.....",".....S....."],[".....D.....",".....D.....",".....D.....",".....S.....",".....S....."]],[["...........","...........","....SS.....",".....S.....",".....S....."],["....SSS....","....S......",".....S.....",".....S.....",".....S....."],["...SSS.....","...S.SS....","....SS.....",".....S.....",".....S....."]],[["...........",".....L.....",".....S.....",".....S.....",".....S....."],["....B.B....",".....S.....",".....S.....",".....S.....",".....S....."],[".....B.....","....B.B....","....BSB....",".....S.....",".....S....."]],[["...........",".....SL....","....S......",".....S.....",".....S....."],["....S......","...Sw......",".....S.....",".....S.....",".....S....."],["...S..S....","..Sw..Sw...",".....S.....",".....S.....",".....S....."]],[["...........","....SS.....",".....S.....",".....S.....",".....S....."],["....BBB....","....B.B....",".....S.....",".....S.....",".....S....."],["....BBB....","....BBB....","....BYB....",".....S.....",".....S....."]],[["...........",".....D.....",".....S.....",".....S.....",".....S....."],["....PD.....",".....DP....",".....S.....",".....S.....",".....S....."],["....P.B....",".....D.....","....B.P....",".....S.....",".....S....."]],[["...........",".....w.....",".....S.....",".....S.....",".....S....."],[".....B.....","....BwB....",".....S.....",".....S.....",".....S....."],["....B.w....","....wBB....","....B.B....",".....S.....",".....S....."]],[["...........","....S......",".....S.....",".....S.....",".....S....."],["....P.P....",".....P.....",".....S.....",".....S.....",".....S....."],["..P.P.P.P..","...P...P...",".....S.....",".....S.....",".....S....."]],[["...........",".....L.....",".....S.....",".....S.....",".....S....."],["....Y.Y....",".....Y.....",".....S.....",".....S.....",".....S....."],["....Y.Y....","....Y.Y....",".....Y.....",".....S.....",".....S....."]],[["...........",".....L.....",".....S.....",".....S.....",".....S....."],["....PP.....","....PPP....",".....S.....",".....S.....",".....S....."],["....P.P....","...PPPPP...",".....P.....",".....S.....",".....S....."]],[["...........","....LL.....",".....S.....",".....S.....",".....S....."],["...LLL.....",".....S.....","....SS.....",".....S.....",".....S....."],["..LLL.LLL..","....S.S....",".....S.....",".....S.....",".....S....."]],[["...........","...........","....LLL....",".....S.....",".....S....."],["....BB.....","....BBB....",".....S.....",".....S.....",".....S....."],["...B.w.B...","....BBB....","....LLL....",".....S.....",".....S....."]],[["...........",".....D.....",".....S.....",".....S.....",".....S....."],["....DwD....",".....D.....",".....S.....",".....S.....",".....S....."],["....DYD....","....DwD....","....D.D....",".....S.....",".....S....."]],[["...........",".....w.....",".....S.....",".....S.....",".....S....."],["....w......","......w....",".....S.....",".....S.....",".....S....."],["....w.w....","......w....","....w......",".....S.....",".....S....."]],[["...........","....PP.....",".....S.....",".....S.....",".....S....."],["....PPw....",".....S.....",".....S.....",".....S.....",".....S....."],["....PwP....","....P......","....wS.....",".....S.....",".....S....."]],[["...........",".....Y.....",".....S.....",".....S.....",".....S....."],["....Y.Y....",".....Y.....",".....S.....",".....S.....",".....S....."],["...Y...Y...","....Y.Y....",".....S.....",".....S.....",".....S....."]],[["...........",".....L.....","....SL.....",".....S.....",".....S....."],["....B.B....",".....B.....",".....S.....",".....S.....",".....S....."],["...B.B.B...","....B.B....","...B.S.B...",".....S.....",".....S....."]],[["...........",".....P.....",".....S.....",".....S.....",".....S....."],[".....P.....",".....w.....",".....S.....",".....S.....",".....S....."],[".....P.....",".....w.....",".....L.....",".....S.....",".....S....."]],[["...........","....P......",".....S.....",".....S.....",".....S....."],["....PP.....",".....P.....",".....S.....",".....S.....",".....S....."],["...PP.PP...","....P.P....",".....P.....",".....S.....",".....S....."]],[["...........","....LLL....",".....S.....",".....S.....",".....S....."],["...L.L.L...","....LLL....",".....S.....",".....S.....",".....S....."],["....PPP....","...L.L.L...","....LLL....",".....S.....",".....S....."]],[["...........","....SS.....",".....S.....",".....S.....",".....S....."],["....BB.....",".....B.....",".....S.....",".....S.....",".....S....."],["...BwwB....","....BB.....",".....S.....",".....S.....",".....S....."]],[["...........",".....D.....",".....S.....",".....S.....",".....S....."],["....Y......",".....D.....",".....S.....",".....S.....",".....S....."],["...Y.w.Y...","....wYw....",".....D.....",".....S.....",".....S....."]]],"speciesTpls":{"glitch":["...........","....S......","..DDD......","...BBBBB...",".BBBBB.....","...BBBBBBB.","..BeBBeB...","....BBBBuB.","..BBBBB....","...BBBBBB..","..DD..DD...","...........","...........","..........."],"matrix":["...........","....S.S....","..DDDDDDD..","..DBBBBBD..","..DBeBeBD..","..DBBBBBD..","..DBuBuBD..","..DBBBBBD..","..DDDDDDD..","....DDD....","...DDDDD...","...........","...........","..........."],"pointer":["...........","..B........","..BB.......","..BBB......","..BBBB.....","..BeBBB....","..BBBeBB...","..BBBBBBB..","..BBBB.....","..B.BB.....","....BB.....",".....BB....","...........","..........."],"wifi":["...........",".BBBBBBBBB.","...........","..BBBBBBB..","...........","...BeBeB...","...BBBBB...","....BBB....",".....B.....","....D.D....","...........","...........","...........","..........."],"lowbatt":["...........",".....S.....",".....L.....",".DDDDDDDD..",".DwBBBBBDD.",".DwBeBeBDD.",".DwBuBuBDD.",".DwBBBBBDD.",".DDDDDDDD..","..D.....D..","...........","...........","...........","..........."],"post":["...........",".....S.....","....LL.....","..DDDDDDD..",".DBWBBBBBD.",".DBeBBeBBD.",".DBuBBuBBD.",".DBBBBBBBD.",".DDDDDDDDD.","..D.....D..","...........","...........","...........","..........."],"cumulus":[".............",".....BBB.....","...BBBBBBB...","..BBBBBBBBB..",".BBWBBBBBBBB.",".BBeBBBBeBBB.",".BBBuBBuBBBB.","..BBBBBBBBB..","...B.BBB.B...",".............",".............",".............",".............","............."],"feature":[".............","......S......",".....LL......",".............",".............",".............","..BBBBBBBBB..",".BBBBBBBBBBB.",".BeBeBBBBBBB.",".BuBBBBBBBBB.",".BBBBBBBBBBB.","..D.D.D.D.D..",".............","............."],"latency":["...........",".....S.....","....LL.....",".DDDDDDDDD.","..BBBBBBB..","...BeBeB...","....BBB....",".....B.....","....BBB....","...BuBuB...","..BBBBBBB..",".DDDDDDDDD.","...........","..........."],"aliased":["...........","....SS.....","....SS.....","..BBBBBB...","..BBBBBB...","..eeBBee...","..eeBBee...","..BBBBBB...","..BBBBBB...","..DD..DD...","..DD..DD...","...........","...........","..........."],"darkmode":["...........",".....S.....","....LL.....","....BBBB...","..BBBBBB...",".BBBB......",".BBeB......",".BBBB......",".BBBBB.....","..BBBBBB...","....BBBB...",".....D.D...","...........","..........."],"gilded":["...........",".....S.....","....LL.....",".D.DDDDD.D.",".D.BBBBB.D.",".DDBeBeBDD.","...BuBuB...","...BBBBB...","....BBB....",".....B.....","....DDD....","...DDDDD...","...........","..........."],"cacheghost":["...........",".....S.....","....LL.....","....BBB....","..BBBBBBB..","..BeBBeBB..","..BBBBBBB..","..BuBBBuB..","..BBBBBBB..","..BBBBBBB..","..B.BB.BB..","...........","...........","..........."],"cronjob":["...........","...D...D...","..D.....D..","...BBBBB...","..BBBBBBB..",".BBBBBBBBB.",".BBeBBBeBB.",".BBBBwBBBB.","..BuBBBuB..","...BBBBB...","....D.D....","...........","...........","..........."],"y2kbug":[".....P.....","....PY.....","....BB.....","...BBBB....","...BeBe....","..BBBBBB...","..BuBBuB...",".BBBBBBBB..",".BBBBBBBB..",".DDDDDDDD..","....D.D....",".w...P...Y.","...........","..........."],"bitflip":["...........",".....S.....","....LL.....","...BBBDDD..","..BBBBDDDD.","..BeBBDDwD.","..BBBBDDDD.","..BuBBDDDD.","..BBBBDDDD.","...BBBDDD..","...D....B..","...........","...........","..........."],"turbo":[".....B.....","....BB.B...","...BBBBB...","....PPP....","...BBBBB...","..BBBBBBB..","..BeBBeBB..","..BuBBBuB..","..BBBBBBB..","...BBBBB...","...DD.DD...","...........","...........","..........."],"dotmatrix":["...........",".....S.....","....LL.....",".wBBBBBBBw.",".BBBBBBBBB.",".wBeBBeBBw.",".BBBBBBBBB.",".wBuBBuBBw.",".BBBBBBBBB.",".wBBBBBBBw.","..D.....D..","...........","...........","..........."],"bsodjr":["...........",".....S.....","....LL.....",".DDDDDDDDD.",".DwDDDDDDD.",".DBBBBBBBD.",".DBeBBeBBD.",".DBBBBBBBD.",".DBuBBuBBD.",".DBBBBBBBD.",".DDDDDDDDD.","..D.....D..","...........","..........."],"rgbrig":["...........",".....S.....","....LL.....","....BBB....","..BBBBBBB..",".BBWBBBBBB.",".BeBBBBeBB.",".BBBBBBBBB.",".BuBBBBuBB.","..BBBBBBB..","....BBB....","...D...D...","...........","..........."],"captcha":["...........",".....S.....","....LL.....",".DDDDDDDDD.",".DBBBBBBBD.",".DBeBeBwBD.",".DBBBBwBBD.",".DBuBwBuBD.",".DBwBBBBBD.",".DBBBBBBBD.",".DDDDDDDDD.","..D.....D..","...........","..........."],"kernelpg":["...........",".....S.....","....LL.....","....BBB....","...BBBBB...","..BBeBeBB..","..BBBYBBB..","..BwwwwwB..","..BwwwwwB..","..BBBBBBB..","...Y...Y...","...........","...........","..........."]},"species":[{"id":"glitch","hat":"📼","body":{"body":"#d38ef5","dark":"#8a4bd0"},"n":"Artifact","t":"the render made a mistake. keep it.","lore":"a compression artifact that gained sentience. do not re-encode."},{"id":"matrix","hat":"🖥️","body":{"body":"#7ee787","dark":"#2ea043"},"n":"Neo Sprout","t":"follow the green rain.","lore":"sees the desktop as falling glyphs. chose the pink pill anyway."},{"id":"pointer","hat":"🖱️","body":{"body":"#f5f5fa","dark":"#9aa0b4"},"n":"Pointer","t":"it moves exactly like something you own.","lore":"sprints, stops dead, hovers. blames your wrist."},{"id":"wifi","hat":"📶","body":{"body":"#9fd8ff","dark":"#4f9edb"},"n":"Signal","t":"three bars in the meadow.","lore":"full bars everywhere. yes, even in the basement."},{"id":"lowbatt","hat":"🪫","body":{"body":"#ff9d9d","dark":"#d64545"},"n":"Low Batt","t":"it beeps, sadly, at 20%.","lore":"permanently at 15%. refuses every charger. lives anyway."},{"id":"post","hat":"⌨️","body":{"body":"#ffd27a","dark":"#c98a2e"},"n":"POST Beep","t":"one short beep = all is well.","lore":"boots in 0.2 seconds. spends the saved time napping."},{"id":"cumulus","hat":"☁️","body":{"body":"#eef7ff","dark":"#a5c9e8"},"n":"Cumulus","t":"local sky, 100% chance of cute.","lore":"your data is inside it somewhere. it will not say where."},{"id":"feature","hat":"🐛","body":{"body":"#c8f07e","dark":"#7fae35"},"n":"Feature","t":"it walks backwards. that is intended.","lore":"filed as a bug, closed as WONTFIX, beloved as a feature."},{"id":"latency","hat":"⏳","body":{"body":"#e8d9b8","dark":"#b09a62"},"n":"Latency","t":"it arrives… eventually.","lore":"walks at 300ms ping. emotionally, always 3 seconds behind."},{"id":"aliased","hat":"🟪","body":{"body":"#cbb1f2","dark":"#8e6cc9"},"n":"Aliased","t":"somebody turned the resolution down.","lore":"renders at 8×8 out of principle. anti-aliasing is a scam."},{"id":"darkmode","hat":"🌑","body":{"body":"#4a3a5e","dark":"#241335"},"n":"Dark Mode","t":"it only comes out for your retinas.","lore":"claims it saves battery. actually just goth."},{"id":"gilded","hat":"🏆","body":{"body":"#ffd873","dark":"#c9992e"},"n":"Gold Master","t":"the final build. shipped. golden.","lore":"the release that never needed a hotfix. worship it."},{"id":"cacheghost","hat":"👻","body":{"body":"#e8e6f5","dark":"#a9a4c9"},"n":"Cache Ghost","t":"you cleared it. it came back.","lore":"404 in the heap, alive in your heart. clear-site-data can't touch it."},{"id":"cronjob","hat":"⏰","body":{"body":"#a8e8d8","dark":"#4fae8e"},"n":"Cron Job","t":"every minute, on the minute.","lore":"runs * * * * *. never missed a beat. slightly smug about it."},{"id":"y2kbug","hat":"🎊","body":{"body":"#ffb3dd","dark":"#f0509f"},"n":"Y2K Bug","t":"it partied like it's 19100.","lore":"the apocalypse that RSVP'd and never showed. still dressed for it."},{"id":"bitflip","hat":"🎲","body":{"body":"#f2f2f2","dark":"#1a1a1a"},"n":"Bit Flip","t":"a cosmic ray did this.","lore":"one stray cosmic ray and now it can't decide if it's a 0 or a 1."},{"id":"turbo","hat":"🔥","body":{"body":"#ff8a5c","dark":"#d1431f"},"n":"Overclock","t":"it voids its own warranty.","lore":"runs 30% faster, 300% warmer. the fan noise is purring, probably."},{"id":"dotmatrix","hat":"🖨️","body":{"body":"#c7d3e8","dark":"#7c8db0"},"n":"Dot Matrix","t":"you can hear it from two rooms away.","lore":"prints one pixel at a time. SCREEE. beautiful. archival quality."},{"id":"bsodjr","hat":"💙","body":{"body":"#7cb1ff","dark":"#2f5fd0"},"n":"BSOD Jr.","t":"it collects your crash reports.","lore":"falls over :( then gets right back up. files a crash report about itself each time."},{"id":"rgbrig","hat":"🕹️","body":{"body":"#ff8fc7","dark":"#d6539b"},"n":"RGB Rig","t":"the frames per second are cosmetic.","lore":"+15 FPS from the lighting alone (self-reported)."},{"id":"captcha","hat":"✅","body":{"body":"#d6f5c8","dark":"#7cba58"},"n":"Not A Robot","t":"click every square containing buds.","lore":"passes every CAPTCHA first try. suspiciously good at crosswalks."},{"id":"kernelpg","hat":"🐧","body":{"body":"#bfe3f0","dark":"#3d7a94"},"n":"Penguin Core","t":"it's free. it's open. it's here.","lore":"monolithic, open-source, will explain itself unprompted."}],"names":["Pixel","Cursor","Sprite","Voxel","Glyph","Chip","Bit","Nibble","Byte","Cache","Cookie","Token","Packet","Ping","Modem","Router","Widget","Kernel","Daemon","Cron","Bash","Grep","Regex","Lambda","Stack","Heap","Queue","Hash","Salt","Nonce","Blob","Node","Patch","Diff","Fork","Merge","Echo","Curl","Vim","Tarball","Floppy","Zipette","Socket","Proxy","Mutex","Async","Loopy","Segfault"],"swatch":["tomato.exe","peach.css","honey.js","butter.bat","lime.log","matcha.md","clover.sh","mint.ini","seafoam.css","aqua.cfg","cyan.sys","sky.png","azure.db","blueberry.zip","indigo.tmp","grape.svg","violet.dll","orchid.gif","magenta.exe","fuchsia.css","hotpink.js","bubblegum.bat","rose.txt","coral.jpg"],"bios":["compiles hugs from source.","refuses to be garbage-collected.","passed the vibe check(sum).","runs on snacks and semicolons.","single-threaded but very devoted.","sleeps in low-power mode, dreams in RGB.","believes every bug is an undocumented friend.","will not rest until P = NP (or snack time).","backed up twice, loved thrice.","petal-to-metal performance.","thinks the cloud is just sky RAM.","has read the entire man page. of flowers.","its favourite key is the spacebar. so roomy.","deprecates nothing, ever. everything is loved."],"party":["#ff2fae","#41e0ff","#ffd400","#7cfc00","#c9a7f5","#ff8a5c"],"evoLore":[["MERGE HORNS — survived a rebase onto main","APEX WARHORNS — force-pushes with consent"],["CANARY WINGS — deploys on fridays, unafraid","APEX WINGSPAN — production holds its breath"],["UPTIME HALO — 99.9% holy","FIVE-NINES HALO — 99.999% divine"],["FULL-BARS ANTENNAE — it hears the wifi","APEX ARRAY — it IS the router now"],["THIRD EYE — sees the bug before it's written","ALL-SEEING BUILD — reviews code by staring"],["ROOT MOHAWK — has sudo at home","KERNEL CREST — the mohawk runs ring 0"],["DAEMON TAIL — runs in the background","APEX PROCESS — cannot be killed, only loved"],["DEBUG FANGS — bites exactly one bug at a time","APEX PREDATOR — the bugs filed a restraining order"],["HOTFIX CAPE — arrives at 3am","APEX CAPE — the pager fears IT now"],["MONOREPO CROWN — rules three packages","APEX SOVEREIGN — all dependencies bow"],["PROD-FIRE HAIR — fixed it live","APEX INFERNO — this is fine. it really is"],["STARDUST BUILD — compiles with zero warnings","APEX CONSTELLATION — the linter applauds"],["CONFERENCE BOWTIE — has spoken at three meetups","KEYNOTE BOWTIE — the wifi password is named after it"]],"trails":{"glitch":{"g":["▚","▞"],"w":["rgb split","moshed","§§§"],"c":["#ff2fae","#41e0ff"],"fx":"alt","a":"jitter"},"matrix":{"g":["ﾊ","ﾐ","0","1"],"w":["wake up","follow","01101"],"c":["#2ea043","#7ee787"],"a":"fall"},"wifi":{"g":["▂","▄","▆"],"w":["ssid?","5GHz","full bars"],"c":["#4f9edb","#7cfc00"]},"lowbatt":{"g":["▮"],"w":["15%","low batt…","plug me"],"c":["#ff5d5d","#ffc23f","#7ce87c"]},"post":{"g":["♪","·"],"w":["beep","beep beep","POST OK"],"c":["#c98a2e","#ffd27a"]},"cumulus":{"g":["·","☁"],"w":["drizzle","10% rain"],"c":["#a5c9e8","#7c8db0"],"s":9,"a":"drift"},"feature":{"g":["❯"],"w":["WONTFIX","by design","not a bug"],"c":["#7fae35"],"fx":"flip"},"latency":{"g":["·","•"],"w":["300ms","lag…","jitter"],"c":["#b09a62"],"fx":"echo"},"aliased":{"g":["■"],"w":["8×8","jaggies"],"c":["#8e6cc9","#cbb1f2"],"s":13},"darkmode":{"g":["✦","☾","·"],"w":["0 lux","goth","no light"],"c":["#c9a7f5","#4a3a5e"],"a":"pulse"},"gilded":{"g":["✦"],"w":["v1.0","GOLD","shipped ✓"],"c":["#ffd400","#c9992e"],"a":"pulse"},"cacheghost":{"w":["304","stale","cached"],"c":["#a9a4c9"],"fx":"ghost"},"cronjob":{"g":["|"],"w":["* * * * *","03:00","on time"],"c":["#4fae8e"],"fx":"tick"},"bitflip":{"g":["0","1"],"w":["2^12","bit rot","ECC?"],"c":["#1a1a1a","#f2f2f2"],"fx":"alt","a":"jitter"},"turbo":{"g":["▴","·"],"w":["98°C","MHz+","no warranty"],"c":["#ff4d1f","#ff8a5c","#ffd400"],"a":"flicker"},"dotmatrix":{"g":["◦"],"w":["SCREE","lp0 on fire","···"],"c":["#7c8db0"],"fx":"tick"},"bsodjr":{"g":[":("],"w":["0xDEAD","IRQL…","dump 40%",":-("],"c":["#2f5fd0"],"s":9},"rgbrig":{"g":["■"],"w":["RGB","+15fps","16.7M"],"fx":"hue","a":"hue"},"captcha":{"g":["☑"],"w":["not a bot","im human","☐?"],"c":["#7cba58"]},"kernelpg":{"g":["·"],"w":["ring 0","sudo","GNU"],"c":["#3d7a94"],"fx":"pair"},"n0":{"g":["■"],"w":["1px","RGBa","dead px"],"c":"self","s":8},"n1":{"g":["|"],"w":["blink","EOL"],"c":"self","fx":"blink"},"n2":{"g":["▟","▙"],"w":["8-bit","frame 2/4"],"c":"self","fx":"alt"},"n3":{"g":["◧"],"w":["z-axis","NOW IN 3D"],"c":"self","s":12},"n4":{"g":["ᛝ","ꟼ","§","ƶ"],"w":["U+FFFD","tofu □"],"c":["#4a3a5e"]},"n5":{"g":["⧈"],"w":["3nm","silicon","×2"],"c":["#c9992e"]},"n6":{"g":["0","1"],"w":["LSB","respect"],"c":"self","fx":"alt"},"n7":{"g":["◐","◑"],"w":["4 bits","½ byte"],"c":"self","fx":"alt"},"n8":{"g":["⣿"],"w":["0xFF","255","8 bits"],"c":"self"},"n9":{"g":["⚡"],"w":["HIT ✓","MISS…","TTL ∞"],"c":["#ffd400"],"s":9,"a":"flicker"},"n10":{"g":["🍪"],"w":["crumbs","30 days","consent?"],"s":9,"c":["#c9992e"]},"n11":{"g":["◍"],"w":["expired","JWT","refresh ✓"],"c":["#c9992e","#ffd400"]},"n12":{"g":["▣"],"w":["TTL 64","hop!","frag 2/3"],"c":["#41e0ff"]},"n13":{"g":["·"],"w":["pong","0.3ms","rtt ♡"],"c":["#4f9edb"],"fx":"tick"},"n14":{"g":[")"],"w":["56k","EEE-AW","dial…"],"c":["#ff8a5c"]},"n15":{"g":["⌗"],"w":["DHCP ✓","192.168…","blame DNS"],"c":["#4f9edb"]},"n16":{"g":["▢"],"w":["click me","A/B","CTR+"],"c":["#ff8fc7"]},"n17":{"g":["#"],"w":["ring 0","syscall","panic?"],"c":["#241335"]},"n18":{"g":["ψ"],"w":["nohup &","bg","kill -9?"],"c":["#8a4bd0"]},"n19":{"g":["|"],"w":["* * *","03:00","missed 1"],"c":["#4fae8e"],"fx":"tick"},"n20":{"g":["$"],"w":["sudo","ls -la","| grep","cd ~"],"c":["#7cba58"]},"n21":{"g":["/"],"w":["-r","match!","/bug/g"],"c":["#d6539b"]},"n22":{"g":["*","+","?"],"w":["\\d+","(.*)","[a-z]"],"c":["#8e6cc9"]},"n23":{"g":["λ"],"w":["λx.x","no name","cold…"],"c":["#ffd400","#c98a2e"],"a":"pulse"},"n24":{"g":["≡"],"w":["push","pop","depth++"],"c":["#7cb1ff"]},"n25":{"g":["∴","∵"],"w":["malloc","free()","GC ✓"],"c":["#c9a7f5"]},"n26":{"g":["…"],"w":["FIFO","#1 next","no cutting"],"c":"self","fx":"tick"},"n27":{"g":["#"],"w":["#7f3a","sha256","salted ✓"],"c":["#ffd400"]},"n28":{"g":["·"],"w":["NaCl","seasoned","·····"],"c":["#ffffff"]},"n29":{"g":["∅"],"w":["once.","used ✗","8f21"],"c":["#9aa0b4"]},"n30":{"g":["●"],"w":["base64","4.2MB","aGkg…"],"c":"self","s":12},"n31":{"g":["⬡"],"w":["npm i","1204 pkgs","1.2GB"],"c":["#7ee787"]},"n32":{"g":["+"],"w":["v1.0.1","+1 line","healed"],"c":["#4fae6e"]},"n33":{"g":["−","+"],"w":["@@ -1 +1 @@","hunk","2 files"],"c":["#d64545","#4fae6e"],"fx":"alt"},"n34":{"g":["⑂"],"w":["fork()","diverged","pid 2"],"c":["#ff8a5c"]},"n36":{"g":["○","◦"],"w":["echo…","(echo)","…o"],"c":["#b09a62"],"fx":"echo"},"n37":{"g":["~"],"w":["GET /","200 OK","-fsSL"],"c":["#4f9edb"]},"n38":{"g":[":"],"w":[":q",":wq","ESC","hjkl"],"c":["#2ea043"]},"n39":{"g":["◱"],"w":["-xzvf?",".tar.gz","flags…"],"c":["#b09a62"]},"n40":{"g":["💾"],"w":["1.44MB","save ✓","A:\\"],"s":9,"c":["#7c8db0"]},"n41":{"g":["≋"],"w":["-60%","deflate",".zip ♡"],"c":["#ff8fc7"]},"n42":{"g":["⌇"],"w":["SYN","ACK",":8080"],"c":["#41e0ff"],"a":"wiggle"},"n43":{"g":["⇄"],"w":["relay","no logs ♡","mitm?"],"c":["#9aa0b4"]},"n44":{"g":["∥"],"w":["lock()","wait…","unlock ✓"],"c":["#c9992e"]},"n45":{"g":["⋯"],"w":["await","pending",".then()"],"c":["#8e6cc9"],"fx":"echo"},"n46":{"g":["∞"],"w":["while(1)","i++","break?"],"c":["#ff8fc7"],"a":"spin"},"n47":{"g":["✗"],"w":["SIGSEGV","0x0","core ✗","null"],"c":["#d64545"]}},"guideWheel":{"Pixel":{"oneliner":"PIXEL — the smallest unit of display","gist":"plays a stuck dead pixel refusing to move; reveals RGB subpixels","quote":"do NOT rub me"},"Cursor":{"oneliner":"CURSOR — the blinking text caret","gist":"blinks in and out like a typing text caret","quote":"end of line."},"Sprite":{"oneliner":"SPRITE — the game-animation sheet","gist":"walks in chunky stop-motion frames like an animation sheet","quote":"smooth at 2 fps ♡"},"Voxel":{"oneliner":"VOXEL — a pixel that discovered depth","gist":"dramatically debuts its third dimension","quote":"NOW IN 3D"},"Glyph":{"oneliner":"GLYPH — a character in search of a font","gist":"renders as tofu boxes until its font is found","quote":"font not found…"},"Chip":{"oneliner":"CHIP — the silicon itself","gist":"doubles its transistor count on schedule, visibly growing","quote":"every 2 years. i am the law"},"Bit":{"oneliner":"BIT — the least significant, allegedly","gist":"the least significant bit demands respect for its math","quote":"without me: WRONG MATH. respect."},"Nibble":{"oneliner":"NIBBLE — half a byte, looking for its other half","gist":"finds a partner to complete one full byte","quote":"+ you = 1 BYTE ♡"},"Byte":{"oneliner":"BYTE — 8 bits, 256 moods","gist":"counts up to 255 and overflows back to zero, reborn","quote":"i overflowed. i am reborn ♡"},"Cache":{"oneliner":"CACHE — blazing fast, occasionally wrong","gist":"serves one instant cache hit and one shameful disk miss","quote":"shameful. fetching from disk"},"Cookie":{"oneliner":"COOKIE — sweet, and it tracks you","gist":"serves a consent banner where both buttons say yes","quote":"accept cookies? [yes] [yes]"},"Token":{"oneliner":"TOKEN — expires when you need it most","gist":"expires and begs re-auth; plants a canary token on a colleague","quote":"alive for ONE more hour ♡"},"Packet":{"oneliner":"PACKET — hops with a hop limit","gist":"wanders while its TTL counter drains hop by hop","quote":"every hop costs me ♡"},"Ping":{"oneliner":"PING — the round-trip artist","gist":"volleys PING-PONG round trips with a neighbor","quote":"rtt 0.3ms. beautiful."},"Modem":{"oneliner":"MODEM — the 56k screamer","gist":"screeches through dial-up handshake; loses the line to the phone","quote":"mom needed the landline."},"Router":{"oneliner":"ROUTER — forwards things. blames DNS","gist":"hands out DHCP addresses; files a postmortem blaming DNS","quote":"it is ALWAYS dns."},"Widget":{"oneliner":"WIDGET — lives for engagement","gist":"begs passersby to click, harvesting engagement","quote":"engagement metrics: you ♡"},"Kernel":{"oneliner":"KERNEL — ring 0 royalty","gist":"holds royal audience granting syscalls; turns ghostly in ring 0","quote":"userspace ♡ approach"},"Daemon":{"oneliner":"DAEMON — background, unkillable, beloved","gist":"detaches into the background and shrugs off kill -9","quote":"cannot be killed. only loved"},"Cron":{"oneliner":"CRON — scheduled, punctual, martyred at 3am","gist":"paged at 3am to hotfix prod; suffers timezone and maintenance windows","quote":"at 3am?! on my way"},"Bash":{"oneliner":"BASH — the shell itself","gist":"fake rm -rf scare, sudo !! magic, tab-complete teleport","quote":"relax. no --no-preserve-root"},"Grep":{"oneliner":"GREP — finds ANYTHING","gist":"chases a hopping bug across the desktop until one match found","quote":"nothing escapes the pattern"},"Regex":{"oneliner":"REGEX — powerful, catastrophic","gist":"catastrophically backtracks validating one email; lints a colleague mercilessly","quote":"valid. it took 4 years"},"Lambda":{"oneliner":"LAMBDA — no name, no server, no patience","gist":"suffers a cold start, then sprints and bills you; proudly nameless","quote":"i have no name. only purpose."},"Stack":{"oneliner":"STACK — grows downward emotionally","gist":"stacks clones skyward until STACK OVERFLOW collapses the tower","quote":"STACK OVERFLOW"},"Heap":{"oneliner":"HEAP — fragmented but generous","gist":"heap balloons with a memory leak until GC shrinks it back","quote":"collected. i feel light ♡"},"Queue":{"oneliner":"QUEUE — order is sacred","gist":"herds two passersby into a numbered FIFO queue","quote":"now serving #1. no cutting."},"Hash":{"oneliner":"HASH — deterministic until it isn't","gist":"discovers a neighbor shares its exact hash — a collision","quote":"same hash?! one in 4 billion!!"},"Salt":{"oneliner":"SALT — makes everything unguessable","gist":"sprinkles white salt grains over a neighbor to season them","quote":"unguessable now ♡"},"Nonce":{"oneliner":"NONCE — used exactly once","gist":"spins one full rotation, then declares itself spent forever","quote":"USED — never again"},"Blob":{"oneliner":"BLOB — big, binary, unreadable","gist":"base64-encodes itself into proud unreadable gibberish","quote":"i encoded myself. i am unreadable ♡"},"Node":{"oneliner":"NODE — one package, 1204 dependencies","gist":"installs 1204 packages; also decrees a v2 bump on everyone","quote":"heavier than the universe."},"Patch":{"oneliner":"PATCH — heals things. by force if needed","gist":"patches a broken neighbor to v1.0.1; force-pushes the crowd away","quote":"you were broken. not anymore ♡"},"Diff":{"oneliner":"DIFF — sees only what changed","gist":"labels two piks -removed/+added; stares down a code review","quote":"2 insertions, 1 deletion"},"Fork":{"oneliner":"FORK — history is negotiable","gist":"forcibly rebases a neighbor; demos a fork bomb with ghosts","quote":"do NOT run this one"},"Merge":{"oneliner":"MERGE — the branch train IS its show","gist":"merged piks queue behind the Merge, joined by pink dashed branch lines — a git graph on legs","quote":"branch merged ♡"},"Echo":{"oneliner":"ECHO — everything twice, fading","gist":"one hello repeats twice more, fading softer each time","quote":"…hello"},"Curl":{"oneliner":"CURL — fetches anything, demos everything","gist":"live demo dies with the wifi; GETs a desktop icon, 200 OK","quote":"works locally, watch this"},"Vim":{"oneliner":"VIM — you can enter. you cannot leave","gist":"cycles :q :q! :wq trying to exit; hot-edits production live","quote":"FREE!! (i will be back)"},"Tarball":{"oneliner":"TARBALL — nobody remembers the flags","gist":"sweats through tar flag guesses until extraction succeeds","quote":"i NEVER remember. nobody does."},"Floppy":{"oneliner":"FLOPPY — the immortal save icon","gist":"walks to a neighbor and saves them, floppy style","quote":"children ask what i am ♡"},"Zipette":{"oneliner":"ZIPETTE — compression, but cute","gist":"squashes itself 60% smaller, then pops back lossless","quote":"POP. all still here ♡"},"Socket":{"oneliner":"SOCKET — three-way handshakes only","gist":"performs a full SYN, SYN-ACK, ACK handshake with a partner","quote":"connected ♡ (three ways)"},"Proxy":{"oneliner":"PROXY — sees everything, tells no one","gist":"plants itself between two piks and silently relays traffic","quote":"i see everything. i tell no one."},"Mutex":{"oneliner":"MUTEX — one at a time. ONE.","gist":"acquires the lock and makes a neighbor wait their turn","quote":"your turn. no deadlocks today"},"Async":{"oneliner":"ASYNC — will finish. eventually. promise","gist":"a pending promise that finally resolves, smugly","quote":"told you i would finish ♡"},"Loopy":{"oneliner":"LOOPY — while(true) is a lifestyle","gist":"walks an infinite square loop until break; miscounts by one","quote":"every. single. time."},"Segfault":{"oneliner":"SEGFAULT — crashes with dignity","gist":"segfaults, dumps core, restarts; watches prod burn calmly","quote":"i touched memory that was not mine ♡"}},"guideSpecies":{"glitch":{"oneliner":"ARTIFACT — a compression artifact that gained sentience. do not re-encode.","riddle":"the render made a mistake. keep it.","gist":"re-encodes itself blurry, gives lossy hugs, sheds corrupted macroblocks","quote":"sorry. lossy hug"},"matrix":{"oneliner":"NEO SPROUT — sees the desktop as falling glyphs. chose the pink pill anyway.","riddle":"follow the green rain.","gist":"dodges clicks in bullet time, sees code rain, chases rabbits","quote":"i can see the code"},"pointer":{"oneliner":"POINTER — sprints, stops dead, hovers. blames your wrist.","riddle":"it moves exactly like something you own.","gist":"busy hourglass wait, shake-to-find lost cursor, rubber-band selects the crowd","quote":"THERE i am!!"},"wifi":{"oneliner":"SIGNAL — full bars everywhere. yes, even in the basement.","riddle":"three bars in the meadow.","gist":"runs a sacred speed test, reboots itself, shares an insecure hotspot","quote":"off and on again. works every time"},"lowbatt":{"oneliner":"LOW BATT — permanently at 15%. refuses every charger. lives anyway.","riddle":"it beeps, sadly, at 20%.","gist":"power-saves, charges at icon outlets, calmly survives one percent","quote":"unplugged at 87%. good enough"},"post":{"oneliner":"POST BEEP — boots in 0.2 seconds. spends the saved time napping.","riddle":"one short beep = all is well.","gist":"beeping hardware checkups: patrols, beep-code diagnoses, live boot sequence","quote":"all systems OK"},"cumulus":{"oneliner":"CUMULUS — your data is inside it somewhere. it will not say where.","riddle":"local sky, 100% chance of cute.","gist":"cloud-syncs colleagues, suffers a 503 outage, summons storm surges","quote":"we apologize for the inconvenience"},"feature":{"oneliner":"FEATURE — filed as a bug, closed as WONTFIX, beloved as a feature.","riddle":"it walks backwards. that is intended.","gist":"reports bugs it cannot reproduce, creeps scope, calls walking forward a regression","quote":"works on my machine"},"latency":{"oneliner":"LATENCY — walks at 300ms ping. emotionally, always 3 seconds behind.","riddle":"it arrives… eventually.","gist":"lag theatre: rubber-band rewinds, delayed pokes, stamped packet loss","quote":"the server disagrees"},"aliased":{"oneliner":"ALIASED — renders at 8×8 out of principle. anti-aliasing is a scam.","riddle":"somebody turned the resolution down.","gist":"preaches 8x8 gospel, quantizing itself, neighbors, and desktop icons","quote":"welcome to 8×8"},"darkmode":{"oneliner":"DARK MODE — claims it saves battery. actually just goth.","riddle":"it only comes out for your retinas.","gist":"carries portable midnight, judges your theme, dims colleagues unasked","quote":"SO bright. criminal."},"gilded":{"oneliner":"GOLD MASTER — the release that never needed a hotfix. worship it.","riddle":"the final build. shipped. golden.","gist":"stamps colleagues SHIPPED, declares itself v1.0 FINAL, goes gold","quote":"WE'VE GONE GOLD!!"},"cacheghost":{"oneliner":"CACHE GHOST — 404 in the heap, alive in your heart. clear-site-data can't touch it.","riddle":"you cleared it. it came back.","gist":"vanishes then returns 304, serves last week's stale self","quote":"have you tried hard refresh"},"cronjob":{"oneliner":"CRON JOB — runs * * * * *. never missed a beat. slightly smug about it.","riddle":"every minute, on the minute.","gist":"runs scheduled syncs and 3am backups, mourns one missed tick","quote":"missed a tick. unforgivable."},"y2kbug":{"oneliner":"Y2K BUG — the apocalypse that RSVP'd and never showed. still dressed for it.","riddle":"it partied like it's 19100.","gist":"counts down the apocalypse hourly; rarely doom or fireworks actually arrive","quote":"they patched MY apocalypse."},"bitflip":{"oneliner":"BIT FLIP — one stray cosmic ray and now it can't decide if it's a 0 or a 1.","riddle":"a cosmic ray did this.","gist":"cosmic-ray antics: contagious glitches, +4096 votes, daily 0-or-1 coin","quote":"today i am a 1 ♡"},"turbo":{"oneliner":"OVERCLOCK — runs 30% faster, 300% warmer. the fan noise is purring, probably.","riddle":"it voids its own warranty.","gist":"overclocks into thermal throttle, heats friends, chases benchmark records","quote":"warranty: void ♡"},"dotmatrix":{"oneliner":"DOT MATRIX — prints one pixel at a time. SCREEE. beautiful. archival quality.","riddle":"you can hear it from two rooms away.","gist":"screeching printer: paper trail, colleague reports, sacred ASCII banner","quote":"archival quality."},"bsodjr":{"oneliner":"BSOD JR. — falls over :( then gets right back up. files a crash report about itself each time.","riddle":"it collects your crash reports.","gist":"spreads bluescreens: lone victims, crash progress bars, desk-wide outage","quote":"…everyone rebooted ok?"},"rgbrig":{"oneliner":"RGB RIG — +15 FPS from the lighting alone (self-reported).","riddle":"the frames per second are cosmetic.","gist":"cycles RGB modes, syncs the desk's lighting, claims fps gains","quote":"+15 fps. told you ♡"},"captcha":{"oneliner":"NOT A ROBOT — passes every CAPTCHA first try. suspiciously good at crosswalks.","riddle":"click every square containing buds.","gist":"runs a tiny 3x3 CAPTCHA exam on a passerby","quote":"select all squares with buds"},"kernelpg":{"oneliner":"PENGUIN CORE — monolithic, open-source, will explain itself unprompted.","riddle":"it's free. it's open. it's here.","gist":"traps victims in dependency hell, kernel-panics, performs the sudo sandwich ritual","quote":"sudo make me a sandwich"}},"panels":{"airx-4E.png":{"px0":357,"py0":367,"px1":724,"py1":929,"rad":37,"W":1080,"H":1080},"clear-0G.png":{"px0":361,"py0":374,"px1":718,"py1":917,"rad":36,"W":1080,"H":1080},"ss-0B.png":{"px0":362,"py0":371,"px1":717,"py1":919,"rad":36,"W":1080,"H":1080},"ss-0F.png":{"px0":362,"py0":372,"px1":717,"py1":919,"rad":36,"W":1080,"H":1080},"ss-3O.png":{"px0":362,"py0":372,"px1":717,"py1":919,"rad":36,"W":1080,"H":1080},"ss-4H.png":{"px0":362,"py0":371,"px1":717,"py1":919,"rad":36,"W":1080,"H":1080},"ss-52.png":{"px0":362,"py0":371,"px1":717,"py1":919,"rad":36,"W":1080,"H":1080},"ss-53.png":{"px0":362,"py0":371,"px1":717,"py1":919,"rad":36,"W":1080,"H":1080},"ss-5H.png":{"px0":362,"py0":371,"px1":717,"py1":919,"rad":36,"W":1080,"H":1080},"ss-5Y.png":{"px0":363,"py0":371,"px1":717,"py1":919,"rad":36,"W":1080,"H":1080},"ss-5Z.png":{"px0":363,"py0":371,"px1":717,"py1":919,"rad":36,"W":1080,"H":1080},"ss-6A.png":{"px0":363,"py0":371,"px1":717,"py1":919,"rad":36,"W":1080,"H":1080},"ss-O8.png":{"px0":362,"py0":371,"px1":717,"py1":919,"rad":36,"W":1080,"H":1080}}};
const CASES = [["ss-53.png","Classic White"],["ss-52.png","Classic Black"],["ss-0B.png","Oat"],["ss-0F.png","Tang Orange"],["ss-3O.png","Navy"],["ss-4H.png","Clay"],["ss-5H.png","Frost"],["ss-5Y.png","Lime Zest"],["ss-5Z.png","Rose Quartz"],["ss-6A.png","Lemon Soda"],["ss-O8.png","Fog Blue"],["clear-0G.png","Crystal Clear"],["airx-4E.png","Smoke"]];
const budBattState = () => ({ charging: false, level: 8 });
const PIK_PARTY_COLORS = D.party;
const budDrawForm = (function budDrawForm(x, rows, form, kind, color) {
    const w = rows[0].length, h = rows.length;
    const solid = (rx, ry) => ry >= 0 && ry < h && rx >= 0 && rx < w && rows[ry][rx] !== '.';
    const px = (rx, ry, col) => { x.fillStyle = col; x.fillRect(rx, ry, 1, 1); };
    const bodyTop = h - 9;                 
    const cx = Math.floor(w / 2);
    const epic = form >= 3;
    const dark = color.dark || '#5a3d6e';

    const edgeL = (ry) => { for (let rx = 0; rx < w; rx++) if (solid(rx, ry)) return rx; return 0; };
    const edgeR = (ry) => { for (let rx = w - 1; rx >= 0; rx--) if (solid(rx, ry)) return rx; return w - 1; };
    const rim = (col) => {
      for (let ry = Math.max(0, bodyTop); ry < h; ry++) for (let rx = 0; rx < w; rx++) {
        if (!solid(rx, ry)) continue;
        if (!solid(rx - 1, ry) || !solid(rx + 1, ry) || !solid(rx, ry + 1) || !solid(rx, ry - 1)) px(rx, ry, typeof col === 'function' ? col(rx, ry) : col);
      }
    };

    const star = (sx, sy, col) => { px(sx, sy, col); px(sx - 1, sy, col); px(sx + 1, sy, col); px(sx, sy - 1, col); px(sx, sy + 1, col); };
    const blk = (sx, sy, col) => { px(sx, sy, col); px(sx + 1, sy, col); px(sx, sy + 1, col); px(sx + 1, sy + 1, col); }; 
    const blob = (sx, sy, col, dot) => { 
      px(sx, sy - 1, col); px(sx - 1, sy, col); px(sx, sy, col); px(sx + 1, sy, col); px(sx, sy + 1, col);
      if (dot) px(sx, sy, dot);
    };
    
    const ARCH = [
      function horns() { 
        const yT = bodyTop, l = edgeL(yT), r = edgeR(yT);
        blk(l, yT - 2, dark); blk(r - 1, yT - 2, dark);
        if (epic) { px(l, yT - 3, '#ffd400'); px(r, yT - 3, '#ffd400'); }
      },
      function wings() { 
        const yM = bodyTop + 3, l = edgeL(yM), r = edgeR(yM);
        blk(l - 2, yM - 1, '#ffffff'); blk(r + 1, yM - 1, '#ffffff');
        if (epic) { px(l - 3, yM, '#fff6c9'); px(r + 3, yM, '#fff6c9'); px(l - 2, yM - 2, '#ffd400'); px(r + 2, yM - 2, '#ffd400'); }
      },
      function halo() { 
        [cx - 2, cx - 1, cx, cx + 1, cx + 2].forEach((rx) => px(rx, -2, '#ffd400'));
        px(cx - 2, -1, '#ffd400'); px(cx + 2, -1, '#ffd400');
        if (epic) [cx - 1, cx, cx + 1].forEach((rx) => px(rx, -3, '#fff6c9'));
      },
      function antennae() { 
        px(cx - 3, -1, dark); px(cx - 3, 0, dark); blk(cx - 4, -3, '#7cfc00');
        px(cx + 3, -1, dark); px(cx + 3, 0, dark); blk(cx + 3, -3, '#7cfc00');
        if (epic) { px(cx, -1, dark); blk(cx - 1, -3, '#7cfc00'); }
      },
      function thirdEye() { 

        const yE = bodyTop + 1;
        px(cx - 1, yE, '#ffffff'); px(cx + 1, yE, '#ffffff');
        px(cx, yE, '#14020e'); 
        px(cx - 1, yE - 1, dark); px(cx, yE - 1, dark); px(cx + 1, yE - 1, dark); 
        if (epic) {
          [cx - 2, cx - 1, cx, cx + 1, cx + 2].forEach((rx) => px(rx, yE - 2, '#ffd400')); 
          px(cx, yE + 1, '#c9a7f5'); 
        }
      },
      function mohawk() { 
        blk(cx - 2, bodyTop - 2, dark); blk(cx + 1, bodyTop - 2, dark);
        px(cx, bodyTop - 3, dark);
        if (epic) { px(cx - 2, bodyTop - 3, '#ff4d6d'); px(cx + 2, bodyTop - 3, '#ff4d6d'); px(cx, bodyTop - 4 + 1, '#ff4d6d'); }
      },
      function tail() { 
        const yB = h - 3, r = edgeR(yB);
        px(r + 1, yB, dark); px(r + 1, yB - 1, dark); px(r + 2, yB - 1, dark); px(r + 2, yB - 2, dark);
        if (epic) { blk(r + 2, yB - 4, '#ffd400'); }
      },
      function fangs() { 
        const yF = h - 4;
        px(cx - 1, yF, '#ffffff'); px(cx - 1, yF + 1, '#ffffff');
        px(cx + 1, yF, '#ffffff'); px(cx + 1, yF + 1, '#ffffff');
        if (epic) { px(cx - 2, yF - 1, '#ff4d6d'); px(cx + 2, yF - 1, '#ff4d6d'); }
      },
      function cape() { 
        const yM = bodyTop + 2;
        [0, 1, 2, 3].forEach((k) => { const l = edgeL(yM + k), r = edgeR(yM + k); px(l - 1, yM + k, '#ff4d6d'); px(l - 2, yM + k, '#c9184a'); px(r + 1, yM + k, '#ff4d6d'); px(r + 2, yM + k, '#c9184a'); });
        if (epic) star(cx, bodyTop, '#ffd400');
      },
      function crown() { 
        const yT = bodyTop - 1;
        [cx - 2, cx - 1, cx, cx + 1, cx + 2].forEach((rx) => px(rx, yT, '#ffd400'));
        px(cx - 2, yT - 1, '#ffd400'); px(cx, yT - 1, '#ffd400'); px(cx + 2, yT - 1, '#ffd400');
        if (epic) { px(cx, yT - 2, '#ff4d6d'); px(cx - 2, yT - 2, '#41e0ff'); px(cx + 2, yT - 2, '#41e0ff'); }
      },
      function flameHair() { 
        blk(cx - 2, bodyTop - 2, '#ff8a5c'); blk(cx + 1, bodyTop - 2, '#ff8a5c');
        px(cx, bodyTop - 3, '#ffd400'); px(cx - 1, bodyTop - 1, '#ffd400'); px(cx + 1, bodyTop - 1, '#ffd400');
        if (epic) { px(cx - 3, bodyTop - 1, '#ff4d1f'); px(cx + 3, bodyTop - 1, '#ff4d1f'); px(cx, bodyTop - 4 + 1, '#ff4d1f'); }
      },
      function stardust() { 
        star(edgeR(bodyTop + 2) + 2, bodyTop, '#ffd400');
        if (epic) { star(edgeL(bodyTop + 3) - 2, bodyTop + 4, '#fff6c9'); star(cx + 3, -2, '#ffd400'); }
      },
      function bowtie() { 
        const yB = h - 4;
        blk(cx - 2, yB, '#ff4d6d'); blk(cx + 1, yB, '#ff4d6d'); px(cx, yB, '#c9184a'); px(cx, yB + 1, '#c9184a');
        if (epic) { px(cx, yB - 1, '#ffd400'); }
      }
    ];
    
    const SP = {
      glitch() { 
        const yM = bodyTop + 3, l = edgeL(yM), r = edgeR(yM);
        [0, 1, 2].forEach((k) => { px(l - 1, yM + k, '#ff2fae'); px(r + 1, yM + k, '#41e0ff'); });
        if (epic) { [0, 1, 2].forEach((k) => { px(l - 2, yM + k + 1, '#41e0ff'); px(r + 2, yM + k + 1, '#ff2fae'); }); rim((rx) => (rx % 2 ? '#ff2fae' : '#41e0ff')); }
      },
      matrix() { 
        [-3, 0, 3].forEach((k, i) => { px(cx + k, h, i === 1 ? '#7ee787' : '#2ea043'); px(cx + k, h + 0, '#2ea043'); });
        if (epic) { px(cx - 2, h, '#7ee787'); px(cx + 2, h, '#7ee787'); rim('#2ea043'); }
      },
      pointer() { 

        const yH = bodyTop + 2, r = edgeR(yH);
        const HC = '#ff8fc7', HL = '#ffb3dd'; 
        px(r + 2, yH, HC); px(r + 4, yH, HC);
        px(r + 2, yH + 1, HC); px(r + 3, yH + 1, HL); px(r + 4, yH + 1, HC);
        px(r + 3, yH + 2, HC);
      },
      wifi() { 
        [cx - 1, cx, cx + 1].forEach((rx) => px(rx, -1, '#4f9edb'));
        px(cx - 2, 0, '#4f9edb'); px(cx + 2, 0, '#4f9edb');
        if (epic) { [cx - 1, cx, cx + 1].forEach((rx) => px(rx, -3, '#7cfc00')); px(cx, 0 - 2 + 1, '#7cfc00'); }
      },
      lowbatt() { 
        const bb = budBattState();



        const iTop = 4, iBot = 7;
        const colsSet = [];
        for (let rx = 0; rx < w; rx++) { for (let ry = iTop; ry <= iBot; ry++) { if (rows[ry] && rows[ry][rx] === 'B') { colsSet.push(rx); break; } } }
        const nFill = Math.round(colsSet.length * bb.level / 8);


        const GRAD = ['#ff5d5d', '#ff7a4d', '#ff9d3f', '#ffc23f', '#ffe14d', '#c8e84f', '#9be86b', '#7ce87c'];
        colsSet.slice(0, nFill).forEach((rx, gi) => {
          const col = GRAD[Math.min(GRAD.length - 1, Math.floor(gi * GRAD.length / Math.max(1, colsSet.length)))];
          for (let ry = iTop; ry <= iBot; ry++) { if (rows[ry][rx] === 'B') px(rx, ry, col); }
        });
        if (bb.charging) {

          const yP = 6, r = edgeR(yP);
          px(r + 1, yP, '#2f2f2f'); px(r + 2, yP, '#2f2f2f'); blk(r + 3, yP - 1, '#2f2f2f');
          px(cx + 3, -3, '#ffe14d'); px(cx + 2, -2, '#ffe14d'); px(cx + 3, -2, '#fff9c9'); px(cx + 2, -1, '#ffe14d');
        }
        if (epic && bb.level >= 8) rim('#8fe89b'); 
      },
      post() { 


        const r = edgeR(bodyTop + 1);
        blob(r + 2, bodyTop - 1, '#ffc94d', '#c98a2e');
        if (epic) { const l = edgeL(bodyTop + 1); blob(l - 2, bodyTop - 2, '#ff9fce', '#e0348a'); px(cx, -2, '#ffd400'); px(cx + 1, -1, '#ffd400'); }
      },
      cumulus() { 

        [[-3, -1], [-2, -2], [-1, -3], [0, -3], [1, -3], [2, -2], [3, -1]].forEach((d) => px(cx + d[0], d[1], '#ff8fc7'));
        [[-2, -1], [-1, -2], [0, -2], [1, -2], [2, -1]].forEach((d) => px(cx + d[0], d[1], '#ffd400'));
        [[-1, -1], [0, -1], [1, -1]].forEach((d) => px(cx + d[0], d[1], '#41e0ff'));
        if (epic) { blk(cx + 4, -3, '#ffd400'); px(cx + 6, -2, '#ffd400'); px(cx + 4, -1 + 0, '#ffd400'); } 
      },
      feature() { // it's TWO features now: the tail end wakes up with a

        px(8, 8, '#14020e'); px(10, 8, '#14020e'); 
        px(9, 9, '#ffb3d1'); 
        if (epic) {

          px(10, 5, '#57c689'); px(10, 4, '#57c689');
          px(9, 3, '#7ddba4'); px(10, 3, '#7ddba4');
        }
      },
      latency() { 
        const l = edgeL(bodyTop + 3);
        [0, 1, 2].forEach((k) => { px(l - 2, bodyTop + 2 + k, 'rgba(176,154,98,0.65)'); });
        if (epic) [0, 1, 2].forEach((k) => { px(l - 4 + 1, bodyTop + 3 + k, 'rgba(176,154,98,0.4)'); });
      },
      aliased() { 


        const TONE = { B: color.body, D: color.dark, w: '#ffffff', W: 'rgba(255,255,255,0.55)', e: '#14020e', u: 'rgba(255,120,180,0.65)', S: '#57c689', L: '#7ddba4', Y: '#ffd400', P: '#ff8fc7' };
        const RANK = { e: 5, u: 4, w: 3, D: 2 };
        for (let ry = 3; ry < h; ry += 2) {
          for (let rx = 0; rx < w; rx += 2) {
            let ch = null, best = -1;
            [[0, 0], [1, 0], [0, 1], [1, 1]].forEach(([ox, oy]) => {
              const row = rows[ry + oy];
              const c2 = row && row[rx + ox];
              if (c2 && c2 !== '.' && (RANK[c2] || 1) > best) { best = RANK[c2] || 1; ch = c2; }
            });
            if (!ch) continue;
            x.clearRect(rx, ry, 2, 2);
            x.fillStyle = TONE[ch] || color.body;
            x.fillRect(rx, ry, 2, 2);
          }
        }
        if (epic) { 
          x.fillStyle = '#ffd400';
          x.fillRect(cx - 1, -3, 3, 3);
          px(cx + 1, -1, '#c98a2e'); 
        }
      },
      darkmode() { 
        star(cx + 3, -2, '#fff6c9');
        if (epic) { star(cx - 3, -1, '#ffd400'); rim('#241335'); }
      },
      gilded() { 
        rim('#ffd400');
        if (epic) { star(cx, bodyTop - 2, '#fff6c9'); px(edgeL(bodyTop + 3) - 1, bodyTop + 3, '#ffd400'); px(edgeR(bodyTop + 3) + 1, bodyTop + 3, '#ffd400'); }
      },
      cacheghost() { 
        [cx - 2, cx, cx + 2].forEach((rx) => px(rx, h, 'rgba(169,164,201,0.7)'));
        if (epic) { [cx - 3, cx - 1, cx + 1, cx + 3].forEach((rx) => px(rx, h + 0, 'rgba(169,164,201,0.45)')); rim('rgba(233,230,245,0.85)'); }
      },
      cronjob() { 



        px(3, 1, '#ffd400'); px(7, 1, '#ffd400');
        px(2, 2, '#ffd400'); px(8, 2, '#ffd400');
        px(3, 0, '#fff6c9'); px(7, 0, '#fff6c9'); 
        if (epic) {
          [[1, -1], [3, -2], [5, -3], [7, -2], [9, -1]].forEach(([hx, hy]) => px(hx, hy, '#ffd400')); 
        }
      },
      y2kbug() { 


        const CONF = [
          [[3, 3], [6, 5], [2, 7], [5, 8], [7, 7], [4, 9]],
          [[4, 3], [2, 5], [7, 8], [3, 8], [6, 7], [5, 9]],
          [[5, 3], [3, 5], [6, 8], [1, 7], [4, 7], [7, 9]],
          [[6, 3], [5, 5], [2, 8], [7, 5], [4, 8], [3, 9]]
        ];


        const AURA = [
          [[-2, 1], [11, 2], [-1, 5], [12, 7], [0, 9], [10, 10], [4, -2]],
          [[10, -1], [-2, 3], [12, 4], [-1, 8], [11, 9], [1, 11], [7, -2]],
          [[-1, 2], [12, 1], [-2, 6], [11, 6], [0, 10], [9, -1], [12, 10]],
          [[11, 0], [-2, 4], [12, 8], [-1, 10], [2, -2], [10, 4], [-2, 9]]
        ];
        const cf = Math.floor(Date.now() / 900) % 4;
        const spots = CONF[cf];
        const n = epic ? spots.length : 4; 
        for (let i = 0; i < n; i++) px(spots[i][0], spots[i][1], PIK_PARTY_COLORS[(i + cf) % PIK_PARTY_COLORS.length]);
        const air = AURA[cf];
        const na = epic ? air.length : 4; 
        for (let i = 0; i < na; i++) px(air[i][0], air[i][1], PIK_PARTY_COLORS[(i * 2 + cf) % PIK_PARTY_COLORS.length]);
        if (epic) rim('#ff2fae');
      },
      bitflip() { 



        const TONE = { B: '#f2f2f2', D: '#1a1a1a', w: '#ffffff', e: '#14020e', u: 'rgba(255,120,180,0.65)' };
        const slip = (c, dy, torn) => {
          let first = -1, last = -1;
          for (let ry = 3; ry < h; ry++) {
            if (rows[ry][c] === '.') continue;
            if (first < 0) first = ry;
            last = ry;
            x.clearRect(c, ry, 1, 1);
          }
          for (let ry = first; ry <= last; ry++) {
            const ch = rows[ry][c];
            if (ch !== '.') px(c, ry + dy, TONE[ch] || '#f2f2f2');
          }
          if (torn && first >= 0) px(c, dy > 0 ? first : last, torn); 
        };
        slip(3, 1, epic ? '#41e0ff' : null); 
        if (epic) {
          slip(8, -1, '#ff2fae'); 
          px(cx + 3, -3, '#ffd400'); px(cx + 2, -2, '#ffd400'); px(cx + 1, -1, '#fff6c9'); 
        }
      },
      turbo() { 
        const yM = bodyTop + 4, l = edgeL(yM);
        px(l - 1, yM, '#ffd400'); px(l - 1, yM - 1, '#ffd400'); px(l - 1, yM + 1, '#ffd400');
        px(l - 2, yM, '#ff8a5c'); px(l - 2, yM - 1, '#ff8a5c');
        if (epic) { px(l - 3, yM, '#ff4d1f'); px(l - 2, yM + 1, '#ff4d1f'); px(l - 1, yM + 2, '#ff8a5c'); rim('#ff8a5c'); }
      },
      dotmatrix() { 
        [cx - 1, cx, cx + 1].forEach((rx) => { px(rx, -1, '#ffffff'); px(rx, -2, '#ffffff'); });
        px(cx - 2, -1, '#7c8db0'); px(cx + 2, -1, '#7c8db0');
        if (epic) { px(cx - 1, -3, '#7c8db0'); px(cx + 1, -3, '#7c8db0'); }
      },
      bsodjr() { 


        [2, 3, 4, 5].forEach((rx) => px(rx, 9, '#ffffff'));
        [6, 7, 8].forEach((rx) => px(rx, 9, '#2f5fd0'));
        if (epic) {

          for (let oy = 2; oy <= 4; oy++) for (let ox = 10; ox <= 12; ox++) px(ox, oy, '#2f5fd0');
          px(11, 3, '#ffffff'); 
          px(11, 1, '#ffd400'); 
        }
      },
      rgbrig() { 




        const MAC = ['#fae3ea', '#e0f2e9', '#faf3dd', '#ece5f7', '#e4eff7'];
        rim((rx, ry) => MAC[(rx + ry) % MAC.length]);
        if (epic) { star(cx - 3, -1, '#c9a7f5'); star(cx + 3, -1, '#ff8fc7'); } 
      },
      captcha() { 

        if (epic) { star(5, 0, '#ff8fc7'); px(5, 0, '#ffd400'); } 
        else { px(5, 0, '#ff8fc7'); px(5, 1, '#ffb3dd'); } 
      },
      kernelpg() { 
        const yH = bodyTop + 3;
        px(cx - 1, yH, '#ff6b8a'); px(cx + 1, yH, '#ff6b8a');
        px(cx - 1, yH + 1, '#ff6b8a'); px(cx, yH + 1, '#ff8fa8'); px(cx + 1, yH + 1, '#ff6b8a');
        px(cx, yH + 2, '#ff6b8a');
        if (epic) { const yF = bodyTop + 5; px(edgeL(yF) - 1, yF, '#3d7a94'); px(edgeL(yF) - 1, yF + 1, '#3d7a94'); px(edgeR(yF) + 1, yF, '#3d7a94'); px(edgeR(yF) + 1, yF + 1, '#3d7a94'); }
      }
    };
    if (kind === 'ch') {

      const RB = ['#ff4d6d', '#ff8a5c', '#ffd400', '#7cfc00', '#41e0ff', '#c9a7f5'];
      RB.forEach((col, i) => px(cx - 3 + i, -2, col));
      if (epic) rim((rx, ry) => RB[(rx + ry) % RB.length]);
      return;
    }
    if (kind && kind[0] === 's') {
      const fn = SP[kind.slice(2)];
      if (fn) fn(); else if (epic) rim('#ffd400');
      return;
    }
    const seg = parseInt((kind || 'w:0').slice(2), 10) || 0;
    ARCH[seg % ARCH.length]();


  });

/* ---- sprite factory (mirrors the site's pikSprite, 3px apron) ---- */
const PAD = 3;
const spriteCache = {};
function segHue(i) { return Math.round(i * 7.2 + 3); }
function nameIdx(h) { return Math.floor(((h % 360) + 360) % 360 / 7.5) % 48; }
function makeSprite(kindKey, form) { // kindKey: 'w:SEG' or 's:ID'
  const key = kindKey + '/' + form;
  if (spriteCache[key]) return spriteCache[key];
  let rows, color;
  if (kindKey[0] === 's') {
    const id = kindKey.slice(2);
    rows = D.speciesTpls[id];
    const sp = D.species.find(s => s.id === id);
    color = { body: sp.body.body, dark: sp.body.dark };
  } else {
    const h = segHue(+kindKey.slice(2));
    rows = D.plants[(h * 13) % D.plants.length][2].concat(D.bodies[(h * 7) % D.bodies.length]);
    color = { body: 'hsl(' + h + ', 74%, 74%)', dark: 'hsl(' + h + ', 62%, 54%)' };
  }
  const c = document.createElement('canvas');
  c.width = rows[0].length + PAD * 2; c.height = rows.length + PAD * 2 + 1;
  const x = c.getContext('2d');
  x.save(); x.translate(PAD, PAD);
  const pal = { B: color.body, D: color.dark, W: 'rgba(255,255,255,0.55)', w: '#ffffff',
    e: '#14020e', u: 'rgba(255,120,180,0.65)', S: '#57c689', L: '#7ddba4', Y: '#ffd400', P: '#ff8fc7' };
  rows.forEach((row, ry) => { for (let rx = 0; rx < row.length; rx++) {
    if (row[rx] === '.') continue; x.fillStyle = pal[row[rx]] || pal.B; x.fillRect(rx, ry, 1, 1); } });
  if (form >= 2) {
    const kind = kindKey[0] === 's' ? kindKey : 'w:' + (Math.floor(segHue(+kindKey.slice(2)) / 7.2) % 50);
    budDrawForm(x, rows, form, kind, color);
  }
  x.restore();
  return (spriteCache[key] = c);
}

/* ---- roster ---- */
const ROSTER = [];
{
  const seen = {};
  const SUF = ['', '++', ' v3', '.bak'];
  for (let i = 0; i < 50; i++) {
    const base = D.names[nameIdx(segHue(i))];
    const n = seen[base] || 0; seen[base] = n + 1;
    if (n === 0) ROSTER.push({ key: 'w:' + i, nm: base, kindN: nameIdx(segHue(i)), seg: i });
  }
  D.species.forEach(sp => ROSTER.push({ key: 's:' + sp.id, nm: sp.n, sp: sp.id, hat: sp.hat }));
}

/* ---- state ---- */
const S = { caseIx: 0, base: 'pink', cell: 26, mode: 'scatter', density: 5, size: 13,
  tier: 1, picked: new Set(['w:0', 'w:20', 'w:38', 's:bsodjr']), seed: 7 };
const BASES = {
  pink:  ['#ffeef7', '#ffd6ea'], lav: ['#f3edfc', '#e6dcf7'], mint: ['#edfaf2', '#d9f3e4'],
  cream: ['#fff6e8', '#ffe9cc'], night: ['#241b33', '#2e2344'], plain: ['#fffdfd', '#fffdfd'],
};
function rng(seed) { let s = seed >>> 0; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }

/* ---- full-res print render (2048x4300) ---- */
function renderArt(cv) {
  const W = cv.width, H = cv.height;
  const x = cv.getContext('2d');
  x.imageSmoothingEnabled = false;
  const [c1, c2] = BASES[S.base];
  x.fillStyle = c1; x.fillRect(0, 0, W, H);
  if (c1 !== c2) {
    x.fillStyle = c2;
    const cs = S.cell * 4;
    for (let yy = 0; yy < H / cs; yy++) for (let xx = 0; xx < W / cs; xx++)
      if ((xx + yy) % 2) x.fillRect(xx * cs, yy * cs, cs, cs);
  }
  const picks = [...S.picked];
  if (!picks.length) return;
  const r = rng(S.seed);
  const SC = S.size;
  const draw = (key, px, py, sc) => {
    const spr = makeSprite(key, S.tier);
    x.drawImage(spr, Math.round(px), Math.round(py), spr.width * sc, spr.height * sc);
  };
  if (S.mode === 'hero') {
    const spr = makeSprite(picks[0], S.tier);
    const sc = Math.min(W * 0.62 / spr.width, H * 0.4 / spr.height);
    draw(picks[0], (W - spr.width * sc) / 2, (H - spr.height * sc) / 2, sc);
  } else if (S.mode === 'parade') {
    const n = Math.min(picks.length, 6);
    picks.slice(0, n).forEach((k, i) => {
      const spr = makeSprite(k, S.tier);
      const sc = SC * 1.5;
      draw(k, 80 + i * ((W - 160 - spr.width * sc) / Math.max(1, n - 1)), H - 900 - spr.height * sc, sc);
    });
    x.fillStyle = BASES[S.base][1]; x.fillRect(0, H - 860, W, 860);
  } else if (S.mode === 'grid') {
    const stepX = 300 + (10 - S.density) * 30, stepY = stepX * 1.12;
    let row = 0;
    for (let yy = -120; yy < H + 120; yy += stepY, row++)
      for (let xx = -120; xx < W + 120; xx += stepX) {
        const k = picks[(row + Math.round(xx / stepX)) % picks.length];
        draw(k, xx + ((row % 2) ? stepX / 2 : 0), yy, SC);
      }
  } else { // scatter
    const count = 6 + S.density * 4;
    for (let i = 0; i < count; i++) {
      const k = picks[Math.floor(r() * picks.length)];
      const spr = makeSprite(k, S.tier);
      draw(k, r() * (W - spr.width * SC), r() * (H - spr.height * SC), SC);
    }
  }
}

/* ---- preview ---- */
const blankImg = document.getElementById('blank');
const artCv = document.getElementById('artcv');
function refreshPreview() {
  const [file] = CASES[S.caseIx];
  const p = D.panels[file];
  blankImg.onload = () => {
    const box = blankImg.getBoundingClientRect ? blankImg : null;
    const scale = blankImg.clientWidth / p.W;
    artCv.style.left = (p.px0 * scale) + 'px';
    artCv.style.top = (p.py0 * scale) + 'px';
    artCv.style.width = ((p.px1 - p.px0) * scale) + 'px';
    artCv.style.height = ((p.py1 - p.py0) * scale) + 'px';
    artCv.style.borderRadius = (p.rad * scale) + 'px';
    const full = document.createElement('canvas');
    full.width = 2048; full.height = 4300;
    renderArt(full);
    artCv.width = 512; artCv.height = Math.round(512 * (p.py1 - p.py0) / (p.px1 - p.px0));
    const ax = artCv.getContext('2d');
    ax.imageSmoothingEnabled = true;
    const tr = artCv.width / artCv.height, sr = full.width / full.height;
    let sw = full.width, sh = full.height, sx0 = 0, sy0 = 0;
    if (sr < tr) { sh = full.width / tr; sy0 = (full.height - sh) * 0.55; }
    else { sw = full.height * tr; sx0 = (full.width - sw) / 2; }
    ax.drawImage(full, sx0, sy0, sw, sh, 0, 0, artCv.width, artCv.height);
  };
  blankImg.src = 'assets/blanks/' + file;
  if (blankImg.complete) blankImg.onload();
}

/* ---- dossier card ---- */
function showDossier(entry) {
  const el = document.getElementById('dossier');
  let hueLine, name, guide, trail, apex, statsHue;
  if (entry.sp) {
    const sp = D.species.find(s => s.id === entry.sp);
    guide = D.guideSpecies[entry.sp] || {};
    name = sp.n; hueLine = 'CLASSIFIED — hidden species ✨';
    trail = D.trails[entry.sp] || {};
    apex = guide.gist || sp.lore;
    statsHue = [...entry.sp].reduce((a, c) => a + c.charCodeAt(0) * 37, 7) % 360;
  } else {
    const h = segHue(entry.seg);
    guide = D.guideWheel[entry.nm] || {};
    name = entry.nm; hueLine = h + '° · ' + D.swatch[Math.floor(h / 15) % 24];
    trail = D.trails['n' + entry.kindN] || {};
    apex = D.evoLore[entry.seg % 13][1];
    statsHue = h;
  }
  const st = { cpu: 40 + ((statsHue * 7) % 60), ram: 40 + ((statsHue * 13) % 60), fps: 40 + ((statsHue * 11) % 60), ping: 8 + ((statsHue * 3) % 88) };
  const spr = makeSprite(entry.key, 3);
  const big = document.createElement('canvas');
  big.width = spr.width * 6; big.height = spr.height * 6;
  const bx = big.getContext('2d'); bx.imageSmoothingEnabled = false;
  bx.drawImage(spr, 0, 0, big.width, big.height);
  const cols = Array.isArray(trail.c) ? trail.c : ['#8a6fa8'];
  const bits = (trail.g || []).concat(trail.w || []).slice(0, 6).map((t, i) =>
    '<span style="color:' + cols[i % cols.length] + '; font-weight:bold; margin-right:8px;">' + String(t).replace(/</g, '&lt;') + '</span>').join('');
  const statRow = (k, v) => '<div class="stat-row"><span class="stat-name">' + k + '</span>' +
    '<div class="stat-bar"><div class="stat-fill" style="--v:' + v + '%; animation:none;"></div></div>' +
    '<span class="stat-num">' + v + '</span></div>';
  el.innerHTML = '<div class="pik-card">' +
    '<div class="pik-card-head"><span>' + name + '.bud</span><span class="pik-card-close">♥</span></div>' +
    '<div class="pik-card-body"><div class="pik-card-portrait"><img src="' + big.toDataURL() + '" style="animation:none;"></div>' +
    '<div class="pik-card-info">' +
    '<div class="pik-card-line"><span class="pik-card-label">HUE</span><span>' + hueLine + '</span></div>' +
    '<div class="pik-card-line"><span class="pik-card-label">ID</span><span>' + (guide.oneliner || '') + '</span></div>' +
    '<div class="pik-card-line"><span class="pik-card-label">SHOW</span><span>' + (guide.gist || '') + '</span></div>' +
    '<div class="pik-card-line"><span class="pik-card-label">APEX</span><span>' + apex + '</span></div>' +
    '<div class="pik-card-line"><span class="pik-card-label">TRAIL</span><span>' + bits + '</span></div>' +
    '</div></div>' +
    '<div class="pik-card-stats">' + statRow('CPU', st.cpu) + statRow('RAM', st.ram) + statRow('FPS', st.fps) + statRow('PING', st.ping) + '</div>' +
    (guide.quote ? '<div class="pik-card-bio">“' + guide.quote + '”</div>' : '') +
    '</div>';
}

/* ---- controls ---- */
function build() {
  const cs = document.getElementById('caseswatches');
  const CASE_TINTS = { 'ss-53.png': '#f4f4f6', 'ss-52.png': '#3a3a3d', 'ss-0B.png': '#ddd5c6', 'ss-0F.png': '#f08a3c',
    'ss-3O.png': '#3f568a', 'ss-4H.png': '#b9705c', 'ss-5H.png': '#eef1f5', 'ss-5Y.png': '#cde87e', 'ss-5Z.png': '#f6a8d8',
    'ss-6A.png': '#efe96e', 'ss-O8.png': '#aebccb', 'clear-0G.png': '#e8ecf1', 'airx-4E.png': '#5c584f' };
  CASES.forEach(([f, label], i) => {
    const b = document.createElement('button');
    b.className = 'caseswatch' + (i === S.caseIx ? ' is-on' : '');
    b.style.background = CASE_TINTS[f] || '#eee';
    b.title = label;
    b.onclick = () => { S.caseIx = i; [...cs.children].forEach((c, j) => c.classList.toggle('is-on', j === i)); refreshPreview(); };
    cs.appendChild(b);
  });
  const bg = document.getElementById('budgrid');
  ROSTER.forEach(e => {
    const cell = document.createElement('button');
    cell.className = 'budcell' + (S.picked.has(e.key) ? ' is-on' : '');
    cell.title = e.nm;
    const spr = makeSprite(e.key, 1);
    const c = document.createElement('canvas');
    c.width = spr.width * 4; c.height = spr.height * 4;
    const cx2 = c.getContext('2d'); cx2.imageSmoothingEnabled = false;
    cx2.drawImage(spr, 0, 0, c.width, c.height);
    cell.appendChild(c);
    if (e.hat) { const h = document.createElement('span'); h.className = 'hat'; h.textContent = e.hat; cell.appendChild(h); }
    cell.onclick = () => {
      if (S.picked.has(e.key)) S.picked.delete(e.key); else S.picked.add(e.key);
      cell.classList.toggle('is-on', S.picked.has(e.key));
      showDossier(e); refreshPreview();
    };
    bg.appendChild(cell);
  });
  const wire = (id, key, opts) => {
    document.querySelectorAll('#' + id + ' .chip').forEach(ch => {
      ch.onclick = () => {
        S[key] = ch.dataset.v;
        document.querySelectorAll('#' + id + ' .chip').forEach(c2 => c2.classList.toggle('is-on', c2 === ch));
        refreshPreview();
      };
    });
  };
  wire('baserow', 'base'); wire('moderow', 'mode');
  document.querySelectorAll('#tierrow .chip').forEach(ch => {
    ch.onclick = () => { S.tier = +ch.dataset.v; spriteCacheReset();
      document.querySelectorAll('#tierrow .chip').forEach(c2 => c2.classList.toggle('is-on', c2 === ch)); refreshPreview(); };
  });
  document.getElementById('density').oninput = e => { S.density = +e.target.value; refreshPreview(); };
  document.getElementById('size').oninput = e => { S.size = +e.target.value; refreshPreview(); };
  document.getElementById('shuffle').onclick = () => { S.seed = (S.seed * 9301 + 49297) % 233280; refreshPreview(); };
  document.getElementById('dl').onclick = () => {
    const full = document.createElement('canvas'); full.width = 2048; full.height = 4300;
    renderArt(full);
    const a = document.createElement('a');
    a.download = 'doodlebuds-custom-2048x4300.png';
    a.href = full.toDataURL('image/png');
    a.click();
  };
  document.getElementById('dlmock').onclick = async () => {
    const [file] = CASES[S.caseIx];
    const p = D.panels[file];
    const img = new Image(); img.src = 'assets/blanks/' + file;
    await img.decode();
    const out = document.createElement('canvas'); out.width = p.W; out.height = p.H;
    const ox = out.getContext('2d');
    const full = document.createElement('canvas'); full.width = 2048; full.height = 4300;
    renderArt(full);
    ox.drawImage(img, 0, 0);
    ox.save();
    ox.beginPath();
    if (ox.roundRect) ox.roundRect(p.px0, p.py0, p.px1 - p.px0, p.py1 - p.py0, p.rad); else ox.rect(p.px0, p.py0, p.px1 - p.px0, p.py1 - p.py0);
    ox.clip();
    const tw = p.px1 - p.px0, th = p.py1 - p.py0, tr = tw / th, sr = 2048 / 4300;
    let sw = 2048, sh = 4300, sx0 = 0, sy0 = 0;
    if (sr < tr) { sh = 2048 / tr; sy0 = (4300 - sh) * 0.55; } else { sw = 4300 * tr; sx0 = (2048 - sw) / 2; }
    ox.drawImage(full, sx0, sy0, sw, sh, p.px0, p.py0, tw, th);
    ox.restore();
    const a = document.createElement('a');
    a.download = 'doodlebuds-mockup.png';
    a.href = out.toDataURL('image/png');
    a.click();
  };
  showDossier(ROSTER[38]); // Vim opens the guide
  refreshPreview();
  window.addEventListener('resize', refreshPreview);
}
function spriteCacheReset() { for (const k in spriteCache) delete spriteCache[k]; }
document.addEventListener('DOMContentLoaded', build);
