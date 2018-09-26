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
const viewMessages = [
  Messages.UPDATE_STATE,
  Messages.UPDATE_WIDTH,
  Messages.TOGGLE_CELL,
  Messages.UPDATE_HEIGHT,
  Messages.RESET,
];

const modelMessages = [
  Messages.STATE_UPDATED,
  Messages.STATUS_CHANGED,
];

export default Messages;
export { viewMessages, modelMessages };
