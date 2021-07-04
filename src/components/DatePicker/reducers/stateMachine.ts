import {
  Action,
  ActionType,
  State,
  StateType,
} from '../types/stateMachineTypes';

const stateMachine = (
  state: State,
  action: Action,
): State => {
  console.log('reducer: ', state, action);
  switch (action.type) {
    case ActionType.UserClickedInputField:
      return state;
    case ActionType.UserChagedDateString:
      return {
        ...state,
        inputFieldValue: action.payload,
      };
    case ActionType.UserClickedCalendarButton:
      if (state.currentStatus === StateType.Idle) {
        return {
          ...state,
          currentStatus: StateType.DayView,
        };
      }
      return {
        ...state,
        currentStatus: StateType.Idle,
      };
    default:
      return state;
  }
};

export default stateMachine;
