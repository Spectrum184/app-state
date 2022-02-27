# Technical Challenge

## Overview

In this challenge, you will build a demo app to demonstrate undo/redo feature.

### Requirements

- Your submission needs to satisfy the following requirements:
  - Display a list of text inputs.
  - Users can add a text input. No limit in number of text inputs.
  - Users can input text in any text inputs. No limit in length of inputted texts.
  - List of inputs and inputted text in these inputs will be called “app state”. Undo/redo feature will be used to rollback/
  - When clicking Undo button, it should rollback the “app state” to previous state.
  - When clicking Redo button, it should display the previously rollbacked state.
  - Undo/Redo buttons behave just like in Google Docs, or other editing tools, but in this challenge, it’s used to control the “app state”.

### This is an example of how the app should behave:

- For example, at the beginning, there is one text input. Let’s call it “input-1”.
  - Add one more text input, let’s call it “input-2”. We have two text inputs.
  - We type “abc” to “input-1”.
  - Then we type “123” to “input-2”.
  - We click “Undo”, then text “123” will be erased in “input-2”.
  - We click “Undo” one more time, then text “abc” will be erased in “input-1”.
  - We click “Undo” one more time, then text input “input-2” will be removed. Now there is only text input “input-1” on screen.
  - Then we click “Redo”. Text input “input-2” will be displayed.
  - Then we click “Redo” again, text “abc” will be displayed in “input-1”.
  - Then we click “Redo” again, text “123” will be displayed in “input-2”.

We are looking for a solution built from scratch. Don’t use any existing libraries to support undo/redo functions.

### Technology stack

Web application with NextJS.
