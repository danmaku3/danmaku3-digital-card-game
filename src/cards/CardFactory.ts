import { Card, CardType, MonsterCard, MagicCard, TrapCard, SkillCard, Phase, Rarity } from '../types';

/**
 * Factory class for creating cards
 */
export class CardFactory {
  private static idCounter = 0;

  static createMonsterCard(data: {
    name: string;
    atk: number;
    cost: number;
    description?: string;
    hasSpeedAttack?: boolean;
    rarity?: Rarity;
  }): MonsterCard {
    return {
      id: this.generateId(),
      name: data.name,
      type: CardType.MONSTER,
      cost: data.cost,
      description: data.description || '',
      atk: data.atk,
      hasSpeedAttack: data.hasSpeedAttack || false,
      rarity: data.rarity || Rarity.COMMON
    };
  }

  static createMagicCard(data: {
    name: string;
    cost: number;
    effect: string;
    description?: string;
    rarity?: Rarity;
  }): MagicCard {
    return {
      id: this.generateId(),
      name: data.name,
      type: CardType.MAGIC,
      cost: data.cost,
      description: data.description || '',
      effect: data.effect,
      rarity: data.rarity || Rarity.COMMON
    };
  }

  static createTrapCard(data: {
    name: string;
    cost: number;
    activationPhase: Phase[];
    effect: string;
    description?: string;
    rarity?: Rarity;
  }): TrapCard {
    return {
      id: this.generateId(),
      name: data.name,
      type: CardType.TRAP,
      cost: data.cost,
      description: data.description || '',
      activationPhase: data.activationPhase,
      effect: data.effect,
      rarity: data.rarity || Rarity.COMMON
    };
  }

  static createSkillCard(data: {
    name: string;
    cost: number;
    activationCondition: string;
    effect: string;
    description?: string;
    rarity?: Rarity;
  }): SkillCard {
    return {
      id: this.generateId(),
      name: data.name,
      type: CardType.SKILL,
      cost: data.cost,
      description: data.description || '',
      activationCondition: data.activationCondition,
      effect: data.effect,
      rarity: data.rarity || Rarity.COMMON
    };
  }

  private static generateId(): string {
    return `card_${this.idCounter++}_${Date.now()}`;
  }
}
