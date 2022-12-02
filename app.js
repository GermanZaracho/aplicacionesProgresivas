navigator.serviceWorker.register('sw.js');

const btnSave = document.querySelector('#btn-save');
const textArea = document.querySelector('#ingresar-texto');
let container = document.querySelector('.listCollection');

document.addEventListener('DOMContentLoaded', function () {
  let sideNav = document.querySelectorAll('.sidenav');
  let instanciaSide = M.Sidenav.init(sideNav, {});

  let modal = document.querySelectorAll('.modal');
  let instanciaModal = M.Modal.init(modal, {});

});

var app = new Vue({
  el: '#app',
  data: {
    listNote: [],
    note: '',
    isCase: true,
    message: 'Hello Vue!',
    dia:'',
  },

  // Lee el localStorage y guarda el array "listNote" en una constante
  // luego lo pasa al array actual
  created: function () {
    const topList = JSON.parse(localStorage.getItem("listNote"))
    this.listNote = topList ? topList : [];
  },

  methods: {
    // Reconoce lo ingresado, lo pushea dentro de un array y lo guarda en localStorage 

    guardarNotas: function () {
      let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    
      let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

      let f = new Date();

      const newNote = {
        note: this.note,
        check: false,
        show: true,
        fecha: diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear(),
      };

      this.listNote.push(newNote);
      this.note = "";
      localStorage.setItem("listNote", JSON.stringify(this.listNote))

    },

    // Recorre el array, verifica los check y borra la nota
    deleteNote: function () {
      for (let list in this.listNote) {
        if (this.listNote[list].check == true) {
          this.listNote.splice(list, 1);
        }
      }
      localStorage.setItem('listNote', JSON.stringify(this.listNote));
    },

    
  }
})
