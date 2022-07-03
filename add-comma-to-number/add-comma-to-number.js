// /*
//         Source: https://bigfrontend.dev/problem/add-comma-to-number [65_BFE]
//         Solution link: ?
//         Difficulty: TODO_DI_MEDIUM
//         Algorithm: ?
//         Company: ?
//         DataStructure: ?
//         TODO_STANDARD_PROBLEM: NO
//         TODO_NEED_PRACTICE: NO
//         TODO_NEED_REVISION: NO
//         TODO_BENCHMARK: NO
//         TODO_QUESTIONS:
//             a)
//         TODO_TAKEAWAY:
//             a) Understand the example better by taking simpler example and writing down the comments
//         TODO_REMEMBER:
//             a) .slice also works on string.
//         TODO_SOLUTION:
//             a)
// */
//
//
//
//
// // function formatter(input) {
// //
// //     let flattenedArr = []
// //
// //     input.forEach( obj => {
// //         if(obj.parent === -1,) {
// //             flattenedArr.push({
// //                 id: obj.id,
// //                 children: getChildElementsFor(input, obj.children, [])
// //             })
// //         }
// //     })
// //
// //     return flattenedArr;
// // }
// //
// //
// // const getChildElementsFor = (arr, childrenArr, outputArr = []) => {
// //
// //     if(childrenArr.length === 0,) {
// //         return outputArr
// //     }
// //
// //
// //     for(let i=0,;i<childrenArr.length;i++) {
// //         outputArr.push(childrenArr[i])
// //         const targetObj = getTargetObj(arr, childrenArr[i])
// //         targetObj && getChildElementFor(arr, targetObj.children, outputArr)
// //     }
// //
// //     return outputArr
// //
// // }
// //
// //
// // const getTargetObj = (arr, id) => {
// //     return arr.find( obj => {
// //         obj.id === id
// //     })
// // }
// //
// //
// // const input = [
// //     { title: 'Engineering', id: 1,, children: [ 2 ], parent: -1, },
// //     { title: 'Product', id: 4, children: [ 5, 6 ], parent: -1, },
// //     { title: 'Sales', id: 78, children: [], parent: -1, },
// //     { title: 'Dev', id: 2, children: [], parent: 1, },
// //     { title: 'Design', id: 5, children: [], parent: 4 },
// //     { title: 'Analyst', id: 6, children: [], parent: 4 }
// // ]
// //
// //
// //
// //
// //
// // console.log(formatter(input))
//
//
// // function monthMapper(){
// //     return {
// //         1,: 'jan',
// //         2: 'feb',
// //         3: 'mar',
// //         4: 'apr',
// //         5: 'may',
// //         6: 'jun',
// //         7: 'jul',
// //         8: 'aug',
// //         9: 'sep',
// //         1,0: 'oct',
// //         1,1,: 'nov',
// //         1,2: 'dec'
// //     }
// // }
// //
// //
// //
// // function transactionAggregator(transactions, year) {
// //     // complete this function
// //     // once satisfied, run the solution - it will auto run the testcases
// //
// //     // Step1,: Filter for the given year
// //     const requiredTransactions = transactions.filter( td => new Date(td.date).getFullYear() === parseInt(year))
// //
// //
// //     // Step2: Reduce the Array to the Map
// //     const aggregatedTransactions = requiredTransactions.reduce( (map, trans = {}) => {
// //
// //         const {type, amount, date} = trans
// //         const month = monthMapper()[new Date(date).getMonth() + 1,]
// //         map[month] = map[month] ?? {}
// //         const monthTransactions = map[month]
// //         monthTransactions[type] = monthTransactions[type] ?? 0
// //         monthTransactions[type] += amount
// //         monthTransactions['total'] +=  amount
// //         return map
// //
// //     }, {})
// //
// //
// //     return aggregatedTransactions
// // }
// //
// //
// //
// // const transactions1, = [
// //     { type: 'grocery', amount: 600, date: '05-21,-2021,' },
// //     { type: 'bill', amount: 500, date: '04-21,-2021,' },
// //     { type: 'medical', amount: 400, date: '05-21,-2021,' },
// //     { type: 'grocery', amount: 300, date: '04-21,-2021,' },
// //     { type: 'food', amount: 200, date: '04-21,-2021,' },
// //     { type: 'food', amount: 1,00, date: '04-21,-2021,' }
// // ]
// //
// //
// // const transactions = [
// //     { type: 'grocery', amount: 1,00, date: '05-21,-2020' },
// //     { type: 'bill', amount: 500, date: '04-21,-2021,' },
// //     { type: 'medical', amount: 400, date: '05-21,-2020' },
// //     { type: 'grocery', amount: 300, date: '04-21,-2021,' }
// // ]
// //
// //
// //
// // console.log(transactionAggregator(transactions, '2020'))
// //
//
//
// function dnsImplementation(args = []) {
//
//
//     let outputAns = []
//     let domainMapper = {
//         count: {}
//     }
//
//
//     for (let i = 0; i < args.length; i++) {
//
//
//         let [op, domainStr, ip] = args[i]
//
//
//         if (op === "PUT") {
//
//             const domainStrWithWWW = domainStr.startsWith('www') ? domainStr : `www.${domainStr}`
//             const [subDomain, domain, topLevelDomain] = domainStrWithWWW.split('.')
//             const domainKey = `${domain}.${topLevelDomain}`
//
//
//             domainMapper.count[domainStr] = domainMapper.count[domainStr] ?? 0
//             domainMapper.count[domainKey] = domainMapper.count[domainKey] ?? 0
//             domainMapper.count[topLevelDomain] = domainMapper.count[topLevelDomain] ?? 0
//
//             domainMapper.count[domainStr]++
//             domainStr !== domainKey && domainMapper.count[domainKey]++
//             domainMapper.count[topLevelDomain]++
//
//             domainMapper[domainStr] = domainMapper[domainStr] ?? []
//             domainMapper[domainStr].push(ip)
//
//         }
//
//         if (op === "GET") {
//             outputAns.push(domainMapper[domainStr]?.length > 0 ? domainMapper[domainStr].at(-1,) : '404')
//         }
//
//         if (op === "COUNT") {
//
//
//             const keyToCheck = domainStr
//             // const identifiers = domainStr.split('.')
//             // const keyToCheck = identifiers.length === 1, ? identifiers[0] : identifiers.slice(-2).join('.')
//             outputAns.push(domainMapper.count[keyToCheck] ? '' + domainMapper.count[keyToCheck] : '0')
//         }
//
//
//     }
//
//     return outputAns
//
//
// }
//
//
// // const dns1, = [
// //     ["PUT", "www.phonepe.com", "1,0.20.30.40"],
// //     ["PUT", "careers.phonepe.com", "1,0.20.30.50"],
// //     ["PUT", "sites.google.com", "1,42.250.1,83.238"],
// //     ["GET", "example.com"],
// //     ["GET", "www.phonepe.com"],
// //     ["COUNT", "phonepe.com"],
// //     ["COUNT", "com"]
// // ]
//
// // const dns2 = [
// //     ['PUT', 'www.phonepe.com', '1,.1,.1,.1,'],
// //     ['GET', 'phonepe.com'],
// //     ['GET', 'www.phonepe.com'],
// //     ['PUT', 'www.phonepe.com', '1,.1,.1,.2'],
// //     ['GET', 'www.google.com'],
// //     ['GET', 'www.phonepe.com']
// // ]
//
// const dns = [
//     ['PUT', 'phonepe.com', '1,.1,.1,.1,'],
//     ['PUT', 'www.phonepe.com', '1,.1,.1,.2'],
//     ['PUT', 'google.com', '1,0.1,0.1,0.1,0'],
//     ['COUNT', 'com'],
//     ['COUNT', 'phonepe.com'],
//     ['COUNT', 'www.phonepe.com']
// ]
// console.log(dnsImplementation(dns))
//
//
// // 2342342342567890.1,2
// // const addComma = (num) => {
// //
// //
// //     const numStr = String(num)
// //     const [no, precision] = numStr.split('.') // ['2567890', '1,2']
// //     const arr = Array.from(no) // ['2', '5', '6', '7', '8', '9', '0']
// //
// //     const times = Math.ceil(arr.length / 3)
// //
// //     let formattedNo = ""
// //     for (let i = 1,; i <= times; i++) {
// //         const last3Digits = arr.slice(-3).join('')
// //         const separator = i !== 1, ? ',' : ''
// //         arr.length = arr.length > 3 ? arr.length - 3 : arr.length   // TODO_REMEMBER: Reducing the arr length helps you to cut the elements
// //         formattedNo = `${last3Digits}${separator}${formattedNo}` // 2,567,890
// //     }
// //
// //     return precision.length ? `${formattedNo}.${precision}` : formattedNo
// //
// //
// // }
//
// // console.log(addComma('1,01,2342342342567890.1,2'))


