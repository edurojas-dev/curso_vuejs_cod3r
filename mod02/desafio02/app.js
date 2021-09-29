new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },

    methods:{
        alerta(){alert('Show!')},
        getDado(event){
            localStorage.setItem("valor1", event.target.value)
            setTimeout(() => {
                this.valor = JSON.stringify(localStorage.getItem("valor1"))
            }, 800);
        },
        getDado2(event){
            localStorage.setItem("valor2", event.target.value)
            setTimeout(() => {
                return this.valor2 = JSON.stringify(localStorage.getItem("valor2"))
            }, 800);
        },

        getLocal(){
            let X1 = JSON.stringify(localStorage.getItem("valor1"))
            if(X1 != null){return this.valor = ' '}
            else{this.valor = X1}
        },

        limpar(){
            localStorage.clear()
            location.reload()
        }
    },

    created(){
        this.getLocal()
        this.valor2 = localStorage.getItem("valor2")
    }
})