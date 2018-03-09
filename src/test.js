function test(){
    var array = [1, 5, 2, 3, 4, 10];
    //var array = [undefined];
    var min;
    var result = 0, tmpResult = 1;
    var tmp1 = [];
    var length = array.length;
    var nextNumber = 0;
    var tmpNext;

    //while(length != 0){
    //    min = Math.min.apply(null, array);
    //    array.splice(array.indexOf(min), 1);
    //    nextNumber = min + 1;
    //    if(array.indexOf(nextNumber) != -1){
    //        array.splice(array.indexOf(nextNumber), 1);
    //        tmpResult += 2;
    //    }
    //    else{
    //        tmpResult = 0;
    //    }
    //    if(tmpResult > result){
    //        result = tmpResult;
    //    } 
    //
    //    length = array.length;
    //}
    
    min = Math.min.apply(null, array);
    while(length != 0){
        tmpNext = min + 1;
        if(array.indexOf(tmpNext) == -1 && length != 1){
            min = Math.min.apply(null, array);
            tmpResult = 0;
        }
        else{
            array.splice(array.indexOf(min), 1);
            tmpResult++;
        }

        if(tmpResult > result){
            result = tmpResult;
        }

        length = array.length;
    }

    console.log(result);
}

function deleteElement(array, tmpArray){
    var length = tmpArray.length;
    for(var i = 0; i < length; i++){
        var index = array.indexOf(tmpArray[i]);
        delete array[index];
    }
}

test();