function arrayGeneration(){
    const arr = [];
    for (i=0;i<=100;i++){
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

function Buttonone(){
    const arr = arrayGeneration();
    for (i=0;i<100;i++){
        if (arr[i]%3==0){
            arr.splice(i,0);
        }
    }
    console.log(arr);
}
function ButtonTwo(){
    const arr = arrayGeneration();
    for (i =0;i<arr.length;i++){
        arr[i] += Math.floor(Math.random() * (150 - 100 + 1)) + 100;
    }
    console.log(arr);
}
function ButtonThree(){
    const arr = arrayGeneration();
    for (i =0;i<arr.length;i++){
        arr[i] += 3;
    }
    console.log(arr);
}
function ButtonFour(){
    const arr = arrayGeneration();
    for (i =20;i<41;i++){
        console.log(arr[i]);
    }
}
function ButtonFive(){
    const arr = arrayGeneration();
    shuffleArray(arr);
    console.log("Shuffled Array")
    console.log(arr);//shuffled
    
    arr.sort((a,b)=>a-b);
    arr.reverse();
    console.log("Sorted in descending order")
    console.log(arr);//Sorted in reverse order 
}