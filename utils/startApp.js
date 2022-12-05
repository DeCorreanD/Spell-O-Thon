import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import showWords from '../pages/words';
import { getWords } from '../api/wordData';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getWords(user).then(showWords);
};

export default startApp;
