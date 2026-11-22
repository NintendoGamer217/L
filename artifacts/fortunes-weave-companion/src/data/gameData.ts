/**
 * Illustrative starter records for Fortune's Weave Companion.
 * Replace or extend these arrays with verified game data as it becomes available.
 */
export type Objective = { id: string; text: string };
export type Chapter = {
  id: string; title: string; subtitle: string; winCondition: string; bossTip: string;
  recruits: string[]; steps: string[]; objectives: Objective[];
};
export type Act = { id: string; title: string; chapters: Chapter[] };
export type LootType = 'Weapons' | 'Gold' | 'Seals' | 'Stat Boosters';
export type Loot = { id: string; name: string; chapter: string; type: LootType; source: string };
export type Character = { id: string; name: string; className: string; chapter: string; note: string };
export type ClassRecord = { id: string; name: string; tier: string; weapon: string; note: string };
export type ItemRecord = { id: string; name: string; kind: string; rank: string; note: string };

export const acts: Act[] = [
  { id: 'act-1', title: 'Act I · The Ashen Oath', chapters: [
    { id: 'ch-01', title: 'Chapter 01 · A Quiet Crossing', subtitle: 'A sample opening skirmish', winCondition: 'Defeat the marked commander.', bossTip: 'Keep your front line together; the commander is more dangerous when isolated units draw near.', recruits: ['Mira (sample recruit)'], steps: ['Secure the bridge before advancing east.', 'Use the ridge to shelter your ranged unit.', 'Check the southern path before ending the map.'], objectives: [{ id: 'o-01a', text: 'Visit the southern supply tent' }, { id: 'o-01b', text: 'Recruit Mira' }, { id: 'o-01c', text: 'Defeat the marked commander' }] },
    { id: 'ch-02', title: 'Chapter 02 · Lanterns in Fog', subtitle: 'A sample night encounter', winCondition: 'Hold the eastern gate for four turns.', bossTip: 'A sturdy unit can delay the flank while your faster units secure the gate.', recruits: ['Tovan (sample recruit)'], steps: ['Move a scout to reveal the northern approach.', 'Keep vulnerable units within support range.', 'End the turn with at least one unit on the gate tile.'], objectives: [{ id: 'o-02a', text: 'Open the western chest' }, { id: 'o-02b', text: 'Speak with Tovan' }, { id: 'o-02c', text: 'Hold the eastern gate' }] },
  ]},
  { id: 'act-2', title: 'Act II · Salt & Cinder', chapters: [
    { id: 'ch-03', title: 'Chapter 03 · The Broken Causeway', subtitle: 'A sample route split', winCondition: 'Rout the opposing force.', bossTip: 'The center lane is exposed; use the side paths to choose your engagement.', recruits: ['Noa (sample recruit)'], steps: ['Choose a flank before crossing the causeway.', 'Collect the cache beside the western wall.', 'Regroup before approaching the final position.'], objectives: [{ id: 'o-03a', text: 'Find the hidden cache' }, { id: 'o-03b', text: 'Speak with Noa' }, { id: 'o-03c', text: 'Rout the opposing force' }] },
  ]},
];

export const lootRecords: Loot[] = [
  { id: 'loot-01', name: 'Iron-edge Blade', chapter: 'ch-01', type: 'Weapons', source: 'Chest · south supply path' },
  { id: 'loot-02', name: '1,200 gold', chapter: 'ch-01', type: 'Gold', source: 'Hidden · by the old bridge' },
  { id: 'loot-03', name: 'Vanguard Seal', chapter: 'ch-02', type: 'Seals', source: 'Chest · western watchtower' },
  { id: 'loot-04', name: 'Amber Tonic', chapter: 'ch-02', type: 'Stat Boosters', source: 'Steal · fogbound captain' },
  { id: 'loot-05', name: 'Longbow', chapter: 'ch-02', type: 'Weapons', source: 'Hidden · northern tree line' },
  { id: 'loot-06', name: '750 gold', chapter: 'ch-03', type: 'Gold', source: 'Chest · collapsed causeway' },
  { id: 'loot-07', name: 'Focus Charm', chapter: 'ch-03', type: 'Stat Boosters', source: 'Hidden · western cache' },
  { id: 'loot-08', name: 'Field Repair Kit', chapter: 'ch-03', type: 'Weapons', source: 'Steal · sentry captain' },
];
export const characters: Character[] = [
  { id: 'char-mira', name: 'Mira', className: 'Wayfinder', chapter: 'Chapter 01', note: 'Sample recruit · joins after a conversation.' },
  { id: 'char-tovan', name: 'Tovan', className: 'Shieldbearer', chapter: 'Chapter 02', note: 'Sample recruit · speak before the gate is secured.' },
  { id: 'char-noa', name: 'Noa', className: 'Gale Archer', chapter: 'Chapter 03', note: 'Sample recruit · approach from the west.' },
  { id: 'char-elin', name: 'Elin', className: 'Field Medic', chapter: 'Prologue', note: 'Sample entry · available from the outset.' },
];
export const classes: ClassRecord[] = [
  { id: 'class-wayfinder', name: 'Wayfinder', tier: 'I · Base', weapon: 'Blades', note: 'Mobile scout archetype (sample).' },
  { id: 'class-shieldbearer', name: 'Shieldbearer', tier: 'I · Base', weapon: 'Lances', note: 'Defensive front-line archetype (sample).' },
  { id: 'class-gale-archer', name: 'Gale Archer', tier: 'II · Advanced', weapon: 'Bows', note: 'Ranged specialist archetype (sample).' },
  { id: 'class-field-medic', name: 'Field Medic', tier: 'I · Base', weapon: 'Staves', note: 'Support archetype (sample).' },
];
export const items: ItemRecord[] = [
  { id: 'item-iron-edge', name: 'Iron-edge Blade', kind: 'Weapon · Blade', rank: 'Rank E', note: 'Balanced sample weapon.' },
  { id: 'item-longbow', name: 'Longbow', kind: 'Weapon · Bow', rank: 'Rank D', note: 'Extended-range sample weapon.' },
  { id: 'item-vanguard-seal', name: 'Vanguard Seal', kind: 'Promotion item', rank: 'Tier I', note: 'Sample class-change token.' },
  { id: 'item-amber-tonic', name: 'Amber Tonic', kind: 'Stat booster', rank: 'Consumable', note: 'Sample temporary supply.' },
];
