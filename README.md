This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React To Do Application!

![](https://media.giphy.com/media/J4yRvhzW43xXHZu8cM/giphy.gif)

### `All Components - List, Add, Remove Todos`
As per handout:

App
- this component should render the TodoList component
TodoList
- this component should render the NewTodoForm component and should render the list of Todo components. Place your state that contains all of the todos in this component.
NewTodoForm
 - this component should render a form with one text input for the task to be created. When this form is submitted, a new Todo component should be created.
Todo
- this component should display a div with the task of the todo.
For each Todo component, there should also be a button with the text “X” that when clicked, removes the todo.

### `Editing`
As per handout:

Each Todo component should also display a button with the text “edit” that when clicked, displays a form with the task of the todo as an input and a button to submit the form. When the form is submitted, the task of the text should be updated and the form should be hidden.

### `Further Study`
As per handout:

- Alongside each Todo, add a button with the text “Mark as completed”. When this button is clicked, add a strike through the text of the todo.
- Instead of a button, refactor your application so that the todo itself can be clicked to mark it as completed. Add a strikethrough style to the Todo if it is completed. A user can toggle it on and off by clicking.
- Add some styling to your application! Try to use a CSS animation that fades out a Todo when it is deleted (this will involve adding/removing CSS classes).
Save your todos in localStorage and retrieve them when the page loads.
