import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Route, Router as WouterRouter, Switch, useLocation } from 'wouter';
import { BookOpen, Boxes, Check, ChevronDown, ChevronRight, Compass, Gem, Headphones, Library, Map, Music2, Pause, Play, ScrollText, Search, Shield, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { acts, characters, classes, items, lootRecords, type LootType } from '@/data/gameData';

const progressKey = 'fwc-progress-v1';
const collectedKey = 'fwc-collected-v1';
const sceneKey = 'fwc-scene-v1';
const readStored = <T,>(key: string, fallback: T): T => {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) as T : fallback; } catch { return fallback; }
};
type Progress = Record<string, boolean>;
type Scene = 'dusk' | 'rain' | 'hearth' | 'astral';
const chapterName = Object.fromEntries(acts.flatMap((act) => act.chapters.map((ch) => [ch.id, ch.title])));

function App() {
  return <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Shell /></WouterRouter>;
}

function Shell() {
  const [path] = useLocation();
  const [scene, setScene] = useState<Scene>(() => readStored(sceneKey, 'dusk'));
  const activePath = path === '/' ? '/' : path;
  useEffect(() => { localStorage.setItem(sceneKey, scene); }, [scene]);
  return <div className="shell">
    <div className={`scene-backdrop ${scene}`} aria-hidden="true" />
    <header className="topbar">
      <div className="brand"><span className="brand-mark"><Compass size={16} /></span><span>Fortune's Weave<br /><small style={{ opacity: .65, letterSpacing: '.22em' }}>FIELD COMPANION</small></span></div>
      <div className="top-meta">OFFLINE JOURNAL <span className="gold">·</span> LOCAL SAVE ACTIVE</div>
    </header>
    <Switch>
      <Route path="/" component={ChaptersPage} />
      <Route path="/loot" component={LootPage} />
      <Route path="/database" component={DatabasePage} />
      <Route path="/gallery"><GalleryPage scene={scene} setScene={setScene} /></Route>
      <Route><NotFound /></Route>
    </Switch>
    <BottomNav active={activePath} />
    <AmbienceControl />
  </div>;
}

function PageIntro({ section, title, children, noticeTitle, notice }: { section: string; title: string; children: string; noticeTitle?: string; notice?: string }) {
  return <><div className="eyebrow">{section}</div><h1 className="page-title">{title}</h1><p className="intro">{children}</p>{notice && <div className="sample-note"><strong>{noticeTitle ?? 'Field note.'}</strong> {notice}</div>}</>;
}

function ChaptersPage() {
  const [progress, setProgress] = useState<Progress>(() => readStored(progressKey, {}));
  const [openActs, setOpenActs] = useState<Record<string, boolean>>({ 'prologue-descent': true });
  useEffect(() => { localStorage.setItem(progressKey, JSON.stringify(progress)); }, [progress]);
  const total = acts.reduce((n, act) => n + act.chapters.length, 0);
  const completed = acts.flatMap((act) => act.chapters).filter((ch) => progress[ch.id]).length;
  const toggle = (key: string) => setProgress((prev) => ({ ...prev, [key]: !prev[key] }));
  return <main className="page">
    <PageIntro section="Field notes · 01" title="Chapter journal" noticeTitle="Supplied Prologue notes." notice="This guide covers the two Prologue chapters included in your update. Add more verified chapters in src/data/gameData.ts.">A working route through the Prologue. Mark objectives as you go; your notes stay on this device.</PageIntro>
    <div className="panel stat-strip"><div><div className="stat-label">Chapter progress</div><div className="stat-number" data-testid="text-chapter-progress">{completed} <span style={{ color: '#77828d' }}>/ {total} marked complete</span></div></div><div style={{ width: '35%', minWidth: 90 }}><div className="progress-track"><div className="progress-fill" style={{ width: `${total ? completed / total * 100 : 0}%` }} /></div></div></div>
    {acts.map((act) => {
      const isOpen = openActs[act.id] ?? false;
      const done = act.chapters.filter((ch) => progress[ch.id]).length;
      return <section className="panel act" key={act.id}>
        <div role="button" tabIndex={0} className="act-head" aria-expanded={isOpen} data-testid={`toggle-act-${act.id}`} onClick={() => setOpenActs((p) => ({ ...p, [act.id]: !isOpen }))} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpenActs((p) => ({ ...p, [act.id]: !isOpen })); }}>
          <div><div className="act-name">{act.title}</div><div className="act-caption">{done} / {act.chapters.length} chapters complete</div></div>{isOpen ? <ChevronDown size={17} /> : <ChevronRight size={17} />}
        </div>
        {isOpen && act.chapters.map((ch) => <article className="chapter-row" key={ch.id}>
          <div className="chapter-title-line"><input aria-label={`Mark ${ch.title} complete`} type="checkbox" checked={Boolean(progress[ch.id])} onChange={() => toggle(ch.id)} data-testid={`checkbox-chapter-${ch.id}`} /><div className="chapter-title">{ch.title}</div><span className="badge">{ch.subtitle}</span></div>
          <div className="chapter-body">
            <div><div className="subhead">Field objectives</div><div className="objective-list">{ch.objectives.map((obj) => <label className="objective" key={obj.id}><input type="checkbox" checked={Boolean(progress[obj.id])} onChange={() => toggle(obj.id)} data-testid={`checkbox-objective-${obj.id}`} /><span>{obj.text}</span></label>)}</div><div className="subhead" style={{ marginTop: 18 }}>Route notes</div><ol className="steps">{ch.steps.map((step, i) => <li className="step" key={step}><span className="mono gold">0{i + 1}</span><span>{step}</span></li>)}</ol></div>
            <aside className="chapter-aside"><div className="subhead">Overview</div><p className="detail">{ch.overview}</p><div className="subhead">Win condition</div><p className="detail">{ch.winCondition}</p><div className="subhead">Boss note</div><p className="detail">{ch.bossTip}</p><div className="subhead">Recruitable</div><div className="detail">{ch.recruits.join(' · ')}</div><div className="subhead">Chests & missables</div><p className="detail">{ch.lootNote}</p></aside>
          </div>
        </article>)}
      </section>;
    })}
  </main>;
}

function LootPage() {
  const [collected, setCollected] = useState<Progress>(() => readStored(collectedKey, {}));
  const [query, setQuery] = useState('');
  const [onlyMissing, setOnlyMissing] = useState(false);
  const [chapter, setChapter] = useState('all');
  const [kind, setKind] = useState('all');
  useEffect(() => { localStorage.setItem(collectedKey, JSON.stringify(collected)); }, [collected]);
  const filtered = useMemo(() => lootRecords.filter((item) =>
    (!onlyMissing || !collected[item.id]) && (chapter === 'all' || item.chapter === chapter) && (kind === 'all' || item.type === kind) &&
    `${item.name} ${item.source} ${chapterName[item.chapter]}`.toLowerCase().includes(query.toLowerCase())), [collected, onlyMissing, chapter, kind, query]);
  const count = lootRecords.filter((item) => collected[item.id]).length;
  const chapterNotes = acts.flatMap((act) => act.chapters).filter((ch) => ch.lootNote && (chapter === 'all' || chapter === ch.id));
  const types: LootType[] = ['Weapons', 'Gold', 'Seals', 'Stat Boosters', 'Key Items'];
  return <main className="page">
    <PageIntro section="Field notes · 02" title="Chests & loot" noticeTitle="Prologue treasure." notice="Chapter 1 has no chests or missables. Chapter 2 includes Salamander +3 in Kunlun, before speaking to Hong Hua.">A pocket checklist for Prologue items. Collected marks are saved locally.</PageIntro>
    <div className="panel stat-strip"><div><div className="stat-label">Collected</div><div className="stat-number" data-testid="text-loot-progress">{count} <span style={{ color: '#77828d' }}>/ {lootRecords.length} records</span></div></div><div style={{ width: '38%', minWidth: 110 }}><div className="progress-track"><div className="progress-fill" style={{ width: `${count / lootRecords.length * 100}%` }} /></div></div></div>
    <div className="toolbar">
      <label className="search" style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Search size={15} color="#8c969c" /><input aria-label="Search loot" data-testid="input-search-loot" placeholder="Search name or location…" value={query} onChange={(e) => setQuery(e.target.value)} style={{ background: 'transparent', border: 0, outline: 0, color: 'inherit', width: '100%' }} /></label>
      <select className="select" aria-label="Filter by chapter" data-testid="select-loot-chapter" value={chapter} onChange={(e) => setChapter(e.target.value)}><option value="all">All chapters</option>{acts.flatMap((a) => a.chapters.map((c) => <option value={c.id} key={c.id}>{c.title}</option>))}</select>
      <select className="select" aria-label="Filter item type" data-testid="select-loot-type" value={kind} onChange={(e) => setKind(e.target.value)}><option value="all">All item types</option>{types.map((t) => <option key={t}>{t}</option>)}</select>
      <label className="check-line"><input type="checkbox" data-testid="checkbox-uncollected-only" checked={onlyMissing} onChange={(e) => setOnlyMissing(e.target.checked)} /> Uncollected only</label>
    </div>
    <div className="loot-notes">{chapterNotes.map((ch) => <div className="panel loot-note" key={ch.id} data-testid={`note-loot-${ch.id}`}><div className="subhead">{ch.title}</div><p className="detail">{ch.lootNote}</p></div>)}</div>
    {filtered.length ? <div className="loot-grid">{filtered.map((item) => <label className="panel loot-row" key={item.id} data-testid={`row-loot-${item.id}`}><input type="checkbox" aria-label={`Mark ${item.name} collected`} checked={Boolean(collected[item.id])} onChange={() => setCollected((p) => ({ ...p, [item.id]: !p[item.id] }))} data-testid={`checkbox-loot-${item.id}`} /><span className="loot-icon">{item.type === 'Weapons' ? <Shield size={16} /> : item.type === 'Gold' ? <Gem size={16} /> : item.type === 'Seals' ? <ScrollText size={16} /> : <Sparkles size={16} />}</span><span className="loot-info"><span className="loot-name">{item.name}</span><span className="loot-meta">{chapterName[item.chapter]} · {item.source}</span></span>{collected[item.id] && <Check className="gold" size={15} />}</label>)}</div> : <div className="panel empty"><strong>No matching field notes</strong>Try changing your search or filters.</div>}
  </main>;
}

type DatabaseTab = 'Characters' | 'Classes' | 'Weapons / Items';
type DatabaseRecord = {
  id: string;
  name: string;
  sub: string;
  note: string;
  faction?: string;
  className?: string;
  chapter?: string;
  recruitment?: string;
  sortChapter?: number;
  sortRank?: string;
};

function DatabasePage() {
  const [tab, setTab] = useState<DatabaseTab>('Characters');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('alpha');
  const [faction, setFaction] = useState('all');
  const factions = [...new Set(characters.map((character) => character.faction))].sort((a, b) => a.localeCompare(b));
  const options: [string, string][] = tab === 'Characters' ? [['alpha', 'Alphabetical'], ['chapter', 'Chapter unlocked']] : tab === 'Classes' ? [['alpha', 'Alphabetical'], ['rank', 'Tier']] : [['alpha', 'Alphabetical'], ['rank', 'Rank / tier']];
  const records = useMemo<DatabaseRecord[]>(() => {
    let list: DatabaseRecord[] =
      tab === 'Characters' ? characters
        .filter((character) => faction === 'all' || character.faction === faction)
        .map((character) => ({
          id: character.id,
          name: character.name,
          sub: character.chapter,
          note: character.recruitment,
          faction: character.faction,
          className: character.className,
          chapter: character.chapter,
          recruitment: character.recruitment,
          sortChapter: Number.parseInt(character.chapter.match(/\d+/)?.[0] ?? '', 10) || 999,
        })) :
      tab === 'Classes' ? classes.map((record) => ({ id: record.id, name: record.name, sub: `${record.tier} · ${record.weapon}`, note: record.note, sortRank: record.tier })) :
      items.map((record) => ({ id: record.id, name: record.name, sub: `${record.kind} · ${record.rank}`, note: record.note, sortRank: record.rank }));
    list = list.filter((record) => `${record.name} ${record.sub} ${record.note} ${record.faction ?? ''} ${record.className ?? ''}`.toLowerCase().includes(query.toLowerCase()));
    if (sort === 'chapter') list.sort((a, b) => (a.sortChapter ?? 999) - (b.sortChapter ?? 999) || a.name.localeCompare(b.name));
    else if (sort === 'rank') list.sort((a, b) => (a.sortRank ?? '').localeCompare(b.sortRank ?? '') || a.name.localeCompare(b.name));
    else list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [tab, query, sort, faction]);
  const isCharacterTab = tab === 'Characters';
  return <main className="page">
    <PageIntro section="Field notes · 03" title="The field index" noticeTitle="Roster status." notice="Character factions and recruitment details use your supplied roster. Class and item tabs show only information included in those notes; missing fields are marked.">Quick references for the Prologue roster, classes, and known items.</PageIntro>
    <div className="tabs" role="tablist" aria-label="Database category">{(['Characters', 'Classes', 'Weapons / Items'] as DatabaseTab[]).map((value) => <button role="tab" aria-selected={tab === value} className={`tab ${tab === value ? 'active' : ''}`} onClick={() => { setTab(value); setSort('alpha'); setFaction('all'); }} data-testid={`tab-database-${value.toLowerCase().replace(/[^a-z]+/g, '-')}`} key={value}>{value}</button>)}</div>
    <div className="toolbar"><label className="search" style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Search size={15} color="#8c969c" /><input aria-label={`Search ${tab}`} data-testid="input-search-database" placeholder={`Search ${tab.toLowerCase()}…`} value={query} onChange={(e) => setQuery(e.target.value)} style={{ background: 'transparent', border: 0, outline: 0, color: 'inherit', width: '100%' }} /></label>{isCharacterTab && <select className="select" aria-label="Filter by faction" data-testid="select-character-faction" value={faction} onChange={(e) => setFaction(e.target.value)}><option value="all">All factions</option>{factions.map((value) => <option key={value} value={value}>{value}</option>)}</select>}<select className="select" aria-label="Sort database" data-testid="select-database-sort" value={sort} onChange={(e) => setSort(e.target.value)}>{options.map(([v, label]) => <option key={v} value={v}>Sort: {label}</option>)}</select></div>
    {records.length ? isCharacterTab ? <div className="panel character-table" role="table" aria-label="Character roster">
      <div className="character-grid character-table-head" role="row"><div role="columnheader">Character</div><div role="columnheader">Faction</div><div role="columnheader">Class</div><div role="columnheader">Chapter unlocked</div><div role="columnheader">Recruitment</div></div>
      {records.map((record) => <div className="character-grid character-table-row" key={record.id} role="row" data-testid={`row-database-${record.id}`}>
        <div className="character-cell character-name-cell" role="cell" data-label="Character"><span className="initial">{record.name.slice(0, 1)}</span><span className="character-name">{record.name}</span></div>
        <div className="character-cell" role="cell" data-label="Faction">{record.faction}</div>
        <div className="character-cell" role="cell" data-label="Class">{record.className}</div>
        <div className="character-cell" role="cell" data-label="Chapter unlocked">{record.chapter}</div>
        <div className="character-cell recruitment-cell" role="cell" data-label="Recruitment">{record.recruitment}</div>
      </div>)}
    </div> : <div className="panel db-list" role="list">{records.map((record) => <div className="db-item" key={record.id} role="listitem" data-testid={`row-database-${record.id}`}><div className="initial">{record.name.slice(0, 1)}</div><div className="db-main"><div className="db-name">{record.name}</div><div className="db-sub">{record.note}</div></div><div className="db-right">{record.sub}</div></div>)}</div> : <div className="panel empty"><strong>No entries found</strong>Try another search.</div>}
  </main>;
}

const sceneDetails: { id: Scene; name: string; description: string; theme: string }[] = [
  { id: 'dusk', name: 'Last Light', description: 'A quiet road at the edge of evening.', theme: 'Dusk' },
  { id: 'rain', name: 'Rainwatch', description: 'A cold watch beneath the ramparts.', theme: 'Rain' },
  { id: 'hearth', name: 'The Wayfarer’s Hearth', description: 'A brief rest before the next march.', theme: 'Hearth' },
  { id: 'astral', name: 'Starbound Oath', description: 'A clear sky over distant banners.', theme: 'Astral' },
];
function GalleryPage({ scene, setScene }: { scene: Scene; setScene: (s: Scene) => void }) {
  return <main className="page"><PageIntro section="Field notes · 04" title="Gallery & theme">Choose the atmosphere for your journal. These self-contained CSS scenes are easy to replace with local artwork later.</PageIntro>
    <div className="panel stat-strip"><div><div className="stat-label">Current scene</div><div className="stat-number" data-testid="text-current-scene">{sceneDetails.find((s) => s.id === scene)?.name}</div></div><span className="badge"><Check size={12} style={{ marginRight: 5 }} /> Saved on this device</span></div>
    <div className="scene-grid">{sceneDetails.map((item) => <button type="button" className={`scene-card scene-${item.id} ${scene === item.id ? 'selected' : ''}`} aria-pressed={scene === item.id} onClick={() => setScene(item.id)} data-testid={`button-scene-${item.id}`} key={item.id}><span className="scene-name">{item.name}</span><span className="scene-desc">{item.description}</span></button>)}</div>
    <p className="intro" style={{ marginTop: 22, fontSize: 11 }}>Scene art is rendered with local CSS only; no image or audio assets are loaded from the network.</p>
  </main>;
}

function BottomNav({ active }: { active: string }) {
  const links = [{ href: '/', label: 'Chapters', icon: Map }, { href: '/loot', label: 'Chests & Loot', icon: Boxes }, { href: '/database', label: 'Database', icon: Library }, { href: '/gallery', label: 'Gallery & Theme', icon: BookOpen }];
  return <nav className="bottom-nav" aria-label="Primary navigation"><div className="nav-inner">{links.map(({ href, label, icon: Icon }) => <Link href={href} className={`nav-link ${active === href ? 'active' : ''}`} aria-current={active === href ? 'page' : undefined} data-testid={`link-nav-${href === '/' ? 'chapters' : href.slice(1)}`} key={href}><Icon aria-hidden="true" /><span>{label}</span></Link>)}</div></nav>;
}

type SoundId = 'rain' | 'hearth' | 'lute';
type SoundState = Record<SoundId, { on: boolean; volume: number }>;
const defaultSounds: SoundState = { rain: { on: false, volume: .35 }, hearth: { on: false, volume: .25 }, lute: { on: false, volume: .2 } };
type SoundNodes = { gain: GainNode; oscillators: OscillatorNode[]; sources: AudioBufferSourceNode[] };

function loadSoundPreferences(): SoundState {
  const saved = readStored<SoundState>('fwc-sound-state', defaultSounds);
  return {
    rain: { ...defaultSounds.rain, ...saved.rain, on: false },
    hearth: { ...defaultSounds.hearth, ...saved.hearth, on: false },
    lute: { ...defaultSounds.lute, ...saved.lute, on: false },
  };
}

function createSoundBuffer(ctx: AudioContext, id: SoundId): AudioBuffer {
  if (id === 'lute') {
    const duration = 14;
    const length = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const channel = buffer.getChannelData(0);
    const notes = [
      { at: 0.25, frequency: 523.25 },
      { at: 3.7, frequency: 392 },
      { at: 7.1, frequency: 440 },
      { at: 10.4, frequency: 587.33 },
    ];
    for (let i = 0; i < length; i++) {
      const time = i / ctx.sampleRate;
      let sample = 0;
      for (const note of notes) {
        const elapsed = time - note.at;
        if (elapsed < 0 || elapsed > 2.4) continue;
        const envelope = Math.exp(-elapsed * 2.8);
        sample += envelope * (
          Math.sin(2 * Math.PI * note.frequency * elapsed) * 0.55 +
          Math.sin(2 * Math.PI * note.frequency * 2.01 * elapsed) * 0.18 +
          Math.sin(2 * Math.PI * note.frequency * 3.98 * elapsed) * 0.06
        );
      }
      channel[i] = sample * 0.24;
    }
    return buffer;
  }

  const duration = id === 'rain' ? 4 : 5;
  const length = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const channel = buffer.getChannelData(0);
  let nextPop = 0;
  let popEnds = 0;
  let popStrength = 0;
  for (let i = 0; i < length; i++) {
    const time = i / ctx.sampleRate;
    const noise = Math.random() * 2 - 1;
    if (id === 'rain') {
      channel[i] = noise * 0.38;
    } else {
      if (time >= nextPop) {
        popStrength = 0.3 + Math.random() * 0.7;
        popEnds = time + 0.008 + Math.random() * 0.028;
        nextPop = time + 0.12 + Math.random() * 0.54;
      }
      const crackle = time < popEnds ? noise * popStrength : 0;
      channel[i] = noise * 0.06 + crackle;
    }
  }
  return buffer;
}

function AmbienceControl() {
  const [open, setOpen] = useState(false);
  const [sounds, setSounds] = useState<SoundState>(loadSoundPreferences);
  const [master, setMaster] = useState(.45);
  const [muted, setMuted] = useState(false);
  const audio = useRef<AudioContext | null>(null);
  const nodes = useRef<Partial<Record<SoundId, SoundNodes>>>({});
  useEffect(() => { localStorage.setItem('fwc-sound-state', JSON.stringify(sounds)); }, [sounds]);
  useEffect(() => () => { nodes.current = {}; if (audio.current) void audio.current.close(); audio.current = null; }, []);
  const context = () => {
    if (!audio.current) audio.current = new AudioContext();
    if (audio.current.state === 'suspended') void audio.current.resume();
    return audio.current;
  };
  const stop = (id: SoundId) => {
    const node = nodes.current[id];
    if (!node) return;
    node.oscillators.forEach((osc) => { try { osc.stop(); } catch { /* already stopped */ } });
    node.sources.forEach((source) => { try { source.stop(); } catch { /* already stopped */ } });
    node.gain.disconnect();
    delete nodes.current[id];
  };
  const start = (id: SoundId, volume: number) => {
    const ctx = context();
    const gain = ctx.createGain();
    gain.gain.value = volume * master * (muted ? 0 : 1) * .12;
    gain.connect(ctx.destination);
    const oscillators: OscillatorNode[] = [];
    const sources: AudioBufferSourceNode[] = [];
    const source = ctx.createBufferSource();
    source.buffer = createSoundBuffer(ctx, id);
    source.loop = true;
    if (id === 'rain') {
      const filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 1100;
      source.connect(filter); filter.connect(gain);
    } else if (id === 'hearth') {
      const filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 900; filter.connect(gain);
      source.connect(filter);
      const rumble = ctx.createOscillator(); rumble.type = 'sine'; rumble.frequency.value = 48;
      const rumbleGain = ctx.createGain(); rumbleGain.gain.value = .08;
      rumble.connect(rumbleGain); rumbleGain.connect(gain); rumble.start(); oscillators.push(rumble);
    } else {
      source.connect(gain);
    }
    source.start();
    sources.push(source);
    nodes.current[id] = { gain, oscillators, sources };
  };
  const change = (id: SoundId, patch: Partial<SoundState[SoundId]>) => {
    const nextValue = { ...sounds[id], ...patch };
    if (patch.on === true) start(id, nextValue.volume);
    if (patch.on === false) stop(id);
    if (patch.volume !== undefined && nodes.current[id]) nodes.current[id]!.gain.gain.value = patch.volume * master * (muted ? 0 : 1) * .12;
    setSounds((prev) => ({ ...prev, [id]: nextValue }));
  };
  const changeMaster = (v: number) => {
    setMaster(v);
    Object.entries(nodes.current).forEach(([id, node]) => {
      const key = id as SoundId;
      if (node?.gain) node.gain.gain.value = sounds[key].volume * v * (muted ? 0 : 1) * .12;
    });
  };
  const toggleMute = () => {
    const next = !muted; setMuted(next);
    Object.entries(nodes.current).forEach(([id, node]) => { const key = id as SoundId; if (node?.gain) node.gain.gain.value = sounds[key].volume * master * (next ? 0 : 1) * .12; });
  };
  const toggleSound = (id: SoundId) => change(id, { on: !sounds[id].on });
  const names: { id: SoundId; title: string; Icon: typeof Volume2 }[] = [{ id: 'rain', title: 'Gentle Rain', Icon: Volume2 }, { id: 'hearth', title: 'Crackling Hearth', Icon: Sparkles }, { id: 'lute', title: 'Soft Lute / Chime', Icon: Music2 }];
  const anyOn = Object.values(sounds).some((s) => s.on);
  return <>
    {open && <section className="ambience-pop" aria-label="Ambience controls">
      <div className="ambience-head"><div><div className="subhead" style={{ margin: 0 }}>Field ambience</div><div className="loot-meta">Generated tones · starts on request</div></div><button className="tool-btn" onClick={toggleMute} data-testid="button-master-mute" aria-label={muted ? 'Unmute all ambience' : 'Mute all ambience'}>{muted ? <VolumeX size={15} /> : <Volume2 size={15} />}{muted ? 'Unmute' : 'Master mute'}</button></div>
      <div className="sound-row"><label htmlFor="master-volume">Overall volume</label><input id="master-volume" type="range" min="0" max="1" step=".01" value={master} onChange={(e) => changeMaster(Number(e.target.value))} data-testid="slider-master-volume" /><span className="mono">{Math.round(master * 100)}%</span></div>
      {names.map(({ id, title, Icon }) => <div className="sound-row" key={id}><button className="tool-btn" aria-pressed={sounds[id].on} onClick={() => toggleSound(id)} data-testid={`button-sound-${id}`} style={{ padding: '0 7px', height: 33 }}><Icon size={14} />{title}</button><input aria-label={`${title} volume`} type="range" min="0" max="1" step=".01" value={sounds[id].volume} onChange={(e) => change(id, { volume: Number(e.target.value) })} data-testid={`slider-sound-${id}`} /><span className="mono">{Math.round(sounds[id].volume * 100)}%</span></div>)}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}><span className="loot-meta">Audio runs only while this journal is open.</span><button className="tool-btn" onClick={toggleMute} data-testid="button-ambience-toggle-all">{muted || !anyOn ? <Play size={13} /> : <Pause size={13} />}{muted || !anyOn ? 'Resume' : 'Mute'}</button></div>
    </section>}
    <button className="ambience-fab" aria-label={open ? 'Close ambience controls' : 'Open ambience controls'} aria-expanded={open} onClick={() => setOpen((v) => !v)} data-testid="button-ambience-open"><Headphones size={19} /></button>
  </>;
}

function NotFound() {
  return <main className="page"><div className="eyebrow">Uncharted page</div><h1 className="page-title">No field notes here.</h1><p className="intro">Return to your chapter journal to continue.</p><Link href="/" className="tool-btn" style={{ display: 'inline-flex', marginTop: 22 }} data-testid="link-return-chapters">Back to Chapters</Link></main>;
}

export default App;
