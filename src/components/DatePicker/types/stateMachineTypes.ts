enum StateType {
  Idle = 'IDLE',
  DayView = 'DAY_VIEW',
  MonthView = 'MONTH_VIEW'
}

enum ActionType {
  UserClickedInputField = 'USER_CLICKED_INPUT_FIELD',
  UserClickedCalendarButton = 'USER_CLICKED_CALENDAR_BUTTON',
}

type UserClickedInputField = {
  type: ActionType.UserClickedInputField,
}

type UserClickedInputField = {
  type: ActionType.UserClickedInputField,
}

type Action = UserClickedInputField
  | UserClickedCalendarButton

type State = {
  currentStatus: StateType,
}

export {
  Action,
  ActionType,
  State,
  StateType,
};
