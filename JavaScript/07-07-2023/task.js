let count = 0;
let array = [1 , 20 , 21 , 33 , 11 , 34 , 10 , 19 , 20]

function a (){
    for(i = 1 ; i <= array.length - 1 ; i++){
        if(array[i] < array[i - 1] && array[i] > array[i + 1]){
            count ++;
        }
        else{
            return count;
        }
    }
    console.log(count);
}
a();