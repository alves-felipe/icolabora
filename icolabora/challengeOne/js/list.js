/*

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


*/

function listMaker(list) {

  document.getElementById('lista').innerHTML = '';

  list.forEach((data, index) => {


    var row = document.createElement('div')
    row.setAttribute('class', 'row')

    var col = document.createElement('div')
    col.setAttribute('class', 'col-md-6')
    var col2 = document.createElement('div')
    col2.setAttribute('class', 'col-md-6')

    row.appendChild(col);
    row.appendChild(col2);

    var card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style", "width: 100%; padding: 10px; border-radius: 5px");
    card.setAttribute('id', index)

    var img = document.createElement("img");
    img.setAttribute('src', `${data.img}`);
    img.setAttribute('class', 'card-img-left')

    var card2 = document.createElement("div");
    card2.setAttribute("class", "card-body");

    var title = document.createElement('h6');
    title.setAttribute('class', 'card-title')

    var p1 = document.createElement('h6')
    var p2 = document.createElement('h6')
    var p3 = document.createElement('h6')
    var p4 = document.createElement('h6')
    
    p1.appendChild(document.createTextNode(`Espécie: ${data.specie}`))
    p2.appendChild(document.createTextNode(`Gênero: ${data.gender}`))
    p3.appendChild(document.createTextNode(`Origem: ${data.origem}`))

    var edit = document.createElement('button')
    edit.setAttribute('href', '#')
    edit.setAttribute('class', 'btn btn-secondary')
    edit.setAttribute('style', 'margin-right: 50px')
    edit.setAttribute('onclick', 'modal()')
    edit.appendChild(document.createTextNode('editar'))

    var del = document.createElement('button')
    del.setAttribute('href', '#')
    del.setAttribute('class', 'btn btn-danger')
    del.appendChild(document.createTextNode('deletar'))

    title.appendChild(document.createTextNode(data.cname))
    card2.appendChild(title);
    card2.appendChild(p1);
    card2.appendChild(p2);
    card2.appendChild(p3);

    var sec = document.createElement('section');
    sec.setAttribute('class', 'btn-space')

    col.appendChild(img)

    sec.appendChild(edit)
    sec.appendChild(del)
    card2.appendChild(sec)

    col2.appendChild(card2)


    card.appendChild(row)

    var divv = document.getElementById('lista');

    divv.appendChild(card);

  });


  const listOfUsers = document.getElementById('lista')
  listOfUsers.addEventListener('click', removeItem)
  
  listOfUsers.addEventListener('click', getIndex)
}

