let flag;

function showHide(event) {
  const divCont = event.target.parentElement;
  const liCont = divCont.parentElement;
  const ulCont = liCont.parentElement;


  if (flag === 0 || flag === undefined) {
    show();
    flag = 1;
  } else {
    hide();
    flag = 0;
  }

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

    for (let i = 0; i < h2List.length; i++) {
      h2List[i].classList.remove('item-active');
      imgList[i].classList.remove('item-active');
      pList[i].classList.remove('item-active');
      
    }
  }
}
