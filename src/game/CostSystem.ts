import { PlayerState } from '../types';

/**
 * Handles the cost system for card usage
 */
export class CostSystem {
  /**
   * Restore cost to max for the turn
   */
  static restoreCost(player: PlayerState): void {
    player.currentCost = player.maxCost;
  }

  /**
   * Increase max cost (called during standby phase)
   * Max value is 10
   */
  static increaseMaxCost(player: PlayerState): void {
    player.maxCost = Math.min(player.maxCost + 2, 10);
  }

  /**
   * Attempt to spend cost
   * Returns true if successful, false if insufficient cost
   */
  static spendCost(player: PlayerState, cost: number): boolean {
    if (player.currentCost < cost) {
      return false;
    }
    player.currentCost -= cost;
    return true;
  }

  /**
   * Check if player can afford a cost
   */
  static canAfford(player: PlayerState, cost: number): boolean {
    return player.currentCost >= cost;
  }

  /**
   * Get remaining cost
   */
  static getRemainingCost(player: PlayerState): number {
    return player.currentCost;
  }
}
