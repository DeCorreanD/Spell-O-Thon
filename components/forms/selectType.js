// import renderToDOM from '../../utils/renderToDom';
// import { getWords } from '../../api/wordData';

// const selectType = (uid, typeId) => {
//   let domString = `<label for="type">Type</label>
//         <textarea class="form-control" placeholder="Type" id="type" style="height: 100px"></textarea>
//       </div>
//       <div class="form-group" id="select-type">`;

//   getWords(uid).then((typeArray) => {
//     typeArray.forEach((type) => {
//       domString += `
//           <option
//             value="${type.firebaseKey}"
//             ${typeId === type.firebaseKey ? 'selected' : ''}>
//               ${type.type}
//           </option>`;
//     });

//     domString += '</select>';

//     renderToDOM('#select-type', domString);
//   });
// };

// export default selectType;
