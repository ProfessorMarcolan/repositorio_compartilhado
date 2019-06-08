let cores = ['#FF5068',
            '#E88546',
            '#FFD659',
            '#4DFF69']

let var_globao_i =0
let var_globao_cor_tamanho = cores.length
let var_globao_string_overlay = 'fui2 fazer café'



function logica_software(){
    mostra_coreS_interface(cores[var_globao_i],var_globao_string_overlay)
    mostra_cores(cores[var_globao_i])

    var_globao_i = (var_globao_i + 1)%var_globao_cor_tamanho


}



setInterval( logica_software , 1000 );




function mostra_coreS_interface(nome,string_overlay= 'fui fazer café'){
    //baseado no código de gomakething
    // https://gomakethings.com/two-ways-to-set-an-elements-css-with-vanilla-javascript/
   let  a = document.getElementById('cores')

   a.innerHTML= `<h1 style="font-family:'Courier New', Courier, monospace">${string_overlay} </h1>"`


    a.style.backgroundColor = nome;
    "#e5e5e5"
    a.style.height = '500px';
    "150px"

}





function mostra_cores(cores){
    console.log(cores)
}


