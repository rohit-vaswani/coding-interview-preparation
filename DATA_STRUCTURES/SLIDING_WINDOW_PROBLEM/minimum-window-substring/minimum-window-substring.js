
const s = "ADOBECODEBANC", t = "ABC";
const s = "a", t = "aa"

const isWordPresent = (targetSource, t) => [...t].every(char => targetSource.includes(char))

const findMinWindow = (s, t) => {


    let i = 0, j = i
    let targetAns = undefined
    const length = s.length

    while(true) {

        const targetSource = s.slice(i, j + 1)
        const isPresent = isWordPresent(targetSource, t)

        if(j === length - 1 && i === length - 1) {
            return targetAns ?? ''
        }

        // Base condition
        if(!isPresent && j === length - 1) {
            return targetAns ?? ''
        }

        // Shrink the window
        if(isPresent) {
            targetAns = targetAns === undefined ? targetSource : targetSource.length < targetAns.length ? targetSource : targetAns
            i++
            continue
        }




        // Expand the window
        j = Math.min(++j, s.length - 1)
    }

}

const ans = findMinWindow(s, t)
console.log(ans)