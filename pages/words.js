import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showWords = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h2 class="card-definition">${item.definition}</h2>
          <p class="type">${item.type}</p>
            <hr>
            <i id="editWord--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="deleteWord--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export default showWords;
