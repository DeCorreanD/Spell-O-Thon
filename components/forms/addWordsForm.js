import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addWordsForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="Title" placeholder="Enter Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="time_submitted">Time Submitted</label>
        <textarea class="form-control" placeholder="Time Submitted" id="time_submitted" style="height: 100px">${obj.time_submitted || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="type">Type</label>
        <textarea class="form-control" placeholder="Type" id="type" style="height: 100px">${obj.type || ''}</textarea>
      </div>
      <div class="form-group" id="select-type">
      </div>
      <button type="submit" class="btn btn-primary">Submit Word
      </button>
    </form>`;

  renderToDOM('#navigation', domString);
  // selectAuthor(uid, `${obj.author_id || ''}`);
};

export default addWordsForm;
