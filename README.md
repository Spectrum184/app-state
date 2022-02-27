# APP STATE

### 1. Requirement analysis, application design

For this application, React's useReducer and useContext is chosen to manage the app's state. Doing this will also allow logic handling to be excluded from component's code.

Since the application requires rollback, we need to save the app's current state, as well as all past actions and future actions (in case user has already rolled back). As such, the main state includes 3 arrays, past, present and future.

- The "present" array contains the app's current state. This array contains all the state of the input texts (index and content).
- The "past" and "future" array records all the 'moves' that had been/will be made. All elements within have a type attribute to differentiate which type of 'move' had/will be made. Other attributes are described below.

Following the requirements, the application would have 4 main actions:

- ADD_INPUT:
  - Add an extra element to the "present" array.
  - Add the record of adding an element to the "past" array. Since there will be no changes to be made to the order of the app state, no other information is needed.
- ADD_TEXT:
  - Changes the content of the corresponding "present" array's element.
  - Add the record of changing the content of the element to the "past array. In order to redo the action, we need the index of the element as well as its content before modifying, these are saved within the record. Record(s) are added 500ms after the last key up event.
- UNDO/REDO:
  From the last element of the "past"/"future" array, we have 2 cases. The following procedures are of the UNDO action:

  - ADD_INPUT:
    - "present" array: take out the last element.
    - "past" array: take out the last element.
    - "future" array: put in the element taken out of the "past" array.
  - ADD_TEXT:
    - "past" array: take out the last element.
    - "present" array: modify the corresponding element's content with the content saved in the taken out element of the "past" array.
    - "future" array: put in the element taken out of the "past" array.

  All actions are reversed for REDO's case.

### 2. Run App

```
install yarn
cd <RootDirectory>
yarn
yarn dev
```
