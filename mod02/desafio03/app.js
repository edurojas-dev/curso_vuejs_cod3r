new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: ''
    },

    computed:{
        showMSG(){
            if(this.valor != 37){
                return this.resultado = "Valor Diferente"
            }else{
                return this.resultado = "Valor Igual 37"
            }
        }
    },

    watch: {
        valor(){
            setTimeout(() => {
                return this.valor = 0
            }, 5000);
        }
    }
    
});