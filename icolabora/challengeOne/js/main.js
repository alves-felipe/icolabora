document.addEventListener("DOMContentLoaded", function (event) {
  // init custumer file input plugin + bootstrap
  bsCustomFileInput.init();

  console.log("content dom load")
  autoFill();
  cleanAll();
  getById()

  a();

  validation();

});



var cName;
var specie;
var gender;
var origem;
var last;
var img;

var singleUser;


var myList = [];

async function a() {
  const user = await axios.get('https://rickandmortyapi.com/api/character')

  singleUser = await axios.get(`https://rickandmortyapi.com/api/character/${getRandomNum(1, user.data.info.count)}`)

  console.log(singleUser.data)
  singleUser = singleUser.data
}
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getById() {
  cName = document.getElementById("name");
  specie = document.getElementById("specie");
  gender = document.getElementById("gender");
  origem = document.getElementById("origem");
  last = document.getElementById("last-saw");
  img = document.getElementById("customFile");


}

var newCharacter = {}

function autoFill() {


  document.querySelector(".btn-danger")
    .addEventListener("click", function () {
      cName.value = singleUser.name;
      specie.value = singleUser.species;
      gender.value = singleUser.gender;
      origem.value = singleUser.origin.name;
      last.value = singleUser.location.name;
      img.type = "text";
      img.value = singleUser.image;


      a();
    });

}

function save() {


  newCharacter = {
    cname: cName.value,
    specie: specie.value,
    gender: gender.value,
    origem: origem.value,
    last: last.value,
    img: img.value
  }

  myList.push(newCharacter);
  listMaker(myList)

}




function validation() {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === true) {
          save();
          console.log(myList)

        } else {


          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
};



function cleanAll() {

  document.querySelector(".btn-warning")
    .addEventListener("click", function () {
      cName.value = "";
      specie.value = "";
      gender.value = "";
      origem.value = "";
      last.value = "";
      img.type = "file";
      img.value = "";

    });

}

