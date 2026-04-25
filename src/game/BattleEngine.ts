import { MonsterCard, BattleResult } from '../types';

/**
 * Handles all battle calculations and resolutions
 */
export class BattleEngine {
  /**
   * Resolve battle between two monsters
   */
  static resolveMosterBattle(attacker: MonsterCard, defender: MonsterCard): BattleResult {
    const atkDifference = attacker.atk - defender.atk;
    
    let winner: 'attacker' | 'defender' | 'draw';
    let damage: number;

    if (atkDifference > 0) {
      winner = 'attacker';
      damage = atkDifference;
    } else if (atkDifference < 0) {
      winner = 'defender';
      damage = Math.abs(atkDifference);
    } else {
      winner = 'draw';
      damage = 0;
    }

    return {
      attacker,
      defender,
      damage,
      winner
    };
  }

  /**
   * Calculate direct attack damage
   */
  static calculateDirectDamage(attacker: MonsterCard): number {
    return attacker.atk;
  }

  /**
   * Check if monster can attack this turn
   * Returns true if monster has SA or was not just summoned
   */
  static canAttack(monster: MonsterCard, turnSummoned: number, currentTurn: number): boolean {
    // If monster has speed attack (SA), it can attack immediately
    if (monster.hasSpeedAttack) {
      return true;
    }
    // Otherwise, monster can't attack on the turn it was summoned
    return turnSummoned < currentTurn;
  }
}
