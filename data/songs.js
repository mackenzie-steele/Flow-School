// ─── FLOW SCHOOL SONG DATABASE ───────────────────────────────────────────────
//
// Each song entry:
//   id      — unique number (increment from last entry)
//   title   — song title
//   artist  — artist name
//   bpm     — beats per minute (integer)
//   dur     — duration in seconds (integer)  e.g. 3:45 = 225
//   energy  — energy level 0–100
//             10–25   Arrival / Closing / Savasana
//             26–50   Warm Up
//             51–72   Build
//             73–96   Peak
//             38–60   Downshift
//
// To add a song: copy any row, increment the id, fill in the fields.
// ─────────────────────────────────────────────────────────────────────────────

const SONGS = [

  // ── Arrival & Closing (energy 10–25, BPM 55–72) ──────────────────────────
  { id:1,  title:'Still Water',       artist:'Echo Hall',      bpm:58,  dur:248, energy:12 },
  { id:2,  title:'Morning Arrival',   artist:'Pale Shore',     bpm:62,  dur:195, energy:15 },
  { id:3,  title:'Open Field',        artist:'Salt & Wind',    bpm:64,  dur:210, energy:16 },
  { id:4,  title:'Last Light',        artist:'Ember Tone',     bpm:68,  dur:270, energy:20 },
  { id:5,  title:'Breathe Easy',      artist:'Nora Vale',      bpm:60,  dur:225, energy:13 },
  { id:6,  title:'Return',            artist:'Paper Moon',     bpm:70,  dur:240, energy:22 },
  { id:7,  title:'Undone',            artist:'The Tidal',      bpm:58,  dur:312, energy:14 },
  { id:8,  title:'Soft Landing',      artist:'River Ash',      bpm:65,  dur:285, energy:17 },
  { id:9,  title:'Slow Close',        artist:'Maren Loess',    bpm:65,  dur:300, energy:20 },
  { id:10, title:'Rest Here',         artist:'Night Bloom',    bpm:60,  dur:360, energy:12 },
  { id:11, title:'Gratitude',         artist:'Pale Shore',     bpm:68,  dur:280, energy:18 },
  { id:12, title:'Lay It Down',       artist:'The Drift',      bpm:62,  dur:320, energy:15 },
  { id:13, title:'Home Now',          artist:'Paper Moon',     bpm:70,  dur:265, energy:22 },
  { id:14, title:'End of Day',        artist:'Nora Vale',      bpm:64,  dur:295, energy:17 },
  { id:15, title:'Savasana',          artist:'The Tidal',      bpm:58,  dur:420, energy:10 },

  // ── Warm Up (energy 26–50, BPM 72–92) ────────────────────────────────────
  { id:16, title:'Slow Motion',       artist:'Coastal Drive',  bpm:78,  dur:265, energy:30 },
  { id:17, title:'Sunday Easy',       artist:'Maren Loess',    bpm:82,  dur:210, energy:35 },
  { id:18, title:'Ground Floor',      artist:'Wren & Moss',    bpm:76,  dur:235, energy:28 },
  { id:19, title:'Wake Up Slow',      artist:'River Ash',      bpm:85,  dur:190, energy:38 },
  { id:20, title:'Easy Does It',      artist:'Night Bloom',    bpm:80,  dur:255, energy:32 },
  { id:21, title:'Let It Come',       artist:'Pale Shore',     bpm:88,  dur:220, energy:42 },
  { id:22, title:'Walking Home',      artist:'Atlas Sound',    bpm:84,  dur:200, energy:36 },
  { id:23, title:'Open Water',        artist:'Salt & Wind',    bpm:90,  dur:245, energy:45 },
  { id:24, title:'Soft Arc',          artist:'Ember Tone',     bpm:77,  dur:215, energy:29 },
  { id:25, title:'Grounded',          artist:'Echo Hall',      bpm:86,  dur:230, energy:40 },

  // ── Build (energy 51–72, BPM 93–112) ─────────────────────────────────────
  { id:26, title:'Momentum',          artist:'River Ash',      bpm:95,  dur:210, energy:55 },
  { id:27, title:'Forward Motion',    artist:'Wren & Moss',    bpm:98,  dur:240, energy:58 },
  { id:28, title:'Rising',            artist:'Coastal Drive',  bpm:100, dur:225, energy:60 },
  { id:29, title:'Build It Up',       artist:'Night Bloom',    bpm:104, dur:200, energy:64 },
  { id:30, title:'Strong Tide',       artist:'The Drift',      bpm:102, dur:215, energy:62 },
  { id:31, title:'Step Through',      artist:'Atlas Sound',    bpm:106, dur:235, energy:66 },
  { id:32, title:'The Current',       artist:'Maren Loess',    bpm:108, dur:220, energy:70 },
  { id:33, title:'Layer by Layer',    artist:'Paper Moon',     bpm:96,  dur:250, energy:57 },
  { id:34, title:'Earned It',         artist:'Nora Vale',      bpm:110, dur:205, energy:72 },
  { id:35, title:'Lift',              artist:'The Tidal',      bpm:103, dur:230, energy:63 },
  { id:36, title:'Into It',           artist:'River Ash',      bpm:100, dur:195, energy:60 },
  { id:37, title:'Keep Moving',       artist:'Salt & Wind',    bpm:107, dur:210, energy:67 },

  // ── Peak (energy 73–96, BPM 113–135) ─────────────────────────────────────
  { id:38, title:'On Fire',           artist:'Night Bloom',    bpm:118, dur:205, energy:82 },
  { id:39, title:'Full Force',        artist:'Coastal Drive',  bpm:122, dur:195, energy:88 },
  { id:40, title:'Push',              artist:'The Tidal',      bpm:120, dur:210, energy:85 },
  { id:41, title:'All In',            artist:'Atlas Sound',    bpm:126, dur:190, energy:92 },
  { id:42, title:'Peak State',        artist:'River Ash',      bpm:130, dur:200, energy:95 },
  { id:43, title:'Own It',            artist:'Wren & Moss',    bpm:124, dur:215, energy:90 },
  { id:44, title:'The Work',          artist:'Ember Tone',     bpm:115, dur:220, energy:78 },
  { id:45, title:'Ignite',            artist:'Maren Loess',    bpm:128, dur:185, energy:93 },
  { id:46, title:'Strong Hold',       artist:'Echo Hall',      bpm:119, dur:200, energy:83 },
  { id:47, title:'Drive',             artist:'Pale Shore',     bpm:132, dur:195, energy:96 },
  { id:48, title:'Center',            artist:'Night Bloom',    bpm:116, dur:210, energy:80 },
  { id:49, title:'Warrior',           artist:'The Drift',      bpm:123, dur:205, energy:89 },

  // ── Downshift (energy 38–60, BPM 86–106) ─────────────────────────────────
  { id:50, title:'Come Down',         artist:'Paper Moon',     bpm:95,  dur:240, energy:55 },
  { id:51, title:'Ease Off',          artist:'Salt & Wind',    bpm:92,  dur:225, energy:50 },
  { id:52, title:'Slow Burn',         artist:'Nora Vale',      bpm:98,  dur:210, energy:58 },
  { id:53, title:'Settle',            artist:'Coastal Drive',  bpm:90,  dur:235, energy:48 },
  { id:54, title:'Let Go',            artist:'The Tidal',      bpm:88,  dur:260, energy:43 },
  { id:55, title:'Unwind',            artist:'Atlas Sound',    bpm:94,  dur:220, energy:52 },
  { id:56, title:'Falling Into',      artist:'Echo Hall',      bpm:100, dur:215, energy:60 },
  { id:57, title:'Release',           artist:'Wren & Moss',    bpm:92,  dur:230, energy:50 },
  { id:58, title:'Breathe Through',   artist:'Ember Tone',     bpm:96,  dur:200, energy:55 },
  { id:59, title:'The Descent',       artist:'River Ash',      bpm:90,  dur:245, energy:47 },
  { id:60, title:'Soft Shift',        artist:'Maren Loess',    bpm:86,  dur:255, energy:40 },

];
