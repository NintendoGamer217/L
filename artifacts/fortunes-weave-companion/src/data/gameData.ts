/** Data transcribed from the supplied Fortune's Weave guide notes. */
export type Objective = { id: string; text: string };
export type Chapter = {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  winCondition: string;
  bossTip: string;
  lootNote?: string;
  recruits: string[];
  steps: string[];
  objectives: Objective[];
};
export type Act = { id: string; title: string; chapters: Chapter[] };
export type LootType = 'Chests' | 'Missables' | 'Events' | 'Weapons' | 'Gold' | 'Seals' | 'Stat Boosters' | 'Key Items';
export type Loot = { id: string; name: string; chapter: string; type: LootType; source: string };
export type FlameLordPath = 'Cai' | 'Dietrich' | 'Theodora' | 'Leda';
export type Character = {
  id: string;
  name: string;
  faction: string;
  startingClass: string;
  recruitmentByPath: Record<FlameLordPath, string>;
  sharedRecruitmentNote?: string;
  postPartIRecruitment?: string;
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
  {
    id: 'theodora-path-wolf-part-i',
    title: 'Theodora’s Path · Wolf Obelisk · Part I',
    chapters: [
      {
        id: 'theodora-ch01',
        title: 'Chapter 1 · Theodora, the Iron Bastion',
        subtitle: 'Theodora, Bonaventure, and Tobias join',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: Reach the target destination and defeat all enemy units. Loss if Theodora falls.',
        bossTip: 'Diego · Bahr Vahn',
        recruits: ['Theodora', 'Bonaventure', 'Tobias'],
        steps: [],
        objectives: [
          { id: 'theodora-ch01-objective', text: 'Reach the target destination and defeat all enemy units' },
        ],
      },
      {
        id: 'theodora-ch02',
        title: 'Chapter 2 · Dyan’s Uprising',
        subtitle: 'Check glowing blue overworld spots',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: Defeat Dyan. Loss if Theodora falls.',
        bossTip: 'Dyan · Huver',
        recruits: [],
        steps: ['Check glowing blue overworld spots for early hidden events.'],
        objectives: [
          { id: 'theodora-ch02-objective', text: 'Defeat Dyan' },
        ],
      },
      {
        id: 'theodora-ch03',
        title: 'Chapter 3 · Tumult at the Imperial Capital',
        subtitle: 'Guests join the battle',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: Defeat Idi. Loss if Theodora or Orchel falls.',
        bossTip: 'Idi',
        recruits: ['Orchel (guest)', 'Diego (guest)', 'Seteth (guest)', 'Loretta (guest)'],
        steps: [],
        objectives: [
          { id: 'theodora-ch03-objective', text: 'Defeat Idi' },
        ],
      },
      {
        id: 'theodora-ch04',
        title: 'Chapter 4 · Unlikely Allegiances',
        subtitle: 'Permanent recruits and new systems',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: Defeat Zarcone. Loss if Theodora, Cai, or Orchel falls.',
        bossTip: 'Zarcone',
        recruits: ['Lilian (permanent)', 'Lysander (permanent)'],
        steps: ['Unlock Arena Training, Class Licenses, and Battalions.'],
        objectives: [
          { id: 'theodora-ch04-objective', text: 'Defeat Zarcone' },
          { id: 'theodora-ch04-recruits', text: 'Have Lilian and Lysander join permanently' },
          { id: 'theodora-ch04-unlocks', text: 'Unlock Arena Training, Class Licenses, and Battalions' },
        ],
      },
      {
        id: 'theodora-ch05',
        title: 'Chapter 5 · An Ominous Clash',
        subtitle: 'Route guests join the battle',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: Defeat Bartholomé, then Bahr Vahn. Loss if Theodora, Talimun, or Anatolia falls.',
        bossTip: 'Bartholomé · Bahr Vahn',
        recruits: ['Talimun (guest)', 'Ursula (guest)', 'Anatolia (guest)', 'Sha Lan (guest)'],
        steps: [],
        objectives: [
          { id: 'theodora-ch05-objective', text: 'Defeat Bartholomé, then Bahr Vahn' },
        ],
      },
      {
        id: 'theodora-ch06',
        title: 'Chapter 6 · The Treasure Hunter',
        subtitle: 'Timed Hightown missable',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: Defeat Bahr Vahn. Loss if Theodora falls.',
        bossTip: 'Bahr Vahn',
        lootNote: 'Missable: speak to the coordinator in Hightown on 4/6 at 18:00 for cutscenes and a match with Bertrand against Yang Jie.',
        recruits: ['Hong Hua (guest)'],
        steps: ['Missable: speak to the coordinator in Hightown on 4/6 at 18:00 for cutscenes and a match with Bertrand against Yang Jie.'],
        objectives: [
          { id: 'theodora-ch06-objective', text: 'Defeat Bahr Vahn' },
        ],
      },
      {
        id: 'theodora-ch07',
        title: 'Chapter 7 · A Voice From the Darkness',
        subtitle: 'Arena hidden NPC',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: Defeat Alexandra. Loss if Theodora, Dietrich, or Leda falls.',
        bossTip: 'Alexandra',
        lootNote: 'Hidden NPC: fast-travel to the Arena on turn one and walk right near Sofia and Peter.',
        recruits: ['Dietrich (guest)', 'Fabio (guest)', 'Leda (guest)', 'Buccar (guest)'],
        steps: ['Hidden NPC: fast-travel to the Arena on turn one and walk right near Sofia and Peter.'],
        objectives: [
          { id: 'theodora-ch07-objective', text: 'Defeat Alexandra' },
        ],
      },
      {
        id: 'theodora-ch08',
        title: 'Chapter 8 · Rendezvous With Troy',
        subtitle: '20-turn deadline',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: Defeat Nuzzo within 20 turns. Loss if 20 turns pass or Theodora falls.',
        bossTip: 'Nuzzo',
        recruits: [],
        steps: [],
        objectives: [
          { id: 'theodora-ch08-objective', text: 'Defeat Nuzzo within 20 turns' },
        ],
      },
      {
        id: 'theodora-ch09',
        title: 'Chapter 9 · To the Forbidden Land',
        subtitle: 'EX-061 dungeon · Cataphract unlock',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: Seize the epimenium. Loss if Theodora falls.',
        bossTip: 'Digamma',
        lootNote: 'Southern Passage Dungeon (EX-061) features 2 chests and a rest area.',
        recruits: ['Long (guest)'],
        steps: [
          'Explore Southern Passage Dungeon (EX-061), which features 2 chests and a rest area.',
          'Unlock the Cataphract class.',
        ],
        objectives: [
          { id: 'theodora-ch09-objective', text: 'Seize the epimenium' },
        ],
      },
      {
        id: 'theodora-ch10',
        title: 'Chapter 10 · The Queen and the Merchant',
        subtitle: '12-turn orb contest',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: After 12 turns, hold more orbs than the enemy. Loss if the enemy holds more.',
        bossTip: 'Talimun · Ursula · Simon · Fianna · Ludia',
        recruits: [],
        steps: [],
        objectives: [
          { id: 'theodora-ch10-objective', text: 'After 12 turns, hold more orbs than the enemy' },
        ],
      },
      {
        id: 'theodora-ch11',
        title: 'Chapter 11 · A Sudden Turn',
        subtitle: 'The battle turns against Cai',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: Defeat Cai. Loss if Theodora is defeated.',
        bossTip: 'Ultand · Peter · Tialla · Cai',
        recruits: [],
        steps: [],
        objectives: [
          { id: 'theodora-ch11-objective', text: 'Defeat Cai' },
        ],
      },
      {
        id: 'theodora-ch12',
        title: 'Chapter 12 · The War of Zanbar',
        subtitle: 'Final chapter of Part I',
        overview: 'Theodora’s Path · Wolf Obelisk · Part I.',
        winCondition: 'Objective: Defeat Dyan. Loss if Theodora falls.',
        bossTip: 'Klapka · Dyan',
        recruits: [],
        steps: [],
        objectives: [
          { id: 'theodora-ch12-objective', text: 'Defeat Dyan' },
        ],
      },
    ],
  },
  {
    id: 'leda-path-eagle-part-i',
    title: 'Leda’s Path · Eagle Obelisk · Part I',
    chapters: [
      {
        id: 'leda-ch01',
        title: 'Chapter 1 · The Vengeful Dancer',
        subtitle: 'Leda, Buccar, Sirocco, and Mu join',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Rout the enemy. Loss if Leda is defeated.',
        bossTip: 'Bjor',
        recruits: ['Leda', 'Buccar', 'Sirocco', 'Mu'],
        steps: [],
        objectives: [
          { id: 'leda-ch01-objective', text: 'Rout the enemy' },
        ],
      },
      {
        id: 'leda-ch02',
        title: 'Chapter 2 · Battle at Coris Mine',
        subtitle: 'Three dungeon chests · Mini Bow · Iron Fan',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Defeat Balboa. Loss if Leda is defeated.',
        bossTip: 'Balboa · drops Lakshashi’s Iron Fan (counts as a sword)',
        lootNote: 'Find 3 dungeon chests before the boss stone. During battle, defeat the archer near the chest for a Chest Key and loot the Mini Bow before defeating Balboa.',
        recruits: [],
        steps: ['Open the 3 dungeon chests before the boss stone.', 'During battle, defeat the archer near the chest for a Chest Key; use it to loot the Mini Bow before defeating Balboa.'],
        objectives: [
          { id: 'leda-ch02-objective', text: 'Defeat Balboa' },
        ],
      },
      {
        id: 'leda-ch03',
        title: 'Chapter 3 · The Rose of Caelus',
        subtitle: 'Keep 13 blue flames active after 10 turns',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Have at least 13 blue flames active after 10 turns. Loss if fewer than 13 remain after 10 turns.',
        bossTip: 'No boss supplied in the notes; Olympia joins.',
        recruits: ['Olympia (joins)'],
        steps: [],
        objectives: [
          { id: 'leda-ch03-objective', text: 'Have at least 13 blue flames active after 10 turns' },
        ],
      },
      {
        id: 'leda-ch04',
        title: 'Chapter 4 · The Indelible Past',
        subtitle: 'Lowtown gift event · Perform Quests unlock',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Have Leda escape the map. Loss if Leda is defeated.',
        bossTip: 'Lechner',
        lootNote: 'Event reward: receive the Red-Rose Bouquet gift during the Lowtown scenes. Unlocks Leda’s unique Perform Quests in towns and taverns for Renown, gold, Blaze Arts, and secret map spots.',
        recruits: [],
        steps: ['Leda’s unique Perform Quests unlock in towns and taverns, offering Renown, gold, Blaze Arts, and secret map spots.'],
        objectives: [
          { id: 'leda-ch04-objective', text: 'Have Leda escape the map' },
          { id: 'leda-ch04-perform-quests', text: 'Unlock Leda’s unique Perform Quests' },
        ],
      },
      {
        id: 'leda-ch05',
        title: 'Chapter 5 · Women at Battle',
        subtitle: 'Guests join the battle',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Defeat Jasmine. Loss if Leda, Orchel, or Anatolia falls.',
        bossTip: 'Jasmine',
        recruits: ['Orchel (guest)', 'Diego (guest)', 'Anatolia (guest)', 'Sha Lan (guest)'],
        steps: [],
        objectives: [
          { id: 'leda-ch05-objective', text: 'Defeat Jasmine' },
        ],
      },
      {
        id: 'leda-ch06',
        title: 'Chapter 6 · The Soaring Maiden',
        subtitle: 'Guests join the battle',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Defeat Alexandra. Loss if Leda, Dietrich, or Theodora falls.',
        bossTip: 'Alexandra',
        recruits: ['Dietrich (guest)', 'Fabio (guest)', 'Theodora (guest)', 'Bonaventure (guest)'],
        steps: [],
        objectives: [
          { id: 'leda-ch06-objective', text: 'Defeat Alexandra' },
        ],
      },
      {
        id: 'leda-ch07',
        title: 'Chapter 7 · Rose of Retribution',
        subtitle: 'Two named bosses',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Defeat Lechner. Loss if Leda is defeated.',
        bossTip: 'Maria · Lechner',
        recruits: [],
        steps: [],
        objectives: [
          { id: 'leda-ch07-objective', text: 'Defeat Lechner' },
        ],
      },
      {
        id: 'leda-ch08',
        title: 'Chapter 8 · Shape of the Conspiracy',
        subtitle: 'Guests join the battle',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Defeat Inyoni. Loss if Leda, Cai, or Talimun falls.',
        bossTip: 'Hong Hua · Inyoni',
        recruits: ['Cai (guest)', 'Tialla (guest)', 'Talimun (guest)', 'Ursula (guest)'],
        steps: [],
        objectives: [
          { id: 'leda-ch08-objective', text: 'Defeat Inyoni' },
        ],
      },
      {
        id: 'leda-ch09',
        title: 'Chapter 9 · Discordance',
        subtitle: 'Route-exclusive Dancer class request',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Defeat Cai. Loss if Leda is defeated.',
        bossTip: 'Buccar · Demonic Beast · Ultand · Peter · Tialla · Cai',
        recruits: [],
        steps: ['Route exclusive: complete the “Great Dancer’s Successor” request to unlock the Dancer class.'],
        objectives: [
          { id: 'leda-ch09-objective', text: 'Defeat Cai' },
          { id: 'leda-ch09-dancer-request', text: 'Complete “Great Dancer’s Successor” to unlock the Dancer class' },
        ],
      },
      {
        id: 'leda-ch10',
        title: 'Chapter 10 · A Father’s Request and a Daughter’s Wish',
        subtitle: 'Defeat Theodora',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Defeat Theodora. Loss if Leda is defeated.',
        bossTip: 'Tobias · Bonaventure · Theodora',
        recruits: [],
        steps: [],
        objectives: [
          { id: 'leda-ch10-objective', text: 'Defeat Theodora' },
        ],
      },
      {
        id: 'leda-ch11',
        title: 'Chapter 11 · Banquet of the Risen Dead',
        subtitle: 'Survive or rout the ambushing forces',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Survive / rout the ambushing forces. Loss if Leda is defeated.',
        bossTip: 'Not supplied in the notes.',
        recruits: [],
        steps: [],
        objectives: [
          { id: 'leda-ch11-objective', text: 'Survive / rout the ambushing forces' },
        ],
      },
      {
        id: 'leda-ch12',
        title: 'Chapter 12 · Revenge’s End',
        subtitle: 'Conclude Part I',
        overview: 'Leda’s Path · Eagle Obelisk · Part I.',
        winCondition: 'Objective: Defeat the conspiracy’s mastermind to conclude Part I. Loss if Leda is defeated.',
        bossTip: 'Conspiracy’s mastermind (name not supplied in the notes).',
        recruits: [],
        steps: [],
        objectives: [
          { id: 'leda-ch12-objective', text: 'Defeat the conspiracy’s mastermind to conclude Part I' },
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
  {
    id: 'theodora-ch06-hightown-missable',
    name: 'Hightown coordinator · Bertrand vs. Yang Jie',
    chapter: 'theodora-ch06',
    type: 'Missables',
    source: '4/6 at 18:00 · speak to the coordinator in Hightown for cutscenes and a match with Bertrand against Yang Jie.',
  },
  {
    id: 'theodora-ch07-arena-hidden-npc',
    name: 'Arena hidden NPC near Sofia and Peter',
    chapter: 'theodora-ch07',
    type: 'Missables',
    source: 'On turn one, fast-travel to the Arena and walk right near Sofia and Peter.',
  },
  {
    id: 'theodora-ch09-ex061-chest-1',
    name: 'Chest 1 · Southern Passage Dungeon (EX-061)',
    chapter: 'theodora-ch09',
    type: 'Chests',
    source: 'Theodora’s Path, Chapter 9 · contents not supplied in the notes.',
  },
  {
    id: 'theodora-ch09-ex061-chest-2',
    name: 'Chest 2 · Southern Passage Dungeon (EX-061)',
    chapter: 'theodora-ch09',
    type: 'Chests',
    source: 'Theodora’s Path, Chapter 9 · contents not supplied in the notes.',
  },
  {
    id: 'leda-ch02-corismine-chest-1',
    name: 'Chest 1 · Coris Mine dungeon',
    chapter: 'leda-ch02',
    type: 'Chests',
    source: 'Chapter 2 · before the boss stone.',
  },
  {
    id: 'leda-ch02-corismine-chest-2',
    name: 'Chest 2 · Coris Mine dungeon',
    chapter: 'leda-ch02',
    type: 'Chests',
    source: 'Chapter 2 · before the boss stone.',
  },
  {
    id: 'leda-ch02-corismine-chest-3',
    name: 'Chest 3 · Coris Mine dungeon',
    chapter: 'leda-ch02',
    type: 'Chests',
    source: 'Chapter 2 · before the boss stone.',
  },
  {
    id: 'leda-ch02-chest-key',
    name: 'Chest Key',
    chapter: 'leda-ch02',
    type: 'Key Items',
    source: 'Battle · defeat the archer near the chest; get the key before defeating Balboa.',
  },
  {
    id: 'leda-ch02-mini-bow',
    name: 'Mini Bow',
    chapter: 'leda-ch02',
    type: 'Weapons',
    source: 'Battle chest · use the Chest Key before defeating Balboa.',
  },
  {
    id: 'leda-ch02-iron-fan',
    name: 'Lakshashi’s Iron Fan',
    chapter: 'leda-ch02',
    type: 'Weapons',
    source: 'Balboa drop · counts as a sword.',
  },
  {
    id: 'leda-ch04-red-rose-bouquet',
    name: 'Red-Rose Bouquet',
    chapter: 'leda-ch04',
    type: 'Events',
    source: 'Chapter 4 · receive the gift during the Lowtown scenes.',
  },
];

type RosterMember = Omit<Character, 'id' | 'faction'>;
type RecruitmentNotes = Pick<Character, 'sharedRecruitmentNote' | 'postPartIRecruitment'>;
const unavailableInPartI = 'Unavailable in Part I.';
const guestOnlyInPartI = 'Guest only in Part I.';
const noPartIRecruitmentListed = 'No Part I recruitment listed in the supplied notes.';
const member = (
  name: string,
  startingClass: string,
  cai: string,
  dietrich: string,
  theodora: string,
  leda: string,
  notes: RecruitmentNotes = {},
): RosterMember => ({
  name,
  startingClass,
  recruitmentByPath: { Cai: cai, Dietrich: dietrich, Theodora: theodora, Leda: leda },
  ...notes,
});
const rosterGroups: { faction: string; members: RosterMember[] }[] = [
  {
    faction: "Promised One's Army (Prologue Core)",
    members: [
      member('Eshmel (Avatar)', 'Guardian (Prologue) / Commoner (Main Story)', 'Prologue Ch. 1 (All paths)', 'Prologue Ch. 1 (All paths)', 'Prologue Ch. 1 (All paths)', 'Prologue Ch. 1 (All paths)'),
      member('Hong Hua', 'Ovate', 'Prologue Ch. 1 (All paths)', 'Prologue Ch. 1 (All paths)', 'Prologue Ch. 1 (All paths)', 'Prologue Ch. 1 (All paths)'),
      member('Troy', 'War Monk', 'Prologue Ch. 2 (All paths)', 'Prologue Ch. 2 (All paths)', 'Prologue Ch. 2 (All paths)', 'Prologue Ch. 2 (All paths)'),
    ],
  },
  {
    faction: 'Ribeira Winds (Cai’s Path · Fox Obelisk)',
    members: [
      member('Cai', 'Commoner', 'Ch. 1 (Auto)', 'Clear Cai’s Paralogue.', 'Clear Cai’s Paralogue.', 'Guest in Part I, Ch. 8; clear Cai’s Paralogue.'),
      member('Tialla', 'Commoner (Diviner/Priest path)', 'Ch. 1 (Auto)', 'Ch. 11+ (3S, 9R, clear Cai’s Paralogue, 3,000G)', 'Ch. 12 (3S, 10R, clear Cai’s Paralogue, 3,000G)', 'Ch. 11+ (3S, 8R, clear Cai’s Paralogue, 3,000G; guest in Ch. 8)'),
      member('Peter', 'Commoner (Hunter/Archer path)', 'Ch. 1 (Auto)', 'Ch. 7+ (3S, 8R, give 1 Phantom Ginji)', 'Ch. 8+ (3S, 7R, give 1 Phantom Ginji)', 'Ch. 9+ (3S, 10R, give 1 Phantom Ginji)'),
      member('Ultand', 'Diviner', 'Ch. 6 (Auto)', 'Ch. 5+ (3S, 5R, give Mother’s Gift)', 'Ch. 7+ (3S, 6R, give Mother’s Gift)', 'Ch. 8+ (3S, 8R, give Mother’s Gift)'),
    ],
  },
  {
    faction: 'House Lamine (Dietrich’s Path · Lion Obelisk)',
    members: [
      member('Dietrich', 'Commoner', guestOnlyInPartI, 'Ch. 1 (Auto)', 'Guest in Ch. 7; clear Dietrich’s Paralogue.', 'Guest in Ch. 6; clear Dietrich’s Paralogue.'),
      member('Fabio', 'Commoner (Diviner/Shaman path)', 'Guest only in Part I.', 'Ch. 1 (Auto)', 'Guest only in Part I.', 'Ch. 11+ (3S, 9R, clear Dietrich’s Paralogue, complete Fabio’s Request after 11/4; guest in Ch. 6)'),
      member('Esmeralda', 'Commoner (Soldier/Armored Knight path)', 'Ch. 7+ (2S, 7R, complete Request)', 'Ch. 2 (Auto)', 'Ch. 9+ (3S, 9R, complete Request)', 'Ch. 7+ (3S, 6R, complete Request)'),
      member('Mikaela', 'Hunter / Archer', 'Ch. 6+ (3S, 5R, 3,000G)', 'Ch. 4 (Auto)', 'Ch. 8+ (3S, 8R, 3,000G)', 'Ch. 7+ (3S, 6R, 3,000G)'),
    ],
  },
  {
    faction: 'Megaira’s Beacon (Theodora’s Path · Wolf Obelisk)',
    members: [
      member('Theodora', 'Noble', 'Guest only in Part I.', 'Clear Theodora’s Paralogue.', 'Ch. 1 (Auto)', 'Guest in Part I, Ch. 6.'),
      member('Bonaventure', 'Noble (Myrmidon/Shaman path)', guestOnlyInPartI, guestOnlyInPartI, 'Ch. 1 (Auto)', 'Guest in Part I, Ch. 6.'),
      member('Tobias', 'Noble (Soldier/Armored Knight path)', 'Unavailable; strictly exclusive to Theodora’s Path.', 'Unavailable; strictly exclusive to Theodora’s Path.', 'Ch. 1 (Auto; exclusive to Theodora’s Path)', 'Unavailable; strictly exclusive to Theodora’s Path.'),
      member('Lilian', 'Hunter / Archer', 'Ch. 8–11 (2S, 8R, 5,000G)', 'Ch. 7–11 (2S, 8R, 5,000G)', 'Ch. 4 (Auto)', 'Ch. 7–11 (2S, 7R, 5,000G)'),
      member('Lysander', 'Ornius Rider / Armored Ornius Rider', 'Ch. 8–11 (3S, 8R, give 5 Iron Spears)', 'Ch. 6–11 (3S, 6R, give 5 Iron Spears)', 'Ch. 4 (Auto)', 'Ch. 7–11 (3S, 7R, give 5 Iron Spears)'),
    ],
  },
  {
    faction: 'Rose Tempest (Leda’s Path · Eagle Obelisk)',
    members: [
      member('Leda', 'Commoner', guestOnlyInPartI, 'Clear Leda’s Paralogue.', 'Guest in Ch. 7; clear Leda’s Paralogue.', 'Ch. 1 (Auto)'),
      member('Buccar', 'Armored Knight', guestOnlyInPartI, 'Ch. 9+ (3S, 8R, clear Leda’s Paralogue)', 'Ch. 10+ (3S, 8R, clear Leda’s Paralogue; guest in Ch. 7)', 'Ch. 1 (Auto)'),
      member('Sirocco', 'Myrmidon', 'Ch. 8+ (3S, 9R, give Monument Verse)', 'Ch. 7+ (3S, 9R, give Monument Verse)', 'Ch. 7+ (1S, 5R, give Monument Verse)', 'Ch. 1 (Auto)'),
      member('Mu', 'Pugilist', 'Ch. 8+ (3S, 9R, give 3 Glirmosa)', 'Ch. 6+ (3S, 7R, give 3 Glirmosa)', 'Ch. 9+ (3S, 9R, give 3 Glirmosa)', 'Ch. 1 (Auto)'),
      member('Olympia', 'Priest', 'Ch. 8+ (3S, 8R, clear 3 Requests)', 'Ch. 6+ (3S, 6R, clear 3 Requests)', 'Ch. 9+ (3S, 9R, clear 3 Requests)', 'Ch. 3 (Auto)'),
    ],
  },
  {
    faction: 'Fiery Mane (Heroic Games Clan)',
    members: [
      member('Gaitz', 'Bardinger', 'Unavailable; Dietrich-exclusive.', 'Ch. 12 (3S, 10R, clear Bertrand’s Paralogue) · Dietrich exclusive.', 'Unavailable; Dietrich-exclusive.', 'Unavailable; Dietrich-exclusive.'),
      member('Dante', 'Diviner / Ovate', 'Ch. 9+ (3S, 10R)', 'Ch. 7+ (2S, 8R)', 'Ch. 7+ (3S, 6R)', 'Ch. 9+ (3S, 10R)', { sharedRecruitmentNote: 'All paths: give 8,000G.' }),
      member('Goliath', 'Armored Knight / Dreadnought', 'Ch. 7+ (3S, 7R)', 'Ch. 6+ (3S, 6R)', 'Ch. 9+ (3S, 9R)', 'Ch. 9+ (3S, 10R)', { sharedRecruitmentNote: 'All paths: give 3 Giants’ Meat.' }),
      member('Jester', 'Myrmidon / Shido', 'Ch. 9+ (3S, 10R)', 'Ch. 6+ (3S, 6R)', 'Ch. 9+ (3S, 9R)', 'Ch. 9+ (3S, 10R)', { sharedRecruitmentNote: 'All paths: clear Jester’s 3 Combat Quests.' }),
    ],
  },
  {
    faction: 'Tale of the Moon (Heroic Games Clan)',
    members: [
      member('Ursula', 'Hunter / Ranger', 'Ch. 10+ (3S, 10R)', 'Ch. 9+ (3S, 7R)', 'Ch. 11+ (3S, 9R; guest in Ch. 5)', 'Guest in Ch. 5 and Ch. 8; unavailable for Part I recruitment.', { sharedRecruitmentNote: 'Clear Talimun’s Paralogue and agree 3 times.' }),
      member('Simon', 'Rogue', 'Ch. 8+ (3S, 8R)', 'Ch. 6+ (3S, 7R)', 'Ch. 8+ (3S, 7R)', 'Ch. 7+ (3S, 6R)', { sharedRecruitmentNote: 'All paths: pay 500G and pick Tails.' }),
      member('Ludia', 'Diviner / Bishop', 'Ch. 8+ (3S, 9R)', 'Ch. 7+ (3S, 9R)', 'Ch. 8+ (3S, 7R)', 'Ch. 7+ (3S, 7R)', { sharedRecruitmentNote: 'All paths: gather information at Callianeira Port.' }),
      member('Fianna', 'Priest / Troubadour', 'Ch. 8+ (3S, 8R)', 'Ch. 6+ (3S, 7R)', 'Ch. 9+ (3S, 9R)', 'Ch. 6+ (3S, 5R)', { sharedRecruitmentNote: 'All paths: give 3,000G.' }),
    ],
  },
  {
    faction: 'Linaria Dewdrops (Heroic Games Clan)',
    members: [
      member('Diego', 'Brigand / Warrior', 'Ch. 11+ (3S, 10R)', 'Ch. 11+ (3S, 9R)', 'Ch. 12 (2S, 8R; guest in Ch. 3)', 'Ch. 11+ (3S, 8R; guest in Ch. 5)', { sharedRecruitmentNote: 'All paths: clear Orchel’s Regret Paralogue.' }),
      member('Ninae', 'Soldier / Sentinel', 'Ch. 6+ (3S, 6R)', 'Ch. 7+ (3S, 8R)', 'Ch. 7+ (3S, 6R)', 'Ch. 8+ (3S, 8R)', { sharedRecruitmentNote: 'All paths: give 1 Paradise Fish.' }),
      member('Seteth', 'Priest / Bishop', 'Ch. 6+ (3S, 6R)', 'Unavailable.', 'Ch. 7+ (3S, 6R; guest in Ch. 3)', 'Ch. 9+ (3S, 10R)', { sharedRecruitmentNote: 'Complete Seteth’s Request.' }),
      member('Loretta', 'Myrmidon', 'Ch. 7+ (3S, 7R)', 'Ch. 7+ (3S, 9R)', 'Ch. 7+ (3S, 5R; guest in Ch. 3)', 'Ch. 6+ (3S, 5R)', { sharedRecruitmentNote: 'All paths: give 3 Iron Swords.' }),
    ],
  },
  {
    faction: 'Bridal Party of the Pale Raven (Heroic Games Clan)',
    members: [
      member('Sha Lan', 'Diviner / Wiseman', unavailableInPartI, 'Ch. 11+ (3S, 10R)', 'Unavailable for Part I recruitment; guest in Ch. 5.', 'Ch. 10+ (3S, 8R; guest in Ch. 5)', { sharedRecruitmentNote: 'Clear Anatolia’s Paralogue and answer 3 questions.' }),
      member('Nezha', 'Gladiator', 'Ch. 6–10 (3S, 6R)', 'Ch. 8–12 (3S, 10R)', 'Ch. 7–11 (2S, 6R)', 'Ch. 9–12 (3S, 9R)', { sharedRecruitmentNote: 'All paths: give 3 Sandworm Meat.' }),
      member('Dadao', 'Gladiator', 'Ch. 7–10 (3S, 7R)', 'Ch. 8–12 (3S, 10R)', 'Ch. 7–11 (2S, 5R)', 'Ch. 6–12 (2S, 5R)', { sharedRecruitmentNote: 'All paths: give 2 Kothar Gar.' }),
      member('Halvin', 'Hunter', 'Ch. 6–10 (3S, 5R)', 'Ch. 7–12 (3S, 9R)', 'Ch. 8–11 (3S, 7R)', 'Ch. 7–12 (3S, 7R)', { sharedRecruitmentNote: 'All paths: give 10 Dates.' }),
    ],
  },
  {
    faction: 'Other Clan Leaders & Recruits',
    members: [
      member('Guzran', 'Myrmidon', 'Ch. 3 (Auto)', 'Ch. 7+ (3S, 8R)', 'Ch. 8+ (3S, 8R)', 'Ch. 5+ (1S, 3R)'),
      member('Yang Jie', 'Diviner', 'Ch. 4+ (2S, 3R, answer 3 questions)', 'Ch. 4 (Auto)', 'Ch. 9+ (3S, 9R, answer 3 questions)', 'Ch. 8+ (3S, 8R, answer 3 questions)'),
      member('Sofia', 'Archer', 'Ch. 8+ (3S, 9R)', 'Ch. 7+ (3S, 9R)', 'Ch. 5+ (1S, 2R)', 'Ch. 7+ (3S, 7R)'),
      member('Catania', 'Myrmidon / Rogue', 'Ch. 9+ (3S, 10R)', 'Ch. 7+ (1S, 8R)', 'Ch. 8+ (3S, 7R)', 'Ch. 4+ (1S, 2R)'),
      member('Noctula', 'Shaman', 'Ch. 5+ (1S, 4R)', 'Ch. 6+ (1S, 6R)', 'Ch. 6+ (1S, 3R)', 'Ch. 8+ (3S, 8R)'),
      member('Io', 'Light Cavalry', 'Ch. 9+ (3S, 10R, 4,000G)', 'Ch. 4+ (2S, 3R, 800G)', 'Ch. 10+ (3S, 10R, 4,000G)', 'Ch. 7+ (1S, 6R, 1,500G)'),
      member('Kiroc', 'Pugilist', 'Ch. 8+ (3S, 8R, give 8 Pure Water)', 'Ch. 6+ (1S, 4R, give 3 Pure Water)', 'Ch. 10+ (3S, 10R, give 8 Pure Water)', 'Ch. 5+ (1S, 4R, give 3 Pure Water)'),
      member('Nydine', 'Brigand', 'Ch. 7+ (1S, 6R, give 2 Bronze Axes)', 'Ch. 4+ (2S, 5R, give 2 Bronze Axes)', 'Ch. 7+ (3S, 5R, give 3 Iron Axes)', 'Ch. 9+ (3S, 10R, give 3 Iron Axes)'),
      member('Majide', 'Gladiator', 'Ch. 6+ (2S, 5R, agree 3 times)', 'Ch. 7+ (3S, 8R, agree 3 times)', 'Ch. 8+ (3S, 8R, agree 3 times)', 'Ch. 9+ (3S, 9R, agree 3 times)'),
      member('Zarcone', 'Gladiator', 'Ch. 8+ (3S, 8R)', 'Ch. 6+ (3S, 7R)', 'Ch. 6+ (1S, 4R)', 'Ch. 6+ (2S, 5R)', { sharedRecruitmentNote: 'All paths: refuse 3 times, then pay 10G.' }),
      member('Benditz', 'Charioteer', 'Ch. 8+ (3S, 9R)', 'Ch. 6+ (2S, 7R)', 'Ch. 8+ (1S, 8R)', 'Ch. 7+ (3S, 7R)'),
      member('Alexandra', 'Wing Soldier', 'Ch. 7+ (2S, 7R)', 'Ch. 7+ (3S, 8R)', 'Ch. 8+ (1S, 6R)', 'Ch. 9+ (3S, 10R)'),
      member('Jasmine', 'Armored Knight', 'Ch. 8+ (1S, 8R, 2,000G)', 'Ch. 7+ (3S, 9R, 5,000G)', 'Ch. 8+ (3S, 8R, 5,000G)', 'Ch. 6+ (2S, 4R, 500G)'),
      member('Inyoni', 'Archer', 'Ch. 8+ (3S, 8R, 6,000G)', 'Ch. 8+ (3S, 8R, 6,000G)', 'Ch. 9+ (1S, 9R, 4,000G)', 'Ch. 9+ (1S, 7R, 3,000G)'),
      member('Nuzzuo', 'Rogue', 'Ch. 7+ (2S, 6R, give 3 Iron Bows)', 'Ch. 8+ (1S, 9R, give 2 Iron Bows)', 'Ch. 9+ (1S, 6R, give 3 Iron Bows)', 'Ch. 9+ (3S, 9R, give 3 Iron Bows)'),
      member('Peppe', 'Pugilist / Warrior', 'Ch. 10+ (1S, 9R, clear Bertrand’s Paralogue)', 'Ch. 9+ (3S, 8R, clear Bertrand’s Paralogue)', 'Ch. 11+ (2S, 7R, clear Bertrand’s Paralogue)', 'Unavailable.'),
    ],
  },
  {
    faction: 'Part II & Part III Story / Paralogue Recruits',
    members: [
      member('Creek', 'Bardinger', noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, { postPartIRecruitment: 'Part II: War, Ch. 2 · clear “My Late Sister’s Accessory” subquest, then defeat Creek in battle.' }),
      member('Nathan', 'Bardinger', noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, { postPartIRecruitment: 'Part II: War, Ch. 3 · defeat Nathan with Creek in battle.' }),
      member('Bertrand', 'Warrior', noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, { postPartIRecruitment: 'Part III: Salvation, Section 1 · joins automatically if Bertrand’s Paralogue was cleared.' }),
      member('Talimun', 'Ovate', noPartIRecruitmentListed, noPartIRecruitmentListed, 'Guest in Part I, Ch. 5.', 'Guest in Part I, Ch. 5 and Ch. 8.', { postPartIRecruitment: 'Part III: Salvation, Section 1 · joins automatically if Talimun’s Paralogue was cleared.' }),
      member('Anatolia', 'The Avatar', noPartIRecruitmentListed, noPartIRecruitmentListed, 'Guest in Part I, Ch. 5.', 'Guest in Part I, Ch. 5.', { postPartIRecruitment: 'Part III: Salvation, Section 1 · joins automatically if Anatolia’s Paralogue was cleared.' }),
      member('Orchel', 'Troubadour', noPartIRecruitmentListed, noPartIRecruitmentListed, 'Guest in Part I, Ch. 3.', 'Guest in Part I, Ch. 5.', { postPartIRecruitment: 'Part III: Salvation, Section 1 · joins automatically if Orchel’s Paralogue was cleared.' }),
      member('Centurio', 'Dreadnought', noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, { postPartIRecruitment: 'Part III: Salvation, Section 2 · clear “Rescue Centurio” subquest, then talk to him in Dagsion.' }),
      member('Aswan', 'Bow Adept', noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, { postPartIRecruitment: 'Part III: Salvation, Section 5 · joins automatically if Aswan survived Part II.' }),
      member('Tahonia', 'War Monk', noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, noPartIRecruitmentListed, { postPartIRecruitment: 'Part III: Salvation, Section 5 · joins automatically if Tahonia survived Part II.' }),
      member('Klapka', 'Guardian', noPartIRecruitmentListed, noPartIRecruitmentListed, 'No Part I recruitment listed; Part III requires Theodora’s Path.', noPartIRecruitmentListed, { postPartIRecruitment: 'Part III: Salvation, Section 6 · visit Dagsion if Klapka survived the Battle vs. Mahadu; requires Theodora’s Path.' }),
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
