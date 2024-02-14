var app = new Vue({
  el: "#app",
  data: {
    mensaje: true,
    sms: "No, no podre!",
    sms1: "",
    sms2: "",
    sms3: "",
    sms4: "",
    sms5: "",
    activarLluvia: false,
  },

  created() {
    this.activarModal();
  },

  methods: {
    confirma() {
      this.activarLluvia = true;
      this.cerrarModal();
    },

    loSiento() {
      this.sms1 = "Estás segura?";
      this.sms = false;
    },
    loSiento1() {
      this.sms2 = "Piénsalo bien!";
      this.sms1 = false;
    },
    loSiento2() {
      this.sms3 = "No hay vuelta atrás!";
      this.sms2 = false;
    },
    loSiento3() {
      this.sms4 = "Mira el otro botón!";
      this.sms3 = false;
    },
    loSiento4() {
      this.sms5 = "😔";
      this.sms4 = false;
    },

    activarModal() {
      document.querySelector("#modalConfirmar").style.display = "block";
    },
    cerrarModal() {
      document.querySelector("#modalConfirmar").style.display = "none";
    },
  },
});

let tiempo;
function cadaTresSegundos() {
  tiempo = setInterval(mensaje, 2000);
}
function mensaje() {
  alert("Han pasado 3 segundos");
}
