enum StateType {
  Idle = 'IDLE',
  DayView = 'DAY_VIEW',
  MonthView = 'MONTH_VIEW',
  YearView = 'YEAR_VIEW'
}

enum ActionType {
  UserClickedInputField = 'USER_CLICKED_INPUT_FIELD',
  UserClickedCalendarButton = 'USER_CLICKED_CALENDAR_BUTTON',
  UserChagedDateString = 'USER_CHANGED_DATE_STRING'
}

type UserClickedInputField = {
  type: ActionType.UserClickedInputField,
}

type UserChagedDateString = {
  type: ActionType.UserChagedDateString
  payload: string,
}

type UserClickedCalendarButton = {
  type: ActionType.UserClickedCalendarButton,
}

type Action = UserClickedInputField
  | UserClickedCalendarButton
  | UserChagedDateString

type State = {
  currentStatus: StateType,
  displayedDate: string,
  selectedDate: string,
  highLightedDate: string,
  inputFieldValue: string,
}

export {
  Action,
  ActionType,
  State,
  StateType,
};
