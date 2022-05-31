/*
        Source: https://bigfrontend.dev/problem/highlight-keywords-in-HTML-string
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: YES
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Understand the problem better by identifying the steps to take and utility function to use
            b) Understand the problem better by writing the output against each other
            c) Do not jump to the solution unless you can visualise it.
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) Split the string into array
            b) Process each word, decide whether to highlight this or not.
            c) Join them with ' '
*/



const shouldHighlight = (word, highlightWords) => {

    if(highlightWords.includes(word)) {
        return true
    }

    highlightWords.forEach(hiWord => {
        const len = hiWord.length
        const index = word.indexOf(hiWord)
        word = index >= 0 ? [...word.slice(0, index), [...new Array(len).fill('$')].join(''), ...word.slice(index + len)].join('') : word // TODO_REMEMBER: TO manipulate the word/Arr
    })

    return [...word].every(letter => letter === '$') || word.length === 0

}


const highlightKeywords = (htmlStr, highlightWords) => {


    // Split them into array
    const htmlArr = htmlStr.split(' ')

    // Map and understand if you need to wrap
    const highlightedArr = htmlArr.map(htmlWord => {
        const isHighlight = shouldHighlight(htmlWord, highlightWords)
        return isHighlight ? `<em>${htmlWord}</em>` : htmlWord
    })

    // Return the array
    return highlightedArr.join(' ')


}

const ans1 = highlightKeywords(
    'Hello FrontEnd Lovers',
    ['Front', 'End', 'JavaScript']
)

console.log(ans1) // 'Hello <em>FrontEnd</em> Lovers'

const ans2 = highlightKeywords(
    'Hello FrontEnd Lovers',
    ['Front', 'FrontEnd', 'JavaScript']
)

console.log(ans2) // Hello <em>FrontEnd</em> Lovers