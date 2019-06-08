
class Overlay{
    constructor(){
        this.cores = ['#FF5068',
            '#E88546',
            '#FFD659',
            '#4DFF69']
        this.var_globao_i =0
        this.var_globao_cor_tamanho = this.cores.length
        this.var_globao_string_overlay = 'fui2 fazer café'

    }
    
    logica_software(){
        console.log(this)
        this.mostra_coreS_interface(this.cores[this.var_globao_i], this.var_globao_string_overlay)
        // this.mostra_cores(this.cores[this.var_globao_i])
    
        this.var_globao_i = (this.var_globao_i + 1 )% this.var_globao_cor_tamanho
    
    
    }

    mostra_coreS_interface(nome,string_overlay= 'fui fazer café'){
        //baseado no código de gomakething
        // https://gomakethings.com/two-ways-to-set-an-elements-css-with-vanilla-javascript/
        
       let  a = document.getElementById('cores')
    
       a.innerHTML= `<h1 style="font-family:'Courier New', Courier, monospace">${string_overlay} </h1>"`
    
    
        a.style.backgroundColor = nome;
        "#e5e5e5"
        a.style.height = '500px';
        "150px"
    
    }



}


over1 = new Overlay()
let func_nome = (el) => {over1.logica_software()}

setInterval(func_nome , 1000 );






