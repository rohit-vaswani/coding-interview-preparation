/*
    Source: https://docs.google.com/document/d/1vS3Pq866YBwmCdAp-YVwVUXaUuBBeUmJB5Ks0BV8JdU/edit#
    Type: 2nd set interview question

*/



const folderStructure = [//TODO_LEARNING: For recursive, we should be able to define the recurring problem/solution. Hence, the schema is kept consistent
    {
        "name": "File 1",
        "children":[
            {
                'name': 'File 3'
            },
            {
                'name': 'File 4',
                'children': [
                    {
                        'name':'File 6',
                        'children': [
                            {
                                'name':'File 7'
                            }
                        ]
                    }
                ]
            },
            {
                'name': 'File 5'
            }
        ]
    },
    {
        "name": "Sorted Search"
    },
    {
        "name": "Heap Search"
    },
    {
        "name": "Binary Search"
    }
    
]

function print(name , level){
    console.log( new Array(level).fill('  ').join('') + ' - ' + name );//TODO_LEARNING: We have used fill
}

const drawFolderStructure = (folderArray = [] , level) => {

    folderArray.forEach( ({ name , children }) => {
        print(name , level);
        drawFolderStructure(children , level+1);
    })

}


drawFolderStructure( folderStructure , 0 );//TODO_LEARNING: This is how we should invoke recursive