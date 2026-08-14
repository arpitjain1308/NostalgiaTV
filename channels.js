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
  { id:"doraemon",       number:101, name:"Doraemon",                     hindi:"डोरेमोन",                    category:"Kids",   colorTheme:"#2e6db4", provider:"youtube", playlistId:"PLdylmcropajnrCwuOavRIui3oJcCiMe97" },
  { id:"ben10",          number:102, name:"Ben 10",                       hindi:"बेन दस",                     category:"Action", colorTheme:"#3f8f6a", provider:"youtube", playlistId:"PLckQZM6PG6qmYXuQ-yyorL5oZELWa2m_U" },
  { id:"bheem",          number:103, name:"Chhota Bheem",                 hindi:"छोटा भीम",                   category:"Kids",   colorTheme:"#dba53f", provider:"youtube", playlistId:"PL_J7KQaTDoWzFZOCZL8Q4_HXe5mUDaMC7" },
  { id:"shinchan",       number:104, name:"Shin Chan",                    hindi:"शिन चैन",                     category:"Comedy", colorTheme:"#c74a2e", provider:"youtube", playlistId:"PLTTCQD5UneeXWwerGsY43JrIezwWW0Tc4" },
  { id:"kristribalti",   number:105, name:"Krish Trish and Baltiboy",     hindi:"कृष त्रिष और बाल्टीबॉय",       category:"Kids",   colorTheme:"#7a4fa0", provider:"youtube", playlistId:"PLnizMbB3qjBjCfkHNqQugR5TwX9AHK_tQ" },
  { id:"oggy",           number:106, name:"Oggy and the Cockroaches",     hindi:"ऑगी और तिलचट्टे",             category:"Comedy", colorTheme:"#4c7a4f", provider:"youtube", playlistId:"PLWRtCKKTD7jhruYeDoKRBs7Ze8kvDbDCg" },
  { id:"courage",        number:107, name:"Courage the Cowardly Dog",     hindi:"डरपोक कुत्ता",                category:"Comedy", colorTheme:"#6f4f8f", provider:"youtube", playlistId:"PLckQZM6PG6ql0dIrycjU6lw2nEFGILJoi" },
  { id:"mrbean",         number:108, name:"Mr. Bean",                     hindi:"मिस्टर बीन",                  category:"Comedy", colorTheme:"#a5311f", provider:"youtube", playlistId:"PLSU-__dAGVFbS50AjfClDtiByhgQanWh4" },
  { id:"henry",          number:109, name:"Bas Karo Henry",               hindi:"बस करो हेनरी",                category:"Comedy", colorTheme:"#6f93a8", provider:"youtube", playlistId:"PLJb4OQxDh-QU9GEnYD7SrwASiGFlbMwaG" },
  { id:"tomjerry",       number:110, name:"Tom and Jerry",                hindi:"टॉम एंड जेरी",                category:"Comedy", colorTheme:"#c9a13a", provider:"youtube", playlistId:"PLckQZM6PG6qkeSfQ7kx66nOnpF3WdZgfo" },
  { id:"thomasandfriends",  number:111, name:"Thomas and Friends",   hindi:"थॉमस एंड फ्रेंड्स",                category:"Kids", colorTheme:"#3a82c9", provider:"youtube", playlistId:"PLqlEMfBKk3tp0bhKK9bnngzSSwn7eoxgM" },
  { id:"haddimerabaddi",          number:112, name:"Haddi Mera Baddi",                        hindi:"हद्दी मेरा बद्दी",                       category:"Kids",   colorTheme:"#8b4513", provider:"youtube", playlistId:"PLURJ-_uVMgdRI950uTtX3-8-TUO8bK8YE" },
  { id:"ninjahattori",                number:113, name:"Ninja Hattori",                          hindi:"निंजा हत्तोरी",              category:"Kids", colorTheme:"#5d4037", provider:"youtube", playlistId:"PLnMNQ238a90IJoFJCPn3Osy8iHIqEQefr" },
  { id:"pinkpanther",              number:114, name:"Pink Panther",              hindi:"पिंक पैंथर",              category:"Kids", colorTheme:"#8E44AD", provider:"youtube", playlistId:"PLtS1NoNTpe8CYPxp59OECYEGiHZ0ds8pc" },
{ id:"dexterslaboratory",        number:115, name:"Dexter's Laboratory",        hindi:"डेक्सटर की प्रयोगशाला",    category:"Kids", colorTheme:"#E74C3C", provider:"youtube", playlistId:"PLI_c7eKPNC7pN3ofcoLLqnMvIGOy4zBpc" },
{ id:"phineasandferb",           number:116, name:"Phineas and Ferb",            hindi:"फिनीस और फर्ब",            category:"Kids", colorTheme:"#F39C12", provider:"youtube", playlistId:"PL_PgV-QHDFnGbdVOpPqEwWi1z4f6S3Qrz" },
{ id:"scoobydoo",                number:117, name:"Scooby-Doo",                  hindi:"स्कूबी-डू",                 category:"Kids", colorTheme:"#16A085", provider:"youtube", playlistId:"PLckQZM6PG6qmMbN0ZkyQQTSGJyyAR3Mw9" },
{ id:"lamput",                   number:118, name:"Lamput",                      hindi:"लैम्पट",                    category:"Kids", colorTheme:"#3498DB", provider:"youtube", playlistId:"PLckQZM6PG6qncK9mKXg092liCI-2VUlJ5" },
{ id:"teentitansgo",             number:119, name:"Teen Titans Go",              hindi:"टीन टाइटन्स गो",             category:"Kids", colorTheme:"#27AE60", provider:"youtube", playlistId:"PLckQZM6PG6qnHF7SKQFE8F7wATl0TUoYq" }
];
