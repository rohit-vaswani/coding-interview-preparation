
/*
        Source: https://bigfrontend.dev/problem/interpolation (149_BFE)
        Solution link: https://bigfrontend.dev/problem/interpolation/discuss/2455
        Difficulty:TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_LEARNING: a)
        TODO_REMEMBER:
            a) replaceAll takes second argument as replacer function too.
        TODO_SOLUTION:
            a) Not solved completely
*/


const fn = (str, data = {}) => {
    return Object.keys(data).reduce((outputStr, key) => outputStr.replaceAll(`{{${key}}}`, data[key] || ''), str)
}

console.log(fn('BFE.dev is {{{evaluation}', {evaluation: 'fantastic'}))
console.log(fn('BFE.dev is {{{evaluation}}}', {'{evaluation': 'fantastic'}))
console.log(fn('BFE.dev is {{evalu ation}}', {'evalu ation': 'fantastic'}))
console.log(fn('BFE.dev is {{evaluation}}'))
