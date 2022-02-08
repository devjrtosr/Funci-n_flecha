const autos = ['Toyota', 'Nissan', 'Susuki', 'Mitsubishimontero', 'AlfaRomeo', 'Jeep', 'Tata']; 

const funcionautos = (arreglo_autos) =>{
    arreglo_autos.map((item) => {
        if(item.length > 5){ 
            console.log(item); 
        };
    });
};
funcionautos(autos);                        