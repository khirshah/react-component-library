import type {
  Action,
  ActionType,
  State,
  StateType,
} from '../types/stateMachineTypes';

const stateMachine = (
  state: State,
  action: Action,
): State => {
  switch (action.type) {
    case ActionType.UserClickedInputField:
      return {
        ...state,
        currentStatus: StateType.Idle,
      };
    default:
      return state;
  }
};

export default stateMachine;
