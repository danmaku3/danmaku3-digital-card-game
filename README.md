# 🎴 Digital Card Game

A TypeScript/JavaScript implementation of an original card game with a cost-based tempo system.

## 📋 Game Rules Overview

### Basic
- 2-player vs battle
- Starting LP: 8000
- Starting hand: 5 cards
- Deck size: 50-70 cards
- Max 4 copies of same card
- Max 10 Skill cards (separate from deck)

### Turn Structure
1. Standby Phase - Restore and increase max cost (max 10)
2. Draw Phase - Draw 1 card
3. Main Phase - Summon monsters, activate spells, set traps
4. Battle Phase - Attack with monsters (skipped on first turn for first player)
5. End Phase

### Cost System
- Resets each turn
- Increases by +2 per turn
- Max value: 10
- Used for summoning, activating, and setting cards

### Win Conditions
- Reduce opponent's LP to 0 or below
- Deplete opponent's deck

### Combat
- Monster priority: Attack monsters if they exist, otherwise direct attack
- Monster vs Monster: Higher ATK wins, loser takes ATK difference as damage
- Direct Attack: Damage = Monster's ATK

### Card Types
- **Monsters**: Have ATK value, can't attack on summon turn (unless SA)
- **Magic Cards**: Activate during main phase, costs required
- **Trap Cards**: Set during main phase, activate on other phases (phase-specific)
- **Skill Cards**: Max 10, separate deck management

### Special Rules
- Hand limit: 8 cards (excess sent to graveyard)
- Field limit: Unlimited monsters
- SA (Speed Attack): Monsters can attack turn of summon
- Multiple simultaneous card activations allowed
- Graveyard: Used cards and destroyed cards sent here

## 🏗️ Project Structure

```
src/
├── types/           # TypeScript interfaces and types
├── cards/           # Card definitions and classes
├── game/            # Core game logic
├── engine/          # Game execution engine
└── index.ts         # Entry point
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Testing
```bash
npm test
```

## 📝 Implementation Roadmap

### Phase 1: Game Logic Foundation
- [ ] Card definition system
- [ ] Game state management
- [ ] Turn processing engine
- [ ] Cost system

### Phase 2: Combat & Effects
- [ ] Battle resolution
- [ ] Effect system
- [ ] Interrupt handling

### Phase 3: UI & Network
- [ ] (TBD)

## 📄 License

MIT
