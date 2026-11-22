/** Supplied Prologue and roster information; extend these arrays as new notes are verified. */
export type Objective = { id: string; text: string };
export type Chapter = {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  winCondition: string;
  bossTip: string;
  lootNote: string;
  recruits: string[];
  steps: string[];
  objectives: Objective[];
};
export type Act = { id: string; title: string; chapters: Chapter[] };
export type LootType = 'Weapons' | 'Gold' | 'Seals' | 'Stat Boosters' | 'Key Items';
export type Loot = { id: string; name: string; chapter: string; type: LootType; source: string };
export type Character = {
  id: string;
  name: string;
  faction: string;
  className: string;
  chapter: string;
  recruitment: string;
};
export type ClassRecord = { id: string; name: string; tier: string; weapon: string; note: string };
export type ItemRecord = { id: string; name: string; kind: string; rank: string; note: string };

export const acts: Act[] = [
  {
    id: 'prologue-descent',
    title: 'Prologue · Descent',
    chapters: [
      {
        id: 'prologue-ch01',
        title: 'Chapter 1 · The White Bird',
        subtitle: 'Tutorial battle sequence',
        overview: 'Customize your Avatar (Eshmel) and play through tutorial battles teaching basic movement, combat, and skills alongside Hong Hua.',
        winCondition: 'Defeat all enemies / clear the tutorial skirmishes.',
        bossTip: 'No boss tip supplied; this chapter is a tutorial battle sequence.',
        lootNote: 'None (tutorial battle sequence).',
        recruits: ['Eshmel (Guardian)', 'Hong Hua (Ovate)'],
        steps: [
          'Customize your Avatar, Eshmel.',
          'Learn basic movement, combat, and skills alongside Hong Hua.',
          'Clear the tutorial skirmishes by defeating all enemies.',
        ],
        objectives: [
          { id: 'prologue-ch01-avatar', text: 'Customize Avatar Eshmel' },
          { id: 'prologue-ch01-tutorials', text: 'Complete the movement, combat, and skills tutorials with Hong Hua' },
          { id: 'prologue-ch01-clear', text: 'Defeat all enemies in the tutorial skirmishes' },
        ],
      },
      {
        id: 'prologue-ch02',
        title: 'Chapter 2 · The Ruined Land',
        subtitle: 'Final chapter of the Prologue',
        overview: 'Explore Kunlun, travel to Katarina, complete the Clash and Dungeon tutorials, then defend the south wall from underworld hostiles.',
        winCondition: 'Defeat the underworld hostiles breaching the south wall to finish the Prologue.',
        bossTip: 'Pick up Salamander +3 in Kunlun before speaking to Hong Hua; it is a huge help for the final Prologue battle.',
        lootNote: 'Salamander +3 · Found while exploring Kunlun before speaking to Hong Hua.',
        recruits: ['Troy (War Monk)'],
        steps: [
          'Before talking to Hong Hua, explore Kunlun and pick up Salamander +3.',
          'Talk to Hong Hua to travel to Katarina, learn the lore of the Serpents/Mediators, and complete the Clash and Dungeon tutorials.',
          'Defeat the underworld hostiles breaching the south wall to finish the Prologue and unlock the four Flame Lord paths: Fox, Lion, Wolf, and Eagle Obelisks.',
        ],
        objectives: [
          { id: 'prologue-ch02-salamander', text: 'Find Salamander +3 in Kunlun before speaking to Hong Hua' },
          { id: 'prologue-ch02-katarina', text: 'Speak with Hong Hua and travel to Katarina' },
          { id: 'prologue-ch02-tutorials', text: 'Complete the Clash and Dungeon tutorials' },
          { id: 'prologue-ch02-wall', text: 'Defeat the underworld hostiles at the south wall' },
          { id: 'prologue-ch02-paths', text: 'Unlock the four Flame Lord paths' },
        ],
      },
    ],
  },
];

export const lootRecords: Loot[] = [
  {
    id: 'prologue-loot-salamander-plus-3',
    name: 'Salamander +3',
    chapter: 'prologue-ch02',
    type: 'Key Items',
    source: 'Kunlun · pick up before speaking to Hong Hua',
  },
];

type RosterMember = Omit<Character, 'id' | 'faction'>;
const sharedClanRoute = 'Gift → Support & Renown + Negotiation/Paralogue; individual condition not specified in the supplied notes.';
const rosterGroups: { faction: string; members: RosterMember[] }[] = [
  {
    faction: "Promised One's Army (Prologue Core)",
    members: [
      { name: 'Eshmel (Avatar)', className: 'Guardian', chapter: 'Prologue · Chapter 1', recruitment: 'Automatic · Prologue Ch. 1' },
      { name: 'Hong Hua', className: 'Ovate', chapter: 'Prologue · Chapter 1', recruitment: 'Automatic · Prologue Ch. 1' },
      { name: 'Troy', className: 'War Monk', chapter: 'Prologue · Chapter 2', recruitment: 'Automatic · Prologue Ch. 2' },
    ],
  },
  {
    faction: 'Ribeira Winds (Cai’s Path · Fox Obelisk)',
    members: [
      { name: 'Cai', className: '—', chapter: 'Ch. 1 · Cai’s Path', recruitment: 'Ch. 1 on Cai’s Path; guest unit in Ch. 4/8 Qualifiers on other paths; complete Cai’s Paralogue to keep.' },
      { name: 'Tialla', className: '—', chapter: 'Ch. 1 · Cai’s Path', recruitment: 'Ch. 1 on Cai’s Path; other paths: clear Cai’s Paralogue, give 3,000G, Support Lv. 3, Renown Lv. 9–10.' },
      { name: 'Peter', className: '—', chapter: 'Cai’s Path', recruitment: 'Automatic on Cai’s Path.' },
      { name: 'Ultand', className: '—', chapter: 'Cai’s Path', recruitment: 'Automatic on Cai’s Path; other paths: complete Ultand’s Request, Support Lv. 3, Renown Lv. 5–8.' },
    ],
  },
  {
    faction: 'House Lamine (Dietrich’s Path · Lion Obelisk)',
    members: [
      { name: 'Dietrich', className: '—', chapter: 'Ch. 1 · Dietrich’s Path', recruitment: 'Ch. 1 on Dietrich’s Path; guest unit in Ch. 5/6/7 Qualifiers on other paths; complete Dietrich’s Paralogue to keep.' },
      { name: 'Fabio', className: '—', chapter: 'Dietrich’s Path', recruitment: 'Automatic on Dietrich’s Path.' },
      { name: 'Esmeralda', className: '—', chapter: 'Dietrich’s Path', recruitment: 'Automatic on Dietrich’s Path.' },
      { name: 'Mikaela', className: '—', chapter: 'Dietrich’s Path', recruitment: 'Automatic on Dietrich’s Path.' },
    ],
  },
  {
    faction: 'Megaira’s Beacon (Theodora’s Path · Wolf Obelisk)',
    members: [
      { name: 'Theodora', className: '—', chapter: 'Ch. 1 · Theodora’s Path', recruitment: 'Ch. 1 on Theodora’s Path; guest unit in Ch. 4/6 Qualifiers on other paths; complete Theodora’s Paralogue to keep.' },
      { name: 'Bonaventure', className: '—', chapter: 'Theodora’s Path', recruitment: 'Automatic on Theodora’s Path.' },
      { name: 'Tobias', className: '—', chapter: 'Theodora’s Path', recruitment: 'Automatic on Theodora’s Path; exclusive to Theodora’s Path.' },
      { name: 'Lysander', className: '—', chapter: 'Theodora’s Path', recruitment: 'Automatic on Theodora’s Path.' },
      { name: 'Lilian', className: '—', chapter: 'Theodora’s Path', recruitment: 'Automatic on Theodora’s Path.' },
    ],
  },
  {
    faction: 'Rose Tempest (Leda’s Path · Eagle Obelisk)',
    members: [
      { name: 'Leda', className: '—', chapter: 'Ch. 1 · Leda’s Path', recruitment: 'Ch. 1 on Leda’s Path; guest unit in Ch. 6/7 Qualifiers on other paths; complete Leda’s Paralogue to keep.' },
      { name: 'Buccar', className: '—', chapter: 'Leda’s Path', recruitment: 'Automatic on Leda’s Path.' },
      { name: 'Sirocco', className: '—', chapter: 'Ch. 1 · Leda’s Path', recruitment: 'Ch. 1 on Leda’s Path; other paths: Ch. 7–8+, complete Sirocco’s Request, Support Lv. 1–3, Renown Lv. 5–9.' },
      { name: 'Mu', className: '—', chapter: 'Ch. 1 · Leda’s Path', recruitment: 'Ch. 1 on Leda’s Path; other paths: Ch. 6–9+, give 3 Glirmosa, Support Lv. 3, Renown Lv. 7–9.' },
      { name: 'Olympia', className: '—', chapter: 'Ch. 4 · Leda’s Path', recruitment: 'Ch. 4 on Leda’s Path; other paths: Ch. 6–9+, complete 3 Requests, Support Lv. 3, Renown Lv. 6–9.' },
    ],
  },
  {
    faction: 'Fiery Mane (Heroic Games Clan)',
    members: [
      { name: 'Bertrand', className: '—', chapter: 'Clan route', recruitment: `${sharedClanRoute} Paralogue · Part III.` },
      { name: 'Gaitz', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
      { name: 'Dante', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
      { name: 'Goliath', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
      { name: 'Jester', className: '—', chapter: 'Clan route', recruitment: `${sharedClanRoute} Complete Request.` },
    ],
  },
  {
    faction: 'Tale of the Moon (Heroic Games Clan)',
    members: [
      { name: 'Talimun', className: '—', chapter: 'Clan route', recruitment: `${sharedClanRoute} Paralogue · Part III.` },
      { name: 'Ursula', className: '—', chapter: 'Clan route', recruitment: 'Clear Talimun’s Paralogue; unavailable on Leda’s Path.' },
      { name: 'Simon', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
      { name: 'Ludia', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
      { name: 'Fianna', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
    ],
  },
  {
    faction: 'Linaria Dewdrops (Heroic Games Clan)',
    members: [
      { name: 'Orchel', className: '—', chapter: 'Clan route', recruitment: `${sharedClanRoute} Paralogue · Part III.` },
      { name: 'Diego', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
      { name: 'Ninae', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
      { name: 'Seteth', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
      { name: 'Loretta', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
    ],
  },
  {
    faction: 'Bridal Party of the Pale Raven (Heroic Games Clan)',
    members: [
      { name: 'Anatolia', className: '—', chapter: 'Clan route', recruitment: `${sharedClanRoute} Paralogue · Part III.` },
      { name: 'Sha Lan', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
      { name: 'Nezha', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
      { name: 'Dadao', className: '—', chapter: 'Clan route', recruitment: sharedClanRoute },
      { name: 'Halvin', className: '—', chapter: 'Clan route', recruitment: 'Deliver 10 Dates.' },
    ],
  },
  {
    faction: 'Other Clan Leaders & Recruits',
    members: [
      { name: 'Benditz', className: '—', chapter: 'Cross-route', recruitment: sharedClanRoute },
      { name: 'Alexandra', className: '—', chapter: 'Cross-route', recruitment: sharedClanRoute },
      { name: 'Zarcone', className: '—', chapter: 'Cross-route', recruitment: sharedClanRoute },
      { name: 'Jasmine', className: '—', chapter: 'Cross-route', recruitment: 'Pay 500G–2,000G.' },
      { name: 'Kiroc', className: '—', chapter: 'Cross-route', recruitment: 'Deliver 3 Pure Water.' },
      { name: 'Inyoni', className: '—', chapter: 'Cross-route', recruitment: 'Pay 3,000G.' },
      { name: 'Peppe', className: '—', chapter: 'Cross-route', recruitment: sharedClanRoute },
      { name: 'Sofia', className: '—', chapter: 'Cross-route', recruitment: sharedClanRoute },
      { name: 'Io', className: '—', chapter: 'Cross-route', recruitment: 'Pay 800G–1,500G.' },
      { name: 'Yang Jie', className: '—', chapter: 'Cross-route', recruitment: 'Answer questions correctly.' },
    ],
  },
];

const toId = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const characters: Character[] = rosterGroups.flatMap(({ faction, members }) =>
  members.map((member) => ({ ...member, faction, id: `${toId(faction)}-${toId(member.name)}` })),
);

export const classes: ClassRecord[] = ['Guardian', 'Ovate', 'War Monk'].map((name) => ({
  id: `class-${toId(name)}`,
  name,
  tier: 'Not supplied',
  weapon: 'Not supplied',
  note: 'Named in the supplied Prologue roster; tier and weapon type were not included.',
}));

export const items: ItemRecord[] = [
  {
    id: 'item-salamander-plus-3',
    name: 'Salamander +3',
    kind: 'Key item',
    rank: 'Not supplied',
    note: 'Found while exploring Kunlun before speaking to Hong Hua.',
  },
];
