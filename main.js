const blocks = document.getElementsByClassName('block')
const name_game = document.getElementById('name')
const hod = document.getElementById('hod')
const but_solo = document.getElementById('but_solo')
const but_dyo= document.getElementById('but_dyo')


let counter = 0

function new_game_dyo(){
    but_dyo.style.backgroundColor = '#1bcf39'
    but_solo.style.backgroundColor = 'rgb(165, 207, 243)'
    for(let i = 0; i < blocks.length; i++)
            blocks[i].removeEventListener('click', move_solo)
    hod.innerHTML = 'Ходят крестики!'
    name_game.innerHTML = 'Tic Tac Toe'
    counter = 0
    for(let i= 0; i < blocks.length; i++ ){
        blocks[i].style.backgroundColor = 'rgb(165, 207, 243)'
        blocks[i].innerHTML = ''
        blocks[i].addEventListener('click', move)
    }
}
function new_game(){
    but_dyo.style.backgroundColor = 'rgb(165, 207, 243)'
    but_solo.style.backgroundColor = '#1bcf39'
    for(let i = 0; i < blocks.length; i++)
            blocks[i].removeEventListener('click', move)
    hod.innerHTML = 'Ваш ход!'
    name_game.innerHTML = 'Tic Tac Toe'
    counter = 0
    for(let i= 0; i < blocks.length; i++ ){
        blocks[i].style.backgroundColor = 'rgb(165, 207, 243)'
        blocks[i].innerHTML = ''
        blocks[i].addEventListener('click', move_solo)
    }
}
function move(event){
    counter++
    if(counter % 2 == 0){
        hod.innerHTML = 'Ходят крестики!'
        event.target.innerHTML = '0'
    }
    else{
        hod.innerHTML = 'Ходят нолики!'
        event.target.innerHTML = 'X'
    }
    if(victory()){
        winers('dyo')
    }

    if(counter == 9){
        name_game.innerHTML = 'Ничья'
        setTimeout(new_game_dyo, 2000)
    }
    event.target.removeEventListener('click', move)
}

function victory(){
    const combo = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]]
    for(let i= 0; i < combo.length; i++ ){
        if(blocks[combo[i][0]].innerHTML == blocks[combo[i][1]].innerHTML && blocks[combo[i][0]].innerHTML == blocks[combo[i][2]].innerHTML && blocks[combo[i][0]].innerHTML != ''){
            blocks[combo[i][0]].style.backgroundColor = "yellow"
            blocks[combo[i][1]].style.backgroundColor = "yellow"
            blocks[combo[i][2]].style.backgroundColor = "yellow"
            return true
        }
    }
}

function winers(id){
    if(id == 'dyo'){
        if(counter % 2 == 0)
            name_game.innerHTML = 'Победа ноликов'
        else {
            name_game.innerHTML = 'Победа крестиков'
        }
        setTimeout(new_game_dyo, 2000)
    }
    else if(id == 'solo'){
        name_game.innerHTML = 'Победа крестиков'
        setTimeout(new_game, 2000)
    }
    else{
        name_game.innerHTML = 'Победа ноликов'
        setTimeout(new_game, 2000)
    }
}

function move_solo(event){
    counter++
    hod.innerHTML = ''
    event.target.innerHTML = 'X'
    for(let i = 0; i < blocks.length; i++)
            blocks[i].removeEventListener('click', move_solo)
    setTimeout(ii, 1000)
    event.target.removeEventListener('click', move_solo)
}
function ii(){
    hod.innerHTML = 'Ваш ход!'
    let hod_ii = false
    for(let i = 0; i < blocks.length; i++){
        blocks[i].addEventListener('click', move_solo)
    }
    if(victory()){
        winers('solo')
    }
    else{
        if(counter == 5 ){
            name_game.innerHTML = 'Ничья'
            setTimeout(new_game, 2000)
        }
        else{
            while(hod_ii == false){
                let i = Math.floor(Math.random() * 8);
                if(blocks[i].innerHTML === ''){
                    blocks[i].innerHTML = '0'
                    blocks[i].removeEventListener('click', move_solo)
                    hod_ii == true
                    break
                }
            }
            if(victory()){
                winers('ii')
            }
        }
        console.log('ii')
    }
}
new_game()