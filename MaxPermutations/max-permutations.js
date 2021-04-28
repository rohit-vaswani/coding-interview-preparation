const findMaxPermutations = (no) => {
  
    if(no === 0)  {
      return 1
    }
    
    else if(no < 0) { 
      return 0
    }
    
    return findMaxPermutations(no - 1) + findMaxPermutations(no - 2)
    
  }
  
  
  const number = 4
  console.log(findMaxPermutations(number))