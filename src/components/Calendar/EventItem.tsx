import React, { useDebugValue, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import { getTimeString } from '../../lib/utils';
import {
  deleteUserEvent,
  UserEvent,
  updateUserEvent,
} from '../../redux/user-events';

interface Props {
  event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteUserEvent(event.id));
  };

  const timeString = getTimeString(event.dateStart, event.dateEnd);

  const inputRef = useRef<HTMLInputElement>(null);
  const [editable, setEditable] = useState(false);
  const handleTitleClick = () => {
    setEditable(true);
  };
  useEffect(() => {
    if (editable) {
      inputRef.current?.focus();
    }
  }, [editable]);

  const [title, setTitle] = useState(event.title);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    if (title !== event.title) {
      dispatch(
        updateUserEvent({
          ...event,
          title,
        })
      );
    }
    setEditable(false);
  };

  return (
    <div className="calendar-event">
      <div className="calendar-event-info">
        <div className="calendar-event-time">{timeString}</div>
        <div className="calendar-event-title">
          {editable ? (
            <input
              type="text"
              ref={inputRef}
              value={title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <span onClick={handleTitleClick}>{title}</span>
          )}
        </div>
      </div>
      <button
        onClick={handleDeleteClick}
        className="calendar-event-delete-button"
      >
        &times;
      </button>
    </div>
  );
};

export default EventItem;
