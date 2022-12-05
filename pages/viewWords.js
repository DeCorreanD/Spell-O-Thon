import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewWords = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
      <h5 class="card-title">${obj.title}</h5>
          <h2 class="card-definition">${obj.definition}</h2>
          <p class="time-stamp">${obj.time_submitted}</p>
          <p class="type">${obj.type}</p>
       <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewWords;
