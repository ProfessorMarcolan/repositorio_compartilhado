
class Overlay{
    constructor(html_element,string_over= "fui fazer café"){
        this.cores = ['#FF5068',
            '#E88546',
            '#FFD659',
            '#4DFF69']
        this.var_globao_i =0
        this.var_globao_cor_tamanho = this.cores.length
        this.var_globao_string_overlay = string_over
        this.html_element = html_element

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
        
       
    
       this.html_element.innerHTML= `<h1 style="font-family:'Courier New', Courier, monospace">${string_overlay} </h1>"`
    
    
       this.html_element.style.backgroundColor = nome;
        "#e5e5e5"
        this.html_element.style.height = '500px';
        "150px"
    
    }



}


over1 = new Overlay(document.getElementById('cores'))
let func_nome = (el) => {over1.logica_software()}

setInterval(func_nome , 1000 );


over2 = new Overlay(document.getElementById('cores2'),"ja tenho café")
let func_nome2 = (el) => {over2.logica_software()}

setInterval(func_nome2 , 1000 );






