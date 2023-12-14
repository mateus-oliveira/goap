import { State } from './state';

export interface Action {
  name: string;
  precond: State;
  effects: State;
  cost: number;
}

const dodge: Action = {
  name: 'dodge',
  precond: {
    underAttack: true,
    injured: true,
  },
  effects: {
    underAttack: false,
  },
  cost: 1,
};

const seekMedicalAid: Action = {
  name: 'seek medical aid',
  precond: {
    underAttack: false,
    injured: true,
    nearMedicalAid: false,
  },
  effects: {
    nearMedicalAid: true,
  },
  cost: 1,
};

const receiveMedicalAid: Action = {
  name: 'receive medical aid',
  precond: {
    nearMedicalAid: true,
    hasReceivedAid: false,
  },
  effects: {
    nearMedicalAid: false,
    hasReceivedAid: true,
  },
  cost: 1,
};

const useAidKit: Action = {
  name: 'use aid kit',
  precond: {
    hasReceivedAid: true,
    injured: true,
    underAttack: false,
  },
  effects: {
    hasReceivedAid: false,
    injured: false,
  },
  cost: 1,
};

const wanderField: Action = {
  name: 'wander field',
  precond: {
    hasTarget: false,
    notInjured: false,
  },
  effects: {
    hasTarget: true,
  },
  cost: 1,
};

const pursueBall: Action = {
  name: 'pursue ball',
  precond: {
    hasTarget: true,
    notInjured: false,
    nearBall: false,
  },
  effects: {
    nearBall: true,
  },
  cost: 1,
};

const kickBall: Action = {
  name: 'kick ball',
  precond: {
    hasTarget: true,
    nearBall: true,
    notInjured: false,
    opponentDefeated: false,
  },
  effects: {
    opponentDefeated: true,
  },
  cost: 1,
};

const shootGoal: Action = {
  name: 'shoot goal',
  precond: {
    hasTarget: true,
    hasSoccerBall: true,
    nearGoal: false,
    opponentDefeated: false,
  },
  effects: {
    opponentDefeated: true,
  },
  cost: 1,
};

const findSoccerBall: Action = {
  name: 'find soccer ball',
  precond: {
    notInjured: false,
    nearSoccerBall: false,
  },
  effects: {
    nearSoccerBall: true,
  },
  cost: 1,
};

const collectSoccerBall: Action = {
  name: 'collect soccer ball',
  precond: {
    hasSoccerBall: false,
    nearSoccerBall: true,
  },
  effects: {
    hasSoccerBall: true,
    nearSoccerBall: true,
  },
  cost: 1,
};

export const actions = [
  dodge,
  seekMedicalAid,
  receiveMedicalAid,
  useAidKit,
  wanderField,
  pursueBall,
  kickBall,
  findSoccerBall,
  collectSoccerBall,
  shootGoal,
];