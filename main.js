function convertData() {
  let inputTextArea = document.getElementById('inputTextArea');
  let outputTextArea = document.getElementById('outputTextArea');
  let keepSpecial = document.getElementById('keepSpecial');
  let inputData = inputTextArea.value;
  const regex = /[^a-zA-Z0-9]/gm;
  const regexSpecial = /[^a-zA-Z0-9_\ -]/gm;
  let cleanedString = ``;
  if (inputData != '' && inputData != null) {
    if (inputTextArea.classList.contains("is-invalid")) {
        inputTextArea.classList.remove("is-invalid");
      };
    if (keepSpecial.checked) {
      inputData = inputData.replace(regexSpecial, cleanedString);
      }
    if (!keepSpecial.checked) {
      inputData = inputData.replace(regex, cleanedString);
    }
    inputData =   inputData ;
    outputTextArea.hidden  = false;
    outputTextArea.value = inputData;
  } else {
    inputTextArea.classList.add("is-invalid");
    outputTextArea.value  = '';
    outputTextArea.hidden  = true;
  };
};