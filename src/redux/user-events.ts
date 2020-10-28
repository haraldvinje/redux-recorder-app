import {AnyAction} from "redux";

export interface UserEvent {
  id: number;
  title: string;
  dateStart: string;
  dateEnd: string;
}

interface UserEventsState {
  byIds: Record<UserEvent['id'], UserEvent>;
  allIds: UserEvent['id'][];
}

const initalState: UserEventsState = {
  byIds: {},
  allIds: []
}

const userEventReducer = (
  state: UserEventsState = initalState,
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
}


export default userEventReducer;
