import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Word</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((obj) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${obj.title}</h5>
          <h2 class="card-definition">${obj.definition}</h2>
          <p class="time-stamp">${obj.time_submitted}</p>
          <p class="type">${obj.type}</p>
            <hr>
            <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store-cards', domString);
};

export default showWords;
