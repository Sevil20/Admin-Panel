const popup = document.querySelector('.pop-up');
const popBtnRemove = document.querySelector('.remove');
const popBtnCancel = document.querySelector('.cancel');
const popBtnSave = document.querySelector('.save');
const editBtn = document.querySelectorAll('.bx-message-square-edit');
const input1 = document.querySelector('.my-input-1');
const input2 = document.querySelector('.my-input-2');
const input3 = document.querySelector('.my-input-3');
const options = document.querySelector('.options');
const tableValues = document.querySelectorAll('.tdd ');
const xbtn = document.querySelector('.x-btn');
const trashBtn = document.querySelector('.trash');
const detailBtn = document.querySelector('.bxs-detail');
const collapseBtn = document.querySelector('.collapseBtn')
let sideContainer = document.querySelector('.side-container');
let headerContainer = document.querySelector('.header-container');
const buttonContainer = document.querySelectorAll(' a')
const h2Tag = document.querySelector('.weather-for');
const pTag = document.querySelector('.card-active-p');
let clickElement;
let popUpInputs =  document.querySelectorAll('.input')

editBtn.forEach(element =>{
  element.addEventListener('click',(e)=>{
    e.preventDefault()
    popup.classList.add('pop-absolute');
    popBtnRemove.addEventListener('click',()=>{
    popUpInputs.forEach(e => {
       e.value=''
    })
    });
    if(e.target instanceof HTMLButtonElement){
      clickElement = e.path[3];
      console.log(e.path[3])
    }
    else{
      clickElement = e.path[4]
    }
    for(let i = 0; i<popUpInputs; i++){
      popUpInputs[i].value = clickElement.children[i].textContent
    }
});
})

xbtn.addEventListener('click',()=>{
  popup.classList.remove('pop-absolute');
});
popBtnCancel.addEventListener('click',()=>{
  popup.classList.remove('pop-absolute');
});
trashBtn.addEventListener('click',(e)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      });
    //   tableValues.forEach(element =>{
    //     element.remove()
    //   })
    if(e.target.tagName === "TD"){
                e.target.parentElement.remove();
    }
})

collapseBtn.addEventListener('click',()=>{
sideContainer.classList.toggle('side-container-expand');
headerContainer.classList.toggle('header-container-expand');
collapseBtn.classList.toggle('collapseBtn-1')
})
async function getWeatherData(){
  let dataPromise = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Baku&units=metric7Aappid=7aac6792c70f1fc0d0be824412b001')
  let data = await dataPromise.json()
  h2Tag.textContent = data.main.temp + 'C'
  pTag.textContent = data.weather[0].main
}
getWeatherData()