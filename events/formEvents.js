import { createWord, getWords, updateWord } from '../api/wordData';
import addWordsForm from '../components/forms/addWordsForm';
import showWords from '../pages/words';

const formEvents = (user) => {
  document.querySelector('#navigation').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-word')) {
      // console.warn('CLICKED SUBMIT AUTHOR');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        type: document.querySelector('#type').value,
        time_submitted: document.querySelector('#time_submitted').value
        // firebaseKey: document.querySelector('#firebaseKey'),
      };
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateWord(patchPayload).then(() => {
          getWords(user).then(showWords);
        });
      });
    }
    // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('editWord')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        type: document.querySelector('#type').value,
        time_submitted: document.querySelector('#time_submitted').value,
        firebaseKey,
      };
      updateWord(payload).then(() => {
        getWords(user).then(addWordsForm);
      });
    }
  });
};
export default formEvents;
