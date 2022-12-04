import addWordsForm from '../components/forms/addWordsForm';
import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#add-words').addEventListener('click', () => {
    addWordsForm();
  });
};
export default navigationEvents;
