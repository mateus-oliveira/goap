import {actions} from './actions'
import {Npc} from './npc'
import {State} from './state'

const state: State = {
  underAttack: false,
  nearMedicalAid: false,
  hasReceivedAid: false,
  hasTarget: false,
  injured: true,
  nearBall: false,
  hasSoccerBall: false,
  nearGoal: true,
  opponentDefeated: false,
  nearSoccerBall: false,
};

const goal: State = {
  hasReceivedAid: true,
  nearSoccerBall: true,
  hasTarget: true,
}

const soldier = new Npc(state, actions)
soldier.goal = goal

console.log(soldier.state)

while (soldier.plan.length > 0) {
  soldier.execute()
}

console.log(soldier.state)
