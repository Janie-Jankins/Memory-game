function randomPlacement(){
    let count = 0;
    let randomLetters = [];
    let randomNumber = 0;

    let tempLetters = {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        E: 'E',
        F: 'F',
        G: 'G',
        H: 'H'
    }

    while(count<8 && Object.keys(tempLetters).length!==0){
        randomNumber = Math.random();
        if(randomNumber >= 0 && randomNumber < 1/8 && ('A' in tempLetters)){
            randomLetters[count] = 'A';
            count++;
            delete tempLetters.A;
        }else if(randomNumber >= 1/8 && randomNumber < 2/8 && ('B' in tempLetters)){
            randomLetters[count] = 'B';
            count++;
            delete tempLetters.B;
        }else if(randomNumber >= 2/8 && randomNumber < 3/8 && ('C' in tempLetters)){
            randomLetters[count] = 'C';
            count++;
            delete tempLetters.C;
        }else if(randomNumber >= 3/8 && randomNumber < 4/8 && ('D' in tempLetters)){
            randomLetters[count] = 'D';
            count++;
            delete tempLetters.D;
        }else if(randomNumber >= 4/8 && randomNumber < 5/8 && ('E' in tempLetters)){
            randomLetters[count] = 'E';
            count++;
            delete tempLetters.E;
        }else if(randomNumber >= 5/8 && randomNumber < 6/8 && ('F' in tempLetters)){
            randomLetters[count] = 'F';
            count++;
            delete tempLetters.F;
        }else if(randomNumber >= 6/8 && randomNumber < 7/8 && ('G' in tempLetters)){
            randomLetters[count] = 'G';
            count++;
            delete tempLetters.G;
        }else if(randomNumber >= 7/8 && randomNumber < 8/8 && ('H' in tempLetters)){
            randomLetters[count] = 'H';
            count++;
            delete tempLetters.H;
        }
    }
    return randomLetters;
}

function getLetterArray(){
    let firstArray = randomPlacement();
    let secondArray = randomPlacement();
    let newLetterArray = [];


    for(let i=0; i<firstArray.length; i++){
        newLetterArray.push(firstArray[i]) 
    }
    for(let i=0; i<secondArray.length; i++){
        newLetterArray.push(secondArray[i]) 
    }
    return newLetterArray;
}


let randomLetters = getLetterArray();

let a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;
let ar = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p]
let link = 0;
let count = 0;
let counter = 0;
let prevLetter = '';
let x=0;
let allCards = 0;

function onTheClick(x){
        counter++
        if(count === 0){
            ar[x].innerHTML = randomLetters[x]; 
            prevLetter = randomLetters[x];
            link = x;
            count++;
        }else if(count==1 && prevLetter===randomLetters[x]){
            ar[x].innerHTML = randomLetters[x]; 
            count = 0;
            allCards++;
            console.log('allCard = ',allCards);
            
        }else if(count==1){
            ar[x].innerHTML = randomLetters[x];
            setTimeout(() => {
                ar[x].innerHTML = '';
                ar[link].innerHTML = '';
              }, 1000)
    
            count = 0;
        }
        if(allCards===8){
            document.getElementsByTagName('p')[0].innerHTML = "Congratulations! you've won the game.";
        }
    
}


    
ar[0] = document.getElementById('card-grid').firstElementChild;
ar[0].onclick = () => {
    if(counter!=2){
        onTheClick(0);
    }
    else{
        counter = 0;
    }
}

ar[1] = ar[0].nextElementSibling;
ar[1].onclick = () => {
    if(counter!=2){
        onTheClick(1);
    }
    else{
        counter = 0;
    }
}

ar[2] = ar[1].nextElementSibling;
ar[2].onclick = () => {
    if(counter!=2){
        onTheClick(2);
    }
    else{
        counter = 0;
    }
}

ar[3] = ar[2].nextElementSibling;
ar[3].onclick = () => {
    if(counter!=2){
        onTheClick(3);
    }
    else{
        counter = 0;
    }
}

ar[4] = ar[3].nextElementSibling;
ar[4].onclick = () => {
    if(counter!=2){
        onTheClick(4);
    }
    else{
        counter = 0;
    }
}

ar[5] = ar[4].nextElementSibling;
ar[5].onclick = () => {
    if(counter!=2){
        onTheClick(5);
    }
    else{
        counter = 0;
    }
}

ar[6] = ar[5].nextElementSibling;
ar[6].onclick = () => {
    if(counter!=2){
        onTheClick(6);
    }
    else{
        counter = 0;
    }
}

ar[7] = ar[6].nextElementSibling;
ar[7].onclick = () => {
    if(counter!=2){
        onTheClick(7);
    }
    else{
        counter = 0;
    }
}

ar[8] = ar[7].nextElementSibling;
ar[8].onclick = () => {
    if(counter!=2){
        onTheClick(8);
    }
    else{
        counter = 0;
    }
}

ar[9] = ar[8].nextElementSibling;
ar[9].onclick = () => {
    if(counter!=2){
        onTheClick(9);
    }
    else{
        counter = 0;
    }
}

ar[10] = ar[9].nextElementSibling;
ar[10].onclick = () => {
    if(counter!=2){
        onTheClick(10);
    }
    else{
        counter = 0;
    }
}

ar[11] = ar[10].nextElementSibling;
ar[11].onclick = () => {
    if(counter!=2){
        onTheClick(11);
    }
    else{
        counter = 0;
    }
}

ar[12] = ar[11].nextElementSibling;
ar[12].onclick = () => {
    if(counter!=2){
        onTheClick(12);
    }
    else{
        counter = 0;
    }
}

ar[13] = ar[12].nextElementSibling;
ar[13].onclick = () => {
    if(counter!=2){
        onTheClick(13);
    }
    else{
        counter = 0;
    }
}

ar[14] = ar[13].nextElementSibling;
ar[14].onclick = () => {
    if(counter!=2){
        onTheClick(14);
    }
    else{
        counter = 0;
    }
}

ar[15] = ar[14].nextElementSibling;
ar[15].onclick = () => {
    if(counter!=2){
        onTheClick(15);
    }
    else{
        counter = 0;
    }
}