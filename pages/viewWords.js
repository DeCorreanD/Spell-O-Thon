import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewWords = (user) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
      <h5 class="card-title">${user.title}</h5>
          <h2 class="card-definition">${user.definition}</h2>
          <p class="time-stamp">${user.time_submitted}</p>
          <p class="type">${user.type}</p>
       <i id="edit-book-btn--${user.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-book--${user.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewWords;
