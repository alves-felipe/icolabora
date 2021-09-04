function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("btn-danger")) {
        let index = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
        console.log(index);
        myList.splice(index, 1)

    }

    listMaker(myList);
}

var index;

const newName = document.getElementById('name-edit')
const newSpecie = document.getElementById('specie-edit')
const newGender = document.getElementById('gender-edit')
const newOrigem = document.getElementById('origem-edit')

function getIndex(e) {
    e.preventDefault();
    if (e.target.classList.contains("btn-secondary")) {
        index = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
        
        newName.value = myList[index].cname
        newSpecie.value = myList[index].specie
        newGender.value = myList[index].gender
        newOrigem.value = myList[index].origem

    }
}


function editItem() {

    myList[index].cname = newName.value
    myList[index].specie = newSpecie.value
    myList[index].gender = newGender.value
    myList[index].origem = newOrigem.value

    listMaker(myList)

    console.log('--------now----------')
    console.log(index)


    var modal = document.getElementById("myModal");

    modal.style.display = 'none';


}



