

/*


  Source: https://docs.google.com/document/d/1v9W9e9ulotmiuEru5jFjDCuTUoMU0tRyKKT08UDPXYQ/edit?usp=sharing
  Asked in: TODO_CO_UBER
  Type: Dynamic programming | Recursion

  Length: 4
    11
      > 1111
      > 1691
      > 1961
      > 1881
     69
      > 6119
      > 6699
  
  Length: 3
    101
*/


const findMirrorElements = (key = '', size, outputArr = []) => {



    const currentKeyLength = key.length
    const requiredKeyLength = size
  
  
    const evenKeys = (requiredKeyLength - currentKeyLength) >= 2
  
    if (requiredKeyLength === currentKeyLength) {
      outputArr.push(key)
      return
    }
  
    if (evenKeys) {
      for (let [tKey, tReverseKey] of Object.entries(evenMirrorMap)) {
        const firstPart = key.slice(0, Math.floor(currentKeyLength / 2))
        const restPart = key.slice(-Math.floor(currentKeyLength / 2))
        findMirrorElements(`${firstPart}${tKey}${tReverseKey}${restPart}`, size, outputArr)
      }
    } else {
      oddMirrors.forEach((char) => {
        const firstPart = key.slice(0, Math.floor(currentKeyLength / 2))
        const restPart = key.slice(-Math.floor(currentKeyLength / 2))
        findMirrorElements(`${firstPart}${char}${restPart}`, size, outputArr)
      })
    }
  
    return outputArr
  
  }
  
  const evenMirrorMap = {
    1: 1,
    6: 9,
    9: 6,
    8: 8,
    0: 0
  }
  
  const oddMirrors = [0, 1, 8]
  
  const answer1 = findMirrorElements('', 4, [])
  console.log(answer1)
  const answer2 = findMirrorElements('', 3, [])
  console.log(answer2)