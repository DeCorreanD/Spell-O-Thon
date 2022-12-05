import { deleteWords, getSingleWord, getWords } from '../api/wordData';
import addWordsForm from '../components/forms/addWordsForm';
import showWords from '../pages/words';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('deleteWord')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteWords(firebaseKey).then(() => {
          getWords(user).then(showWords);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      // console.warn('ADD BOOK');
      addWordsForm(user);
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('editWord')) {
      // console.warn('EDIT BOOK', e.target.id);
      // console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then(addWordsForm);
      // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    }

    // filter buttons
    // document.querySelector('#computing').addEventListener('click');
  });
};
export default domEvents;
