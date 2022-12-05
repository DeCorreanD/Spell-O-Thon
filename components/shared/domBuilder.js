import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
  <button class="button1" value="computing" id="computing">Computing</button>
<button class="button2" value="storytelling" id="storytelling">Storytelling</button>
<button class="button3" value="other" id="other">Other</button>
<button class="button4" value="All-types" id="All-types">All</button>
      <div id="store"></div>
      <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
