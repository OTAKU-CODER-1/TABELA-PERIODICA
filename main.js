const btn = document.querySelector('.check');
const input = document.querySelector('input');
const elements = document.querySelectorAll('.element');
const sec = document.querySelectorAll('.sec1');
const h1 = document.querySelector('h1');
const lis = document.querySelectorAll('.li-animado');
const box = document.querySelector('.box-area');
const naoMetais = document.querySelectorAll('.nao-metais');
const metaiAlcalinos = document.querySelectorAll('.metais-alcalinos');
const metaisAlcalinosTerrosos = document.querySelectorAll('.metais-alcalinos-terrosos')
const metaisTrans = document.querySelectorAll('.metais-trans');
const semiMetais = document.querySelectorAll('.semi-metais');
const outroMetais = document.querySelectorAll('.outros-metais');
const lantanideos = document.querySelectorAll('.lantanideos');
const halogenios = document.querySelectorAll('.halogenios');
const gasesNobres = document.querySelectorAll('.gases-nobres');
const actinidio = document.querySelectorAll('.actinidios');

btn.addEventListener('click',()=>{
    noBackground();
    lisAnimate();
    nomesElements();
    neon();
})

function neon(){
    if(input.checked === false){
            naoMetais.forEach((item)=>{
                item.classList.add('active-nao-metais');
        
            metaiAlcalinos.forEach((item)=>{
                item.classList.add('active-metaiAlcalinos')
            });
            metaisAlcalinosTerrosos.forEach((item)=>{
                item.classList.add('active-metais-alcalinos-terrosos')
            });

            metaisTrans.forEach((item)=>{
                item.classList.add('active-metais-trans')
            });
            
            semiMetais.forEach((item)=>{
                item.classList.add('active-semi-metais')
            });   
            
            outroMetais.forEach((item)=>{
                item.classList.add('active-outros-metais')
            })

            lantanideos.forEach((item)=>{
                item.classList.add('active-lantanideos')
            })
            
            halogenios.forEach((item)=>{
                item.classList.add('active-halogenios')
            })
            
            gasesNobres.forEach((item)=>{
                item.classList.add('active-gases-nobres')
            })
            actinidio.forEach((item)=>{
                item.classList.add('active-actinidios')
            })
        })
        

    }else{
        naoMetais.forEach((item)=>{
            item.classList.remove('active-nao-metais');
        });
        
        metaiAlcalinos.forEach((item)=>{
            item.classList.remove('active-metaiAlcalinos');
        });

        metaisAlcalinosTerrosos.forEach((item)=>{
            item.classList.remove('active-metais-alcalinos-terrosos');
        });

        metaisTrans.forEach((item)=>{
            item.classList.remove('active-metais-trans');
        });
        semiMetais.forEach((item)=>{
            item.classList.remove('active-semi-metais');
        })
        outroMetais.forEach((item)=>{
            item.classList.remove('active-outros-metais');
        })
        lantanideos.forEach((item)=>{
            item.classList.remove('active-lantanideos');
        })
        halogenios.forEach((item)=>{
            item.classList.remove('active-halogenios');
        })
        gasesNobres.forEach((item)=>{
            item.classList.remove('active-gases-nobres');
        })
        actinidio.forEach((item)=>{
            item.classList.remove('active-actinidios');
        })
    }
}

function nomesElements(){
    if(input.checked === false){
        sec.forEach((item)=>{
            item.classList.add('color')
            box.classList.remove('hide')
        })
    }else{
        sec.forEach((item)=>{
            item.classList.remove('color');
            box.classList.add('hide')
        })
    }
}


function lisAnimate(){
    if(input.checked === false){

        sec.forEach((item)=>{
            item.classList.add('color')
        })
    }
}
function noBackground(){
    if(input.checked === false){
        elements.forEach((item)=>{
            item.classList.add('transparent');
            h1.classList.add('color');
        })
    }
    else{
        elements.forEach((item)=>{
            item.classList.remove('transparent');
            h1.classList.remove('color');
        });
    }
}