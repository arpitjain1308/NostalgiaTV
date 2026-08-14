/* =========================================================
   NOSTALGIA TV — CHANNEL DATA
   ---------------------------------------------------------
   Edit this file to add, remove, or update channels.
   Nothing else in the site needs to change — index.html reads
   this array directly.

   Each channel needs:
     id          — unique short id, no spaces (used internally)
     number      — channel number shown on screen (e.g. 101)
     name        — real show name, shown on screen
     hindi       — show name in Hindi (shown as a subtitle)
     category    — "Kids" | "Action" | "Comedy" (or add your own —
                   just also add it to the CATEGORIES list in index.html)
     colorTheme  — hex color used for that channel's badge/branding
     provider    — "youtube" (plays a real playlist) or "demo"
                   (shows an animated placeholder — used automatically
                   if playlistId is left empty)
     playlistId  — the YouTube playlist ID (the part after list= in
                   the playlist URL). Must be an OFFICIAL playlist with
                   embedding enabled by its uploader — never a ripped
                   / reuploaded / unofficial source.

   To add a channel: copy one block below, change the values,
   and give it a channel number that isn't already used.

   To remove a channel: delete its whole { ... } block (don't
   forget to remove the trailing comma if it was the last one).
========================================================= */

window.NOSTALGIA_CHANNELS = [
  { id:"ben10",          number:101, name:"Ben 10",                       hindi:"बेन दस",                     category:"Action", colorTheme:"#3f8f6a", provider:"youtube", playlistId:"PLK9g8ni3KxUEmBTyGIAoZtCeu9-TMUdu9" },
  { id:"doraemon",       number:102, name:"Doraemon",                     hindi:"डोरेमोन",                    category:"Kids",   colorTheme:"#2e6db4", provider:"youtube", playlistId:"PLtkOexhoL1E8PjBjALkLHDikMtqlvFRz3" },
  { id:"bheem",          number:103, name:"Chhota Bheem",                 hindi:"छोटा भीम",                   category:"Kids",   colorTheme:"#dba53f", provider:"youtube", playlistId:"PL_J7KQaTDoWzFZOCZL8Q4_HXe5mUDaMC7" },
  { id:"shinchan",       number:104, name:"Shin Chan",                    hindi:"शिन चैन",                     category:"Comedy", colorTheme:"#c74a2e", provider:"youtube", playlistId:"PL-p3lXqFa5sK5iUA5LvwcPXI2150mG81a" },
  { id:"kristribalti",   number:105, name:"Krish Trish and Baltiboy",     hindi:"कृष त्रिष और बाल्टीबॉय",       category:"Kids",   colorTheme:"#7a4fa0", provider:"youtube", playlistId:"PLYo_vJdedAZU" },
  { id:"oggy",           number:106, name:"Oggy and the Cockroaches",     hindi:"ऑगी और तिलचट्टे",             category:"Comedy", colorTheme:"#4c7a4f", provider:"youtube", playlistId:"PLWRtCKKTD7jhruYeDoKRBs7Ze8kvDbDCg" },
  { id:"courage",        number:107, name:"Courage the Cowardly Dog",     hindi:"डरपोक कुत्ता",                category:"Comedy", colorTheme:"#6f4f8f", provider:"youtube", playlistId:"PLckQZM6PG6ql0dIrycjU6lw2nEFGILJoi" },
  { id:"mrbean",         number:108, name:"Mr. Bean",                     hindi:"मिस्टर बीन",                  category:"Comedy", colorTheme:"#a5311f", provider:"youtube", playlistId:"PL03E61EE42BBA9181" },
  { id:"henry",          number:109, name:"Bas Karo Henry",               hindi:"बस करो हेनरी",                category:"Comedy", colorTheme:"#6f93a8", provider:"youtube", playlistId:"PLJb4OQxDh-QU9GEnYD7SrwASiGFlbMwaG" },
  { id:"tomjerry",       number:110, name:"Tom and Jerry",                hindi:"टॉम एंड जेरी",                category:"Comedy", colorTheme:"#c9a13a", provider:"youtube", playlistId:"PLckQZM6PG6qkeSfQ7kx66nOnpF3WdZgfo" },
  { id:"thomasandfriends",  number:111, name:"Thomas and Friends",   hindi:"थॉमस एंड फ्रेंड्स",                category:"Kids", colorTheme:"#3a82c9", provider:"youtube", playlistId:"PLqlEMfBKk3tp0bhKK9bnngzSSwn7eoxgM" },
  { id:"haddimerabaddi",          number:112, name:"Haddi Mera Baddi",                        hindi:"हद्दी मेरा बद्दी",                       category:"Kids",   colorTheme:"#8b4513", provider:"youtube", playlistId:"PLURJ-_uVMgdRI950uTtX3-8-TUO8bK8YE" },
  { id:"ninjahattori",                number:113, name:"Ninja Hattori",                          hindi:"निंजा हत्तोरी",              category:"Kids", colorTheme:"#5d4037", provider:"youtube", playlistId:"PLnMNQ238a90IJoFJCPn3Osy8iHIqEQefr" },
  { id:"pinkpanther",              number:114, name:"Pink Panther",              hindi:"पिंक पैंथर",              category:"Kids", colorTheme:"#8E44AD", provider:"youtube", playlistId:"PLtS1NoNTpe8CYPxp59OECYEGiHZ0ds8pc" },
  { id:"dexterslaboratory",        number:115, name:"Dexter's Laboratory",        hindi:"डेक्सटर की प्रयोगशाला",    category:"Kids", colorTheme:"#E74C3C", provider:"youtube", playlistId:"PLcoBFEh0-1ogY5uz4tbZx3iDxfeXrZqdx" },
  { id:"phineasandferb",           number:116, name:"Phineas and Ferb",            hindi:"फिनीस और फर्ब",            category:"Kids", colorTheme:"#F39C12", provider:"youtube", playlistId:"PL_PgV-QHDFnGbdVOpPqEwWi1z4f6S3Qrz" },
  { id:"scoobydoo",                number:117, name:"Scooby-Doo",                  hindi:"स्कूबी-डू",                 category:"Kids", colorTheme:"#16A085", provider:"youtube", playlistId:"PLckQZM6PG6qmMbN0ZkyQQTSGJyyAR3Mw9" },
  { id:"lamput",                   number:118, name:"Lamput",                      hindi:"लैम्पट",                    category:"Kids", colorTheme:"#3498DB", provider:"youtube", playlistId:"PLckQZM6PG6qncK9mKXg092liCI-2VUlJ5" },
  { id:"teentitansgo",             number:119, name:"Teen Titans Go",              hindi:"टीन टाइटन्स गो",             category:"Kids", colorTheme:"#27AE60", provider:"youtube", playlistId:"PLckQZM6PG6qnHF7SKQFE8F7wATl0TUoYq" },
  { id:"motupatlu",          number:120, name:"Motu Patlu",       hindi:"मोटू पतलू",             category:"Kids", colorTheme:"#D35400", provider:"youtube", playlistId:"PL2XOPpYaVR4-Dn84fWdjBQO6Tcf2DORTp" },
  { id:"littlesingham",      number:121, name:"Little Singham",   hindi:"लिटिल सिंघम",          category:"Kids", colorTheme:"#C0392B", provider:"youtube", playlistId:"PLdhxSHmOPfNSSDIe5dp3v204zqhUJp-b2" },
  { id:"mad",                number:122, name:"M.A.D",            hindi:"मैड",                   category:"Kids", colorTheme:"#2980B9", provider:"youtube", playlistId:"PLdhxSHmOPfNS_iqS4NReuie8AEosYo5k9" },
  { id:"krishnabalaram",     number:123, name:"Krishna Balaram",  hindi:"कृष्ण बलराम",           category:"Kids", colorTheme:"#8E44AD", provider:"youtube", playlistId:"PL5vGYBRCB9YN0XS9ibnGlMRniPVMfnXAd" },
  { id:"pokemon",            number:124, name:"Pokemon",          hindi:"पोकेमॉन",               category:"Kids", colorTheme:"#F1C40F", provider:"youtube", playlistId:"PLcGIdDOOS2VD4q9Hx0FVwpabLHCFPim_T" },
  { id:"vikramandmunja", number:125, name:"Vikram and Munja",   hindi:"विक्रम और मुंजा",      category:"Kids", colorTheme:"#7D3C98", provider:"youtube", playlistId:"PLrS7zaXZSsuPkIodAuxVOS_vBCl5ngL5P" },
{ id:"powerpuffgirls",   number:126, name:"Powerpuff Girls",    hindi:"पावरपफ गर्ल्स",         category:"Kids", colorTheme:"#E91E63", provider:"youtube", playlistId:"PLLIU9nFd9IrEALGUz0Bak9LeB0xARiwLN" },
{ id:"webarebears",      number:127, name:"We Bare Bears",      hindi:"वी बेयर बियर्स",        category:"Kids", colorTheme:"#2E7D32", provider:"youtube", playlistId:"PLg6KfZlgBuDXwQ56IZ8tByQGgmgONP4Wr" },
{ id:"johnnytest",       number:128, name:"Johnny Test",        hindi:"जॉनी टेस्ट",            category:"Kids", colorTheme:"#1565C0", provider:"youtube", playlistId:"PLZ_Ugs8iFTlpiMcxSAC6u7sa7NKBbU2CB" },
{ id:"rollno21",          number:129, name:"Roll No. 21",       hindi:"रोल नंबर 21",           category:"Kids", colorTheme:"#F57C00", provider:"youtube", playlistId:"PLKRxH8XztcuA7oEY5ukz4b0qG2kvg74Qf" }
];
