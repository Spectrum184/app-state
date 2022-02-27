export const ACTION_TYPES = {
  ADD_INPUT: 'ADD_INPUT',
  ADD_TEXT: 'ADD_TEXT',
  UNDO: 'UNDO',
  REDO: 'REDO',
};

export const debounceTextAction = ({
  currentValue,
  defaultValue,
  dispatch,
  index,
}) => {
  if (currentValue && currentValue !== defaultValue) {
    return dispatch({
      type: 'ADD_TEXT',
      payload: { currentValue, defaultValue, index },
    });
  }
  return;
};
