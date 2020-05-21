const fs = require('fs');

fs.readdir('./', (err, files) => {
    if(err){ 
         console.log(err);
    } 
    else{   
        console.log('\nArchivos encontrados: ', files);
        files.reverse();
        console.log('\n\nArchivos ordenados a la inversa: ', files);

        let letra = 'A';
        let cont = 0;
        letra = letra.toUpperCase();
        
        console.log('\n\nArchivos que empiezan con la letra ', letra, ':\n\n');
    
        files.forEach(file => { 
            if(file.charAt(0).toUpperCase() === letra){
                cont++;
                console.log('-', file, '\n');
            }
        }) 
        console.log('Cantidad de archivos que empiezan con la letra ', letra, ': ', cont)
    }
})