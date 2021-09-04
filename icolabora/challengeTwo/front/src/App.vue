<template>
  <div class="row top-side">
    <div class="col-md-12">
      <h1>CRUD de produtos</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-md-3 right-side">
      <form target="frame" id="edit-form" @submit.prevent="salvar">
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="name">Nome</label>
            <input
              id="name"
              type="text"
              class="form-control"
              v-model="produto.name"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="desc">Descrição</label>
            <input
              id="desc"
              type="text"
              class="form-control"
              v-model="produto.desc"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="price">Valor</label>
            <input
              id="price"
              type="text"
              class="form-control"
              v-model="produto.price"
            />
          </div>
        </div>

        <button class="btn btn-primary" href="#">Salvar</button>
      </form>
    </div>
    <div class="col-md-9 left-side">
      <div class="row-md-6 left-top">
        <h5 align="center">Lista de produtos</h5>
        <div class="col">
          <table class="table">
            <thead class="table table-striped">
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Valor</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="produto of produtos" :key="produto._id">
                <td>{{ produto.name }}</td>
                <td>{{ produto.desc }}</td>
                <td>{{ produto.price }}</td>
                <td>
                  <button @click="apagar(produto._id)" class="btn btn-delete">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                  <button @click="update(produto)" class="btn btn-edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row-md-6 left-bot">
        <div class="col whiterose">
          <h6>Este é um teste</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Produto from "./services/produtos";
export default {
  data() {
    return {
      produtos: [],


      produto: {
        id: '',
        name: '',
        desc: '',
        price: '',
      },
    };
  },

  mounted() {
    this.listar();
  },

  methods: {
    listar() {
      Produto.listar().then((res) => {
        this.produtos = res.data.data;
      });
    },

    salvar() {
      if (!this.produto._id) {
        Produto.salvar(this.produto).then(() => {
          this.produto = {};
          this.listar();
          alert("cadastrado com sucesso");
        });
      } else{
        console.log(this.produto._id)
        Produto.update(this.produto, this.produto._id).then(() => {
          this.produto = {};
          this.listar();
          alert("atualizado com sucesso");
        });
        
      }
    },

    update(produto) {
      this.produto = produto;
    },

    apagar(produto){
      Produto.delete(produto).then(()=>{
        alert('deletado');
        this.listar();
      });
      


    }
  },
};
</script>

<style>
.top-side,
.right-side,
.left-side,
.bot-side {
  background-color: #ddd;
  padding: 20px;
  border: 5px solid #aaaaaa;
}
.right-side,
.left-side {
  border-top: none;
}

.right-side {
  border-right: none;
}
.top-side .col-md-12 {
  display: flex;
  justify-content: center;
  align-content: center;
}

.left-side {
  margin: 0;
  padding: 0;
}

.left-top {
  padding: 20px;
}

.left-bot {
  
  padding: 20px 30px 30px 20px;
  border-top: 5px solid #aaa;
}


.table-striped th {
  background-color: #bbb;
}

tbody tr {
  background-color: #ccc;
}

.bi-trash {
  background-color: tomato;
  margin: 5px;
}

table .btn-delete {
  margin: 0;
  margin-right: 2px;
  padding: 0;
  background-color: tomato;
}

table .btn-edit {
  width: 28px;
  height: 29px;
  padding: 0px;
  background-color: steelblue;
}
</style>
