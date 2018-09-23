enum Messages{
  TOGGLE_CELL= 'toggle',
  UPDATE_STATE= 'update',
  STATE_UPDATED= 'redraw',
  UPDATE_SPEED = 'speedupdated',
  UPDATE_WIDTH= 'width',
  UPDATE_HEIGHT= 'height',
  RESET= 'reset',
  RUNNING_CHANGED= 'running',
  STATUS_CHANGED= 'gamestatus',
}
// each module own messages
export default Messages;
