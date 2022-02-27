import { ACTION_TYPES } from './action';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_INPUT:
      return {
        present: [
          ...state.present,
          { content: '', inputIndex: state.present.length },
        ],
        past: [
          ...state.past,
          {
            type: 'ADD_INPUT',
          },
        ],
        future: [],
      };

    case ACTION_TYPES.UNDO:
      const undoType = state.past[state.past.length - 1].type;

      switch (undoType) {
        case 'ADD_INPUT':
          return {
            future: [...state.future, state.past[state.past.length - 1]],
            past: state.past.slice(0, state.past.length - 1),
            present: state.present.slice(0, state.present.length - 1),
          };

        case 'ADD_TEXT':
          const lastPastAction = state.past[state.past.length - 1];
          // copy the current text for future array
          let currentUndoText = '';

          const arrPresent = state.present.map((item) => {
            if (lastPastAction.inputIndex !== item.inputIndex)
              return { ...item };
            currentUndoText = item.content;
            return {
              ...item,
              content: lastPastAction.content,
            };
          });

          return {
            past: state.past.slice(0, state.past.length - 1),
            present: arrPresent,
            future: [
              ...state.future,
              { ...lastPastAction, content: currentUndoText },
            ],
          };

        default:
          throw Error('Error');
      }

    case ACTION_TYPES.REDO:
      const redoType = state.future[state.future.length - 1].type;

      switch (redoType) {
        case 'ADD_INPUT':
          return {
            future: state.future.slice(0, state.future.length - 1),
            past: [...state.past, state.future[state.future.length - 1]],
            present: [
              ...state.present,
              { inputIndex: state.present.length, content: '' },
            ],
          };

        case 'ADD_TEXT':
          const lastFutureAction = state.future[state.future.length - 1];
          // copy the current text for past array
          let currentRedoText = '';

          const newArrPresent = state.present.map((item) => {
            if (lastFutureAction.inputIndex !== item.inputIndex) return item;

            currentRedoText = item.content;

            return {
              ...item,
              content: lastFutureAction.content,
            };
          });

          return {
            past: [
              ...state.past,
              {
                ...lastFutureAction,
                content: currentRedoText,
              },
            ],
            present: newArrPresent,
            future: state.future.slice(0, state.future.length - 1),
          };

        default:
          throw Error('Error');
      }

    case ACTION_TYPES.ADD_TEXT:
      const { currentValue, defaultValue, index } = action.payload;

      const newPresent = state.present.map((item) => {
        if (item.inputIndex !== index) return item;

        return {
          inputIndex: item.inputIndex,
          content: currentValue,
        };
      });

      let newPast = [];
      const lastPastItem = state.past[state.past.length - 1];
      // check for first time
      if (
        lastPastItem &&
        lastPastItem.inputIndex === index &&
        lastPastItem.content === defaultValue
      ) {
        newPast = [...state.past];
      } else {
        newPast = [
          ...state.past,
          {
            type: 'ADD_TEXT',
            content: defaultValue,
            inputIndex: index,
          },
        ];
      }

      return {
        future: state.future,
        present: newPresent,
        past: newPast,
      };

    default:
      throw Error(`${action.type} is not exist!`);
  }
};

export default reducer;
