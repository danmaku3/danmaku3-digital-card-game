import { CardFactory } from './cards/CardFactory';
import { GameStateManager } from './game/GameStateManager';
import { CostSystem } from './game/CostSystem';
import { Phase } from './types';

/**
 * Example: Initialize a game and create some sample cards
 */
function main() {
  console.log('🎴 Digital Card Game - Initialization Test\n');

  // Create sample cards
  const swordMaster = CardFactory.createMonsterCard({
    name: 'Sword Master',
    atk: 2000,
    cost: 2,
    description: 'A skilled swordsman',
    hasSpeedAttack: false
  });

  const speedyRogue = CardFactory.createMonsterCard({
    name: 'Speedy Rogue',
    atk: 1500,
    cost: 1,
    description: 'Fast and quick',
    hasSpeedAttack: true
  });

  const boostMagic = CardFactory.createMagicCard({
    name: 'Power Boost',
    cost: 2,
    effect: 'Increase a monster\'s ATK by 500',
    description: 'Enhance your monster'
  });

  console.log('✅ Cards created:');
  console.log(`   - ${swordMaster.name} (ATK: ${swordMaster.atk}, Cost: ${swordMaster.cost}, SA: ${swordMaster.hasSpeedAttack})`);
  console.log(`   - ${speedyRogue.name} (ATK: ${speedyRogue.atk}, Cost: ${speedyRogue.cost}, SA: ${speedyRogue.hasSpeedAttack})`);
  console.log(`   - ${boostMagic.name} (Cost: ${boostMagic.cost})\n`);

  // Initialize game
  const gameManager = new GameStateManager('p1', 'Player 1', 'p2', 'Player 2');
  const gameState = gameManager.getGameState();

  console.log('✅ Game initialized:');
  console.log(`   - Player 1 LP: ${gameState.player1.lp}`);
  console.log(`   - Player 2 LP: ${gameState.player2.lp}`);
  console.log(`   - Current Phase: ${gameState.currentPhase}`);
  console.log(`   - Current Player: ${gameState.currentPlayer}\n`);

  // Test cost system
  console.log('✅ Cost System Test:');
  const player1 = gameManager.getCurrentPlayer();
  console.log(`   - Initial Cost: ${player1.currentCost}/${player1.maxCost}`);
  
  CostSystem.increaseMaxCost(player1);
  CostSystem.restoreCost(player1);
  console.log(`   - After Standby Phase: ${player1.currentCost}/${player1.maxCost}`);
  
  const canAfford = CostSystem.spendCost(player1, 2);
  console.log(`   - After spending 2 cost: ${player1.currentCost}/${player1.maxCost} (Can afford 2: ${canAfford})\n`);

  console.log('🎮 Game ready to play!');
}

main();
