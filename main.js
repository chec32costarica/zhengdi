const url = "https://script.google.com/macros/s/AKfycbz-2u_G2SmSJNkLzmCs-l4Dn-nVnJiTLtYpKkqiYvdHftyO3yPaA4D4/exec";

fetch(url)
    .then(d => d.json())
    .then(d => {
        d.forEach(e => {

            if(e[10] == 'EPV'){
                document.getElementById('app').innerHTML += `
            <article class="card epv">
                <div>
                    <h3 class="lugar">${e[6]} (许可)</h3>
                    <h2 class="exp__num"><ion-icon name="folder-outline"></ion-icon><span class="number_epv">${e[0]} </span>${e[1]}</h2>
                    <h4 class="plano"><ion-icon name="map-outline"></ion-icon> ${e[4]}</h4>
                </div>
                
                <div class="card__name">
                      <p>Delivered 已经交付</p>
                </div>
                <div class="card__precis">
                    <a href="" class="card__icon" ><ion-icon name="location"></ion-icon></a>
                    
                    <div>
                        <span class="card__preci">${e[8]} > ${e[9]}</span>
                        <span class="card__preci">${e[11]}</span>
                    </div>
                    <a href="" class="card__icon"><ion-icon name="alert-circle"></ion-icon></a>
                </div>
            </article>
            ` 

            }else if(e[10] == 'Expropiado'){
                document.getElementById('app').innerHTML += `
            <article class="card exp">
                <div>
                    <h3 class="lugar">${e[6]} （已征)</h3>
                    <h2 class="exp__num"><ion-icon name="folder-outline"></ion-icon><span class="number_exp">${e[0]} </span> ${e[1]}</h2>
                    <h4 class="plano"><ion-icon name="map-outline"></ion-icon> ${e[4]}</h4>
                </div>
                
                <div class="card__name">
                      <p>Delivered 已经交付</p>
                </div>
                <div class="card__precis">
                    <a href="" class="card__icon" ><ion-icon name="location"></ion-icon></a>
                    
                    <div>
                        <span class="card__preci">${e[8]} > ${e[9]}</span>
                        <span class="card__preci">${e[11]}</span>
                    </div>
                    <a href="" class="card__icon"><ion-icon name="alert-circle"></ion-icon></a>
                </div>
            </article>
            ` 
            }else{
                document.getElementById('app').innerHTML += `
            <article class="card">
                <div>
                    <h3 class="lugar">${e[6]}</h3>
                    <h2 class="exp__num"><ion-icon name="folder-outline"></ion-icon><span class="number">${e[0]} </span> ${e[1]}</h2>
                    <h4 class="plano"><ion-icon name="map-outline"></ion-icon> ${e[4]} (没进展)</h4>
                </div>
                
                <div class="card__name">
                      <p>Pending 末交付</p>
                </div>
                <div class="card__precis">
                    <a href="" class="card__icon" ><ion-icon name="location"></ion-icon></a>
                    
                    <div>
                        <span class="card__preci">${e[8]} > ${e[9]}</span>
                        
                    </div>
                    <a href="" class="card__icon"><ion-icon name="alert-circle"></ion-icon></a>
                </div>
            </article>
            ` 
            };

            

        });
        

    });