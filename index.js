// Insert code here!!
function myEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
      const element = arr[i]
      callback(element)
    }
  }


function myMap(arr, callback){
    let newArr=[]
    for(let i = 0; i < arr.length; i++){
      const element = arr[i]
      newArr.push(callback(element))
    }
    return newArr
  }

  function myFilter(arr, callback){
    let newArr=[]
    for(let i = 0; i < arr.length; i++){
      const element = arr[i]
      
      if(callback(element)===true){
          newArr.push(element)
      }
    }
    return newArr
  }

  //one way to solve myFind
  function myFind(arr, callback){
    let newArr=[]
    for(let i = 0; i < arr.length; i++){
      const element = arr[i]
      
      if(callback(element)===true){
          newArr.push(element)
      }
    }
    return newArr[0]
  }
// using break 
function myFind(arr, callback){
    for(let i = 0; i < arr.length; i++){
      const element = arr[i]
      
      if(callback(element)===true){
         return element
          break ;
      } 
    }
  }

 function sum(elem,aggV){
     return elem+aggV
 }
 
  function myReduce(arr, callback,aggV=0){
    
    for(let i = 0; i < arr.length; i++){
      const element = arr[i]
      aggV += callback(element,aggV)
    }
  }