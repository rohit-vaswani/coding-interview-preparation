


var output = `
    Mumbai2.jpg\n
    Goa1.png\n
    Mumbai1.jpeg\n
    Lavasa2.jpg\n
    Goa2.jpg\n
    Lavasa1.jpg\n
    Lavasa3.png
`

var input =  `
    WindowCover.jpg, Mumbai, 2019-01-03 10:22:39\n
    Cruise.png, Goa, 2019-01-02 10:12:39\n
    Car.jpeg, Mumbai, 2019-01-03 10:00:39\n
    Sea.jpg, Lavasa, 2018-12-03 14:00:39\n
    Hotel.jpg, Goa, 2019-02-03 14:00:39\n
    Helicopter.jpg, Lavasa, 2017-12-03 08:00:39\n
    Aeroplane.png, Lavasa, 2019-03-03 08:00:39
`


var desiredOutput = getSortedImages(input);


function getSortedImages(input){


    let inputArray = cleanInputData(input);
    const imgByRegions = groupByRegion(inputArray);
    const sortedImagesMapByRegion = sortImages(imgByRegions);
    let processedResult = getProcessedResult(inputArray , sortedImagesMapByRegion , imgByRegions);
    processedResult = processedResult.join('\n');
    return processedResult;

}


function cleanInputData(input){
    let inputArray = input.split('\n');
    inputArray = inputArray.filter( inputStr => inputStr.length>0 );
    return inputArray.map ( inputStr => inputStr.trim() );
}

function getProcessedString(inputStr){

    let inputComponents = inputStr.split(',');
    inputComponents = inputComponents.map( function(inputComp){
        return  inputComp.trim();
    });
    const [  imageName = '' , city = '' , timeDetails = ''] = inputComponents || [];
    const imageExtension = imageName.split('.')[1];
    const timeStamp =  new Date(timeDetails).getTime();

    return { imageExtension, city, timeStamp  };

}



function groupByRegion(inputArray){

    return inputArray.reduce ( function(imageByRegions , imageLineDetails ) {

        let normalizedImgDetails = getProcessedString(imageLineDetails) || {};
        normalizedImgDetails.key = imageLineDetails;
        imageByRegions[ normalizedImgDetails.city ] = imageByRegions[ normalizedImgDetails.city ] || {};
        imageByRegions[ normalizedImgDetails.city ][imageLineDetails] = normalizedImgDetails;

        return imageByRegions;

    } , {});

}

function sortImages(imgByRegions = {}){

    const sortedKeysMap = {};
    for(var region in imgByRegions){
        sortedKeysMap[region] = Object.values(imgByRegions[region]).sort( (prevImg , nextImg) => prevImg.timeStamp<nextImg.timeStamp);
    }

    const sortedByRegions = {}
    for(var region in sortedKeysMap){
        sortedKeysMap[region] = sortedKeysMap[region].map( normImgDetails => normImgDetails.key );
    }

    return sortedKeysMap;

}

function getProcessedResult(input , sortedImagesMapByRegion , imgByRegions){

    return input.map( inputKey => {

        const region = (inputKey.split(',')[1]).trim();
        const regionArray = sortedImagesMapByRegion[region];
        const normDetails = imgByRegions[region][inputKey];
        const indexValue = regionArray.indexOf(inputKey);
        const indexPrefix = (indexValue+1);
        return [region , indexPrefix , '.' , normDetails.imageExtension].join('');

    } );    

}