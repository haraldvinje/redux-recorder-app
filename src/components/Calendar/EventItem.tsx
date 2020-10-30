import React, { useDebugValue } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUserEvent, UserEvent } from '../../redux/user-events';

interface Props {
    event: UserEvent
}

const EventItem: React.FC<Props> = ({event}) => {    
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteUserEvent(event.id))
  }

  const startTime = new Date(event.dateStart)
  const endTime = new Date(event.dateEnd)
  const timeString = `${startTime.getHours()}:${startTime.getMinutes()} -
    ${endTime.getHours()}:${endTime.getMinutes()}`
 
  return(
    <div className="calendar-event">
      <div className="calendar-event-info">
        <div className="calendar-event-time">{timeString}</div>
        <div className="calendar-event-title">{event.title}</div>
      </div>
      <button onClick={handleDeleteClick}className="calendar-event-delete-button">&times;</button>
    </div>
  )
}

export default EventItem