function randomize(){
    let count = 0;
    let list = [];
    let randomNumber = 0;

    let tempArray = ['A','B','C','D','E','F','G','H','A','B','C','D','E','F','G','H']
       
    while(count<16){
        randomNumber = Math.random();
        if(randomNumber >= 0 && randomNumber < 1/8 && (tempArray.includes('A'))){
            list.push('A');
            count++;
            delete tempArray[tempArray.indexOf('A')];
        }else if(randomNumber >= 1/8 && randomNumber < 2/8 && (tempArray.includes('B'))){
            list.push('B');
            count++;
            delete tempArray[tempArray.indexOf('B')];
        }else if(randomNumber >= 2/8 && randomNumber < 3/8 && (tempArray.includes('C'))){
            list.push('C');
            count++;
            delete tempArray[tempArray.indexOf('C')];
        }else if(randomNumber >= 3/8 && randomNumber < 4/8 && (tempArray.includes('D'))){
            list.push('D');
            count++;
            delete tempArray[tempArray.indexOf('D')];
        }else if(randomNumber >= 4/8 && randomNumber < 5/8 && (tempArray.includes('E'))){
            list.push('E');
            count++;
            delete tempArray[tempArray.indexOf('E')];
        }else if(randomNumber >= 5/8 && randomNumber < 6/8 && (tempArray.includes('F'))){
            list.push('F');
            count++;
            delete tempArray[tempArray.indexOf('F')];
        }else if(randomNumber >= 6/8 && randomNumber < 7/8 && (tempArray.includes('G'))){
            list.push('G');
            count++;
            delete tempArray[tempArray.indexOf('G')];
        }else if(randomNumber >= 7/8 && randomNumber < 8/8 && (tempArray.includes('H'))){
            list.push('H');
            count++;
            delete tempArray[tempArray.indexOf('H')];
        }
    }
    return list;

}


let list = randomize();

let a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;
let ar = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p]
let count = 0;
let link = 0;
let counter = 0;
let prevLetter = '';
let x=0;
let allCards = 0;

function onTheClick(x){
    counter++
    if(count === 0){
        ar[x].innerHTML = list[x]; 
        prevLetter = list[x];
        link = x;
        count++;
    }else if(count==1 && prevLetter===list[x]){
        ar[x].innerHTML = list[x]; 
        count = 0;
        allCards++;
        console.log('allCard = ',allCards);
        
    }else if(count==1){
        ar[x].innerHTML = list[x];
        setTimeout(() => {
            ar[x].innerHTML = '';
            ar[link].innerHTML = '';
            }, 1000)

        count = 0;
    }
    if(allCards===8){
        document.getElementsByTagName('p')[0].innerHTML = "Congratulations! you've won the game";
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


document.getElementById('first-button').onclick = function() {
    alert("To play:\n1. Click on a block Once to see a Letter\n2. Click on another block to see a second Letter\n3. Try to find a match for each Letter")
}