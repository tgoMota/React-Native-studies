const getSrc = (color, piece) => {
    if(color == 'black'){
        if(piece == 'pawn') return require('./imgs/black/pawn.png');
        else if(piece == 'tower') return require('./imgs/black/tower.png');
        else if(piece == 'queen') return require('./imgs/black/queen.png');
        else if(piece == 'horse') return require('./imgs/black/horse.png');
        else if(piece == 'bis') return require('./imgs/black/bis.png');
        else if(piece == 'king') return require('./imgs/black/king.png');
    }else{
        if(piece == 'pawn') return require('./imgs/white/pawn.png');
        else if(piece == 'tower') return require('./imgs/white/tower.png');
        else if(piece == 'queen') return require('./imgs/white/queen.png');
        else if(piece == 'horse') return require('./imgs/white/horse.png');
        else if(piece == 'bis') return require('./imgs/white/bis.png');
        else if(piece == 'king') return require('./imgs/white/king.png');
    }
}

export { getSrc }