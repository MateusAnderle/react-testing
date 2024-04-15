# What to test in react apps

- Test component renders
- Test component renders with props
- Test component renders in different states (ex: navbar with login or signOut)
- Test component react to events

# What not to test in react apps

- Implementation details (test behaviour and not the implementation of the behaviour)
- Third party code (material UI)
- Code that is not important from a user point fo view (ex: do not test a utility funtion to render a friendly format to user, but test the final result rendered in screen or in the output of the function who calls it.)

# React Testing Library - Queries

- Queries are the methods that Testing Libraryprovides to find elements on the page

  One element:

  - getBy..
  - queryBy..
  - findBy..

  Multiple elements:

  - getAllBy..
  - queryAllBy..
  - findAllBy..

The suffix can be one of the role, LabelText, PlacholderText, DisplayValue, AltText, Title and TestId

## Priority Order for Queries - To find elements in virtual DOM

getByRole
getByLabelText
getByPlaceholderText
getByText
getByDisplayValue
getByAltText
getByTitle
getByTestId

## getAllBy - Multiple elements query

getAllByRole
getAllByLabelText
getAllByPlaceholderText
getAllByText
getAllByDisplayValue
getAllByAltText
getAllByTitle
getAllByTestId

## TEXT MATCH

- String
- Regex
- Function

Examples:

  <div>Hello world</div>
  screen.getByText("Hello world") => Full string match
  screen.getByText("llo wor") => Substring match
  screen.getByText("hello world") => Ignore case

### Function match

(content?: string, element?: Element | null) => boolean
screen.getByText((content) => content.startsWith("Hello"))

## QueryBy

- Return the matching node or null if doesn't find any element match.
- Useful for asserting an element that is not present in render
- Throws an error if more than one match is found

## Appearance / Disappearance

- Example: Data fetched from server.
- Use FindBy
- Returns a promise

# DEBBUGING TESTS

screen.debug() --> To visualize the DOM tree in console.

logRoles(view.container) --> To separate elements in containers (Showing their names and tags) and display them in console.

# TESTING PLAYGROUND

Chrome extension --> To inspect elements from my screens in browser and test them.

# USER INTERACTIONS

- A click using a mouse or a keypress using a keyboard.

FireEvent | User-event

- FireEvent is used to dispatch DOM events
- User-event simulates full interactions, which may fire multiples events and do additional checks along the way.

# TEST PROVIDERS

```
render( <MuiMode />, {
  wrapper: AppProviders
})
```

# CUSTOM RENDER FUNCTION

- Create a file named test-utils to group every providers to use in the tests
- Examples on MuiMode component

# CUSTOM REACT HOOKS

- import **renderHook** (instead only render)

# MOCKING HTTP REQUESTS

- Only E2E test will use real http requests data. For unit tests we use mocking data.

# STATIC ANALYSIS TESTING

- Ensure consistent style and formatting
- Check for commom mistakes and pssible bugs
- Limit the complexity of code
- Verify type consistency

## Static testing tools

- Typescript
- ESlint
- Prettier
- Husky (Is a tool that helps to improve commits and more)
- lint-staged (Run linters and formatters) against staged git files
