let cores = ['#FF5068',
            '#E88546',
            '#FFD659',
            '#4DFF69']

let var_globao_i =0
let var_globao_cor_tamanho = cores.length


cores.forEach( (nome_cor, i) => {
    mostra_cores(nome_cor)
    mostra_coreS_interface(nome_cor)
    // console.log(i)
})


function controla_array(){
    mostra_coreS_interface(cores[var_globao_i])
    mostra_cores(cores[var_globao_i])

    var_globao_i = (var_globao_i + 1)%var_globao_cor_tamanho


}



setInterval( controla_array, 1000 );




function mostra_coreS_interface(nome){
// https://gomakethings.com/two-ways-to-set-an-elements-css-with-vanilla-javascript/
   let  a = document.getElementById('cores')

    a.style.color = 'purple';
    "purple"
    a.style.backgroundColor = nome;
    "#e5e5e5"
    a.style.height = '500px';
    "150px"

}





function mostra_cores(cores){
    console.log(cores)
}


function oi_mundo(){
    console.log("oi mundo ")
}

