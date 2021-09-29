new Vue({
    el: "#desafio",
    data: {
        nome: "Eduardo Rojas",
        idade: 25,
        valorM: 0,
        valor: 0,
        imagem: "icon.png"
    },

    methods: {
        mult(){
            this.valorM = this.idade * 3
            return this.valorM
        },

        nRandom(){
            this.valor =  (Math.random() * 1).toFixed(2)
            return this.valor
        }
    }

})