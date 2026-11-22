/** Data transcribed from the supplied Fortune's Weave guide notes. */
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
  startingClass: string;
  chapter: string;
  recruitment: string;
};
export type ClassTier = 'Base' | 'Beginner' | 'Specialty' | 'Advanced' | 'Master' | 'Divine';
export type ClassRecord = {
  id: string;
  name: string;
  tier: ClassTier;
  certificationRequirements: string;
  masterySkill: string;
};
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
const sharedNonRouteRecruit = 'Give a Gift first to unlock the Recruit prompt; then reach the required Support + Renown and meet the final condition.';
const sharedClanRecruit = 'Give a Gift to unlock Recruit; reach required Support Lv. (2–3) and Renown Lv. (varies by Flame Lord); complete a Personal Request or Negotiation.';
const rosterGroups: { faction: string; members: RosterMember[] }[] = [
  {
    faction: "Promised One's Army (Prologue Core)",
    members: [
      { name: 'Eshmel (Avatar)', startingClass: 'Guardian (Prologue) / Commoner (Main Story)', chapter: 'Prologue · Ch. 1', recruitment: 'Prologue Ch. 1 · Automatic.' },
      { name: 'Hong Hua', startingClass: 'Ovate', chapter: 'Prologue · Ch. 1', recruitment: 'Prologue Ch. 1 · Automatic.' },
      { name: 'Troy', startingClass: 'War Monk', chapter: 'Prologue · Ch. 2', recruitment: 'Prologue Ch. 2 · Automatic.' },
    ],
  },
  {
    faction: 'Ribeira Winds (Cai’s Path · Fox Obelisk)',
    members: [
      { name: 'Cai', startingClass: 'Commoner (Fox Obelisk)', chapter: 'Cai’s Path · Ch. 1', recruitment: 'Cai’s Path: Ch. 1. Other paths: guest in Ch. 4/8 Qualifiers; clear Cai’s Paralogue to keep.' },
      { name: 'Tialla', startingClass: 'Hunter', chapter: 'Cai’s Path · Ch. 1', recruitment: 'Cai’s Path: Ch. 1 automatic. Other paths: clear Cai’s Paralogue, reach Support Lv. 3 and Renown Lv. 9–10, and pay 3,000G.' },
      { name: 'Peter', startingClass: 'Soldier', chapter: 'Cai’s Path', recruitment: 'Cai’s Path: Automatic. Other paths: unrecruitable in Part I.' },
      { name: 'Ultand', startingClass: 'Diviner', chapter: 'Cai’s Path', recruitment: `Cai’s Path: Automatic. Other paths: ${sharedNonRouteRecruit} Support Lv. 3, Renown Lv. 5–8, and complete Ultand’s Request.` },
    ],
  },
  {
    faction: 'House Lamine (Dietrich’s Path · Lion Obelisk)',
    members: [
      { name: 'Dietrich', startingClass: 'Commoner (Lion Obelisk)', chapter: 'Dietrich’s Path · Ch. 1', recruitment: 'Dietrich’s Path: Ch. 1. Other paths: guest in Ch. 5/6/7 Qualifiers; clear Dietrich’s Paralogue to keep.' },
      { name: 'Fabio', startingClass: 'Soldier', chapter: 'Dietrich’s Path', recruitment: 'Dietrich’s Path: Automatic. Other paths: unrecruitable in Part I.' },
      { name: 'Esmeralda', startingClass: 'Diviner', chapter: 'Dietrich’s Path', recruitment: 'Dietrich’s Path: Automatic. Other paths: unrecruitable in Part I.' },
      { name: 'Mikaela', startingClass: 'Hunter', chapter: 'Dietrich’s Path', recruitment: 'Dietrich’s Path: Automatic. Other paths: unrecruitable in Part I.' },
    ],
  },
  {
    faction: 'Megaira’s Beacon (Theodora’s Path · Wolf Obelisk)',
    members: [
      { name: 'Theodora', startingClass: 'Noble (Wolf Obelisk)', chapter: 'Theodora’s Path · Ch. 1', recruitment: 'Theodora’s Path: Ch. 1. Other paths: guest in Ch. 4/6 Qualifiers; clear Theodora’s Paralogue to keep.' },
      { name: 'Bonaventure', startingClass: 'Soldier', chapter: 'Theodora’s Path', recruitment: 'Theodora’s Path: Automatic.' },
      { name: 'Tobias', startingClass: 'Gladiator', chapter: 'Theodora’s Path', recruitment: 'Theodora’s Path: Automatic; strictly exclusive to Theodora’s Path.' },
      { name: 'Lysander', startingClass: 'Diviner', chapter: 'Theodora’s Path', recruitment: 'Theodora’s Path: Automatic.' },
      { name: 'Lilian', startingClass: 'Hunter', chapter: 'Theodora’s Path', recruitment: 'Theodora’s Path: Automatic.' },
    ],
  },
  {
    faction: 'Rose Tempest (Leda’s Path · Eagle Obelisk)',
    members: [
      { name: 'Leda', startingClass: 'Commoner (Eagle Obelisk)', chapter: 'Leda’s Path · Ch. 1', recruitment: 'Leda’s Path: Ch. 1. Other paths: guest in Ch. 6/7 Qualifiers; clear Leda’s Paralogue to keep.' },
      { name: 'Buccar', startingClass: 'Gladiator', chapter: 'Leda’s Path', recruitment: 'Leda’s Path: Automatic.' },
      { name: 'Sirocco', startingClass: 'Ornius Rider', chapter: 'Leda’s Path · Ch. 1', recruitment: `Leda’s Path: Ch. 1 automatic. Other paths: ${sharedNonRouteRecruit} Ch. 7–8+, Support Lv. 1–3, Renown Lv. 5–9, and complete Sirocco’s Request.` },
      { name: 'Mu', startingClass: 'Diviner', chapter: 'Leda’s Path · Ch. 1', recruitment: `Leda’s Path: Ch. 1 automatic. Other paths: ${sharedNonRouteRecruit} Ch. 6–9+, Support Lv. 3, Renown Lv. 7–9, and deliver 3 Glirmosa.` },
      { name: 'Olympia', startingClass: 'Hunter', chapter: 'Leda’s Path · Ch. 4', recruitment: `Leda’s Path: Ch. 4 automatic. Other paths: ${sharedNonRouteRecruit} Ch. 6–9+, Support Lv. 3, Renown Lv. 6–9, and complete 3 Requests.` },
    ],
  },
  {
    faction: 'Fiery Mane (Heroic Games Clan)',
    members: [
      { name: 'Bertrand', startingClass: 'Not supplied in notes', chapter: 'Part III', recruitment: 'Join in Part III via the Bertrand Paralogue.' },
      { name: 'Gaitz', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Dante', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Goliath', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: `Give a Gift first to unlock the Recruit prompt; then Support + Renown + deliver 3 Giant’s Meat (farmed at Secret Altar).` },
      { name: 'Jester', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: `Give a Gift first to unlock the Recruit prompt; then Support + Renown + complete Jester’s Request.` },
    ],
  },
  {
    faction: 'Tale of the Moon (Heroic Games Clan)',
    members: [
      { name: 'Talimun', startingClass: 'Not supplied in notes', chapter: 'Part III', recruitment: 'Join in Part III via the Talimun Paralogue.' },
      { name: 'Ursula', startingClass: 'Not supplied in notes', chapter: 'Part II / Part III', recruitment: 'Clear Talimun’s Paralogue; unavailable on Leda’s Path.' },
      { name: 'Simon', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Ludia', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Fianna', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
    ],
  },
  {
    faction: 'Linaria Dewdrops (Heroic Games Clan)',
    members: [
      { name: 'Orchel', startingClass: 'Not supplied in notes', chapter: 'Part III', recruitment: 'Join in Part III via the Orchel Paralogue.' },
      { name: 'Diego', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Ninae', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: `Give a Gift first to unlock the Recruit prompt; then Support + Renown + deliver 1 Paradise Fish (caught only at Lake Brontes).` },
      { name: 'Seteth', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Loretta', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: 'Give a Gift first to unlock the Recruit prompt; then Support + Renown (Renown Lv. 5 on Theodora’s Path; Renown Lv. 8 on Dietrich’s Path) + Negotiation.' },
    ],
  },
  {
    faction: 'Bridal Party of the Pale Raven (Heroic Games Clan)',
    members: [
      { name: 'Anatolia', startingClass: 'Not supplied in notes', chapter: 'Part III', recruitment: 'Join in Part III via the Anatolia Paralogue.' },
      { name: 'Sha Lan', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Nezha', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Dadao', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Halvin', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: `Give a Gift first to unlock the Recruit prompt; then Support + Renown + deliver 10 Dates (fruit item).` },
    ],
  },
  {
    faction: 'Other Clan Leaders & Recruits',
    members: [
      { name: 'Benditz', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Alexandra', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Zarcone', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Jasmine', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: `Give a Gift first to unlock the Recruit prompt; then Support + Renown + pay 500G–2,000G.` },
      { name: 'Kiroc', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: `Give a Gift first to unlock the Recruit prompt; then Support + Renown + deliver Pure Water (3 on Leda’s Path; 8 on Theodora’s Path).` },
      { name: 'Inyoni', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: `Give a Gift first to unlock the Recruit prompt; then Support + Renown + pay 3,000G.` },
      { name: 'Peppe', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Sofia', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: sharedClanRecruit },
      { name: 'Io', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: `Give a Gift first to unlock the Recruit prompt; then Support + Renown + pay 800G–1,500G.` },
      { name: 'Yang Jie', startingClass: 'Not supplied in notes', chapter: 'Part I · Cross-route', recruitment: `Give a Gift first to unlock the Recruit prompt; then Support + Renown + answer Yang Jie’s dialogue questions correctly.` },
    ],
  },
  {
    faction: 'Part II & Part III Story / Paralogue Recruits',
    members: [
      { name: 'Creek', startingClass: 'Not supplied in notes', chapter: 'Part II · Ch. 2', recruitment: 'Defeat Creek in Part II Ch. 2 to recruit him.' },
      { name: 'Nathan', startingClass: 'Not supplied in notes', chapter: 'Part II · Ch. 3', recruitment: 'Defeat Nathan with Creek in Part II Ch. 3 to recruit Nathan.' },
      { name: 'Centurio', startingClass: 'Not supplied in notes', chapter: 'Later story chapters', recruitment: 'Join automatically through later story chapters.' },
      { name: 'Aswan', startingClass: 'Not supplied in notes', chapter: 'Later story chapters', recruitment: 'Join automatically through later story chapters.' },
    ],
  },
];

const toId = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const characters: Character[] = rosterGroups.flatMap(({ faction, members }) =>
  members.map((member) => ({ ...member, faction, id: `${toId(faction)}-${toId(member.name)}` })),
);

type ClassDefinition = { name: string; certification: string; mastery: string };
type ClassGroup = { tier: ClassTier; license: string; classes: ClassDefinition[] };
const classGroups: ClassGroup[] = [
  {
    tier: 'Base',
    license: 'Default starting lore class',
    classes: [
      { name: 'Commoner', certification: 'Usable: all weapons & known magic', mastery: 'Combat Basics (+3 Hit/Avoid)' },
      { name: 'Noble', certification: 'Usable: all weapons & known magic', mastery: 'Combat Basics (+3 Hit/Avoid)' },
    ],
  },
  {
    tier: 'Beginner',
    license: 'Beginner License · Ideal Lv. 5, Renown Lv. 1',
    classes: [
      { name: 'Gladiator', certification: 'Sword, Axe, or Gauntlets D', mastery: 'Attack Basics (Str +1)' },
      { name: 'Hunter', certification: 'Bow or Sword D', mastery: 'Hunting Basics (Dex/Spd +1)' },
      { name: 'Soldier', certification: 'Spear or Axe D', mastery: 'Defense Basics (Def +1)' },
      { name: 'Ornius Rider', certification: 'Riding E+, Spear or Axe D', mastery: 'Offense Basics (Str/Mag +1)' },
      { name: 'Diviner', certification: 'Black Magic or White Magic D', mastery: 'Magic Basics (Mag/Res +1)' },
    ],
  },
  {
    tier: 'Specialty',
    license: 'Specialty License · Ideal Lv. 20, Renown Lv. 4',
    classes: [
      { name: 'Myrmidon', certification: 'Sword C', mastery: 'Ravaging Arts (+6 Crit damage)' },
      { name: 'Brigand', certification: 'Axe or Sword C', mastery: 'Regroup (+20 Avoid when foe misses)' },
      { name: 'Pugilist', certification: 'Gauntlets C', mastery: 'Attack, Get Back (+10 Avoid on Combat Art)' },
      { name: 'Archer', certification: 'Bow C', mastery: 'Crescendo (+3 Hit per defeat, max 30)' },
      { name: 'Rogue', certification: 'Bow C, Sword C', mastery: 'In Shadow (+10 Avoid after defeating foe)' },
      { name: 'Armored Knight', certification: 'Heavy Armor E+, Spear or Axe C', mastery: 'Great Counter (+3 Atk when foe initiates)' },
      { name: 'Light Cavalry', certification: 'Riding D, Spear or Sword C', mastery: 'Bolster Health' },
      { name: 'Charioteer', certification: 'Riding D, Bow C', mastery: 'Charger' },
      { name: 'Armored Ornius Rider', certification: 'Riding D, Spear or Axe C', mastery: 'Sense Threat' },
      { name: 'Wing Soldier', certification: 'Flying D, Spear or Sword C', mastery: 'Alert Stance' },
      { name: 'Shaman', certification: 'Black Magic C', mastery: 'Fiendish Blow' },
      { name: 'Priest', certification: 'White Magic C', mastery: 'Piety' },
    ],
  },
  {
    tier: 'Advanced',
    license: 'Advanced License · Ideal Lv. 35, Renown Lv. 8',
    classes: [
      { name: 'Shido', certification: 'Sword B', mastery: 'Astra / Sword Crit' },
      { name: 'Dancer', certification: 'Complete “Great Dancer’s Successor” request (Leda’s Path Ch. 9)', mastery: 'Special Dance' },
      { name: 'Warrior', certification: 'Axe B', mastery: 'Wrath' },
      { name: 'Blacksmith', certification: 'Axe B, Heavy Armor D', mastery: 'Armsthrift' },
      { name: 'Sniper', certification: 'Bow B', mastery: 'Hunter’s Volley' },
      { name: 'Forest Knight', certification: 'Riding D, Bow B', mastery: 'Hunter’s Eye' },
      { name: 'Ranger', certification: 'Sword B, Bow B (Dietrich/Leda)', mastery: 'Countershot' },
      { name: 'Guardian', certification: 'Spear B (Dietrich/Theodora)', mastery: 'Brace' },
      { name: 'Dreadnought', certification: 'Heavy Armor D, Spear or Axe B', mastery: 'Focused Counter' },
      { name: 'Bardinger', certification: 'Riding D, Spear B', mastery: 'Rally Spectrum' },
      { name: 'Cataphract', certification: 'Heavy Armor E+, Riding D, Spear or Axe B (Theodora Ch. 9 request)', mastery: 'Pavise' },
      { name: 'Elephant Rider', certification: 'Unlocked in Part III (Elephant License)', mastery: 'Trample' },
      { name: 'Caladrius', certification: 'Riding D, Black Magic B (Castor’s Mentoring on Cai’s Path)', mastery: 'Overtake' },
      { name: 'Dragoon', certification: 'Flying D, Spear or Axe B (Cai/Theodora request)', mastery: 'Besieger' },
      { name: 'Ovate', certification: 'Black Magic B', mastery: 'Bind Speed' },
      { name: 'Bishop', certification: 'White Magic B', mastery: 'Barrier' },
      { name: 'Troubadour', certification: 'Riding D, White Magic B (Cai/Leda request)', mastery: 'Song of Courage' },
    ],
  },
  {
    tier: 'Master',
    license: 'Master License',
    classes: [
      { name: 'Swordmaster', certification: 'Sword A', mastery: 'Not supplied in the notes' },
      { name: 'High Savant', certification: 'Sword A, Black Magic B, Riding B', mastery: 'Not supplied in the notes' },
      { name: 'Battlemaster', certification: 'Axe A, Gauntlets B', mastery: 'Not supplied in the notes' },
      { name: 'War Monk', certification: 'Gauntlets A, White Magic B', mastery: 'Not supplied in the notes' },
      { name: 'Bow Adept', certification: 'Bow A', mastery: 'Not supplied in the notes' },
      { name: 'Bow Knight', certification: 'Bow A, Riding B', mastery: 'Not supplied in the notes' },
      { name: 'Shadow Seeker', certification: 'Sword B, Bow A', mastery: 'Not supplied in the notes' },
      { name: 'Sentinel', certification: 'Spear A, White Magic B', mastery: 'Not supplied in the notes' },
      { name: 'Castle Knight', certification: 'Spear/Axe A, Heavy Armor B', mastery: 'Not supplied in the notes' },
      { name: 'Orichaldia', certification: 'Spear A, Riding B', mastery: 'Not supplied in the notes' },
      { name: 'Great Knight', certification: 'Axe/Spear B, Heavy Armor B, Riding A', mastery: 'Not supplied in the notes' },
      { name: 'Celestial Trooper', certification: 'Spear/Axe B, Flying A', mastery: 'Not supplied in the notes' },
      { name: 'Bau Lord', certification: 'Elephant Rider A', mastery: 'Not supplied in the notes' },
      { name: 'Druid', certification: 'Black Magic A', mastery: 'Not supplied in the notes' },
      { name: 'Wiseman', certification: 'Black/White Magic A', mastery: 'Not supplied in the notes' },
      { name: 'Valkyrium', certification: 'Black/White Magic B, Riding A', mastery: 'Not supplied in the notes' },
    ],
  },
  {
    tier: 'Divine',
    license: 'Endgame / Part III exclusive',
    classes: [
      { name: 'The Blade', certification: 'Endgame / Part III exclusive', mastery: 'Not supplied in the notes' },
      { name: 'The Apsara', certification: 'Endgame / Part III exclusive', mastery: 'Not supplied in the notes' },
      { name: 'The Eternal', certification: 'Endgame / Part III exclusive', mastery: 'Not supplied in the notes' },
      { name: 'The Godhand', certification: 'Endgame / Part III exclusive', mastery: 'Not supplied in the notes' },
      { name: 'The Calamity', certification: 'Endgame / Part III exclusive', mastery: 'Not supplied in the notes' },
      { name: 'The Trident', certification: 'Endgame / Part III exclusive', mastery: 'Not supplied in the notes' },
      { name: 'The Cavalier', certification: 'Endgame / Part III exclusive', mastery: 'Not supplied in the notes' },
      { name: 'The Avatar', certification: 'Endgame / Part III exclusive', mastery: 'Not supplied in the notes' },
    ],
  },
];

export const classes: ClassRecord[] = classGroups.flatMap(({ tier, license, classes: tierClasses }) =>
  tierClasses.map((classInfo) => ({
    id: `class-${toId(classInfo.name)}`,
    name: classInfo.name,
    tier,
    certificationRequirements: classInfo.certification.startsWith(license)
      ? classInfo.certification
      : `${license} · ${classInfo.certification}`,
    masterySkill: classInfo.mastery,
  })),
);

export const items: ItemRecord[] = [
  {
    id: 'item-salamander-plus-3',
    name: 'Salamander +3',
    kind: 'Key item',
    rank: 'Not supplied in notes',
    note: 'Found while exploring Kunlun before speaking to Hong Hua.',
  },
];
