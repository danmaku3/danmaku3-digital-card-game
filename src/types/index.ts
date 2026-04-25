/**
 * Core game type definitions
 */

// Card types
export enum CardType {
  MONSTER = 'monster',
  MAGIC = 'magic',
  TRAP = 'trap',
  SKILL = 'skill'
}

// Card rarities (optional)
export enum Rarity {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  LEGENDARY = 'legendary'
}

// Card state
export interface Card {
  id: string;
  name: string;
  type: CardType;
  cost: number;
  rarity?: Rarity;
  description: string;
}

// Monster card
export interface MonsterCard extends Card {
  type: CardType.MONSTER;
  atk: number;
  hasSpeedAttack?: boolean; // SA flag
}

// Magic card
export interface MagicCard extends Card {
  type: CardType.MAGIC;
  effect: string;
}

// Trap card
export interface TrapCard extends Card {
  type: CardType.TRAP;
  activationPhase: Phase[];
  effect: string;
}

// Skill card
export interface SkillCard extends Card {
  type: CardType.SKILL;
  activationCondition: string;
  effect: string;
}

// Game phases
export enum Phase {
  STANDBY = 'standby',
  DRAW = 'draw',
  MAIN = 'main',
  BATTLE = 'battle',
  END = 'end'
}

// Player state
export interface PlayerState {
  id: string;
  name: string;
  lp: number;
  hand: Card[];
  field: FieldState;
  deck: Card[];
  graveyard: Card[];
  currentCost: number;
  maxCost: number;
  isFirstPlayer: boolean;
}

// Field state
export interface FieldState {
  monsters: MonsterCard[];
  magics: MagicCard[];
  traps: TrapCard[];
}

// Game state
export interface GameState {
  player1: PlayerState;
  player2: PlayerState;
  currentPhase: Phase;
  currentPlayer: 'player1' | 'player2';
  turnCount: number;
  isGameOver: boolean;
  winner?: 'player1' | 'player2';
}

// Battle result
export interface BattleResult {
  attacker: MonsterCard;
  defender?: MonsterCard;
  damage: number;
  winner: 'attacker' | 'defender' | 'draw';
}
