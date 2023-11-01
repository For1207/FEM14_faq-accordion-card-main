function showHide(event) {
  const divCont = event.target.parentElement;
  const liCont = divCont.parentElement;
  const ulCont = liCont.parentElement;

  hide();
  show();

  // Displays the clicked paragraph
  function show() {
    divCont.childNodes[1].classList.add('item-active');
    divCont.childNodes[3].classList.add('item-active');
    liCont.childNodes[3].classList.add('item-active');
  }

  // Hides the displayed paragraph
  function hide() {
    const h2List = ulCont.getElementsByTagName('h2');
    const imgList = ulCont.getElementsByTagName('img');
    const pList = ulCont.getElementsByTagName('p');
    const listLen = h2List.length;

    for (let i = 0; i < listLen; i++) {
      h2List[i].classList.remove('item-active');
      imgList[i].classList.remove('item-active');
      pList[i].classList.remove('item-active');
    }
  }
}
