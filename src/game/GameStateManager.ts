import { GameState, PlayerState, Phase, Card } from '../types';

/**
 * Manages the overall game state and player states
 */
export class GameStateManager {
  private gameState: GameState;

  constructor(player1Id: string, player1Name: string, player2Id: string, player2Name: string) {
    this.gameState = this.initializeGame(player1Id, player1Name, player2Id, player2Name);
  }

  private initializeGame(p1Id: string, p1Name: string, p2Id: string, p2Name: string): GameState {
    return {
      player1: {
        id: p1Id,
        name: p1Name,
        lp: 8000,
        hand: [],
        field: { monsters: [], magics: [], traps: [] },
        deck: [],
        graveyard: [],
        currentCost: 1,
        maxCost: 1,
        isFirstPlayer: true
      },
      player2: {
        id: p2Id,
        name: p2Name,
        lp: 8000,
        hand: [],
        field: { monsters: [], magics: [], traps: [] },
        deck: [],
        graveyard: [],
        currentCost: 2,
        maxCost: 2,
        isFirstPlayer: false
      },
      currentPhase: Phase.STANDBY,
      currentPlayer: 'player1',
      turnCount: 1,
      isGameOver: false
    };
  }

  getGameState(): GameState {
    return this.gameState;
  }

  getCurrentPlayer(): PlayerState {
    return this.gameState.currentPlayer === 'player1' 
      ? this.gameState.player1 
      : this.gameState.player2;
  }

  getOpponentPlayer(): PlayerState {
    return this.gameState.currentPlayer === 'player1' 
      ? this.gameState.player2 
      : this.gameState.player1;
  }

  setCurrentPhase(phase: Phase): void {
    this.gameState.currentPhase = phase;
  }

  switchCurrentPlayer(): void {
    this.gameState.currentPlayer = this.gameState.currentPlayer === 'player1' ? 'player2' : 'player1';
  }

  /**
   * Add card to player's hand
   * If hand exceeds 8 cards, send excess to graveyard
   */
  addCardToHand(playerId: 'player1' | 'player2', card: Card): void {
    const player = this.gameState[playerId];
    player.hand.push(card);

    // Handle hand limit
    if (player.hand.length > 8) {
      const excessCount = player.hand.length - 8;
      const excessCards = player.hand.splice(8);
      player.graveyard.push(...excessCards);
    }
  }

  /**
   * Remove card from hand
   */
  removeCardFromHand(playerId: 'player1' | 'player2', cardId: string): Card | null {
    const player = this.gameState[playerId];
    const index = player.hand.findIndex(c => c.id === cardId);
    if (index === -1) return null;
    return player.hand.splice(index, 1)[0];
  }

  /**
   * Send card to graveyard
   */
  sendToGraveyard(playerId: 'player1' | 'player2', card: Card): void {
    const player = this.gameState[playerId];
    player.graveyard.push(card);
  }

  /**
   * Deal damage to player
   */
  dealDamage(playerId: 'player1' | 'player2', damage: number): void {
    const player = this.gameState[playerId];
    player.lp -= damage;
    if (player.lp <= 0) {
      this.gameState.isGameOver = true;
      this.gameState.winner = this.gameState.currentPlayer === 'player1' ? 'player1' : 'player2';
    }
  }

  /**
   * Increment turn counter and switch player
   */
  endTurn(): void {
    this.switchCurrentPlayer();
    if (this.gameState.currentPlayer === 'player1') {
      this.gameState.turnCount++;
    }
  }
}
