### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - The purpose of React Router is to be able to develop client-side routing in React.

- What is a single page application?
  - The app that uses client-side routing only is a single-page application. Using the app does not refresh the page in the browser.
  
- What are some differences between client side and server side routing?
  - Every request on the page using server-side routing results in a full page refresh, unlike client-side routing where app stays on one page. Due to full page refresh, it might take longer to view all content as more things are getting rendered (even the ones we don't need or didn't use, like header or footer). CLient-side routing has more modern architecture, and improved and easier UI.

- What are two ways of handling redirects with React Router? When would you use each?
  - Using Redirect component and redirect is to some route. Also, calling .push method on History object, when we call the route path from window's history which redirects user there. Developer needs to use useHistory hook, and push url to session history.

- What are two different ways to handle page-not-found user experiences using React Router?
  - Developer can create a NotFound component and add it at the end of all routes in Routes component. In case any of above routes don't match requested route, User will automatically be redirected to NotFound page. Another option is to Redirect users to home (or other) page and avoid page-not-found situations.

- How do you grab URL parameters from within a component using React Router?
  - Using useParams hook, which stores info on parameters; also create paths like so path='/route/:param'. useParams hook will return an object that could be used in a route component.

- What is context in React? When would you use it?
  - When developer needs to pass down some props in a larger application, and passing down through many child components to get to target component may take time and more code, they can use Context, which takes a prop from a parent component and can be passed down to the target component without going through middle components.

- Describe some differences between class-based components and function
  components in React.
  - Functional components are newer in React. They use useState to declare a state and then setState when the state changes, unlike class-based components which use this.state to achieve same result. Functional components use many hooks which help with props manipulation, handling events, and give functional components a functionality of class-based components without using classes and this. React lifecycle methods like componentDidMount(/DidUpdate/DidUnmount) are not supported in functional components, and are replaced with hooks for example useEffect.

- What are some of the problems that hooks were designed to solve?
  - They replace class-based lifecycle methods. They allow reusable behavior between components. They have easier and more readable syntax, in comparison to class-based components.
  