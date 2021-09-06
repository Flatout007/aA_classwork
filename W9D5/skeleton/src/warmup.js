
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let p = `<p>${string}</p>`
  // htmlElement = partyHeader
  htmlElement.innerHTML = p
};

htmlGenerator('Welcome', partyHeader);