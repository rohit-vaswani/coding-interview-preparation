/*
        Source: https://bigfrontend.dev/problem/semver-compare (157_BFE)
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        Solution explained: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_TAKEAWAY:
            a) break, continue and return does not really work in forEach and reduce statement.
*/


/*

    @params {string} sem1
    @params {string} sem2

 */


const compare = (sem1 = '', sem2 = '') => {

    const sem1Arr = sem1.split('.')
    const sem2Arr = sem2.split('.')

    for (let i = 0; i < sem1Arr.length; i++) {

        let [ver1, ver2] = [sem1Arr[i], sem2Arr[i]].map(val => parseInt(val))

        if (ver1 > ver2) {
            return 1
        } else if (ver1 < ver2) {
            return -1
        }

    }

    return 0


}

const ans1 = compare('12.1.0', '12.0.9') // 1
const ans2 = compare('12.1.0', '12.1.2') // -1
const ans3 = compare('5.0.1', '5.0.1') // 0

console.log({
    ans1,
    ans2,
    ans3
})