/*

    Source: https://www.interviewbit.com/problems/gas-station/
    Asked in: TODO_CO_Google
    Time complexity: )(n^2)
    Solution: https://www.geeksforgeeks.org/find-a-tour-that-visits-all-stations/

*/


function getMinGasStationIndex(gasFills , cost){

    let i;
    let len = gasFills.length;
    let startIndex , doesCompleteCircuit;

    for(i = 0; i < len; i++){

        startIndex = i;
        doesCompleteCircuit = canTravel(startIndex , gasFills , cost );//TODO_TAKEAWAY: Always think about your implementation as asbtraction first.
        if(doesCompleteCircuit){break};

    }

    return doesCompleteCircuit ? startIndex : -1;


}

function canTravel(startIndex , gasFills , cost ){

    let 
        costIncur = 0,
        gasAvailable = 0,
        gasFilled = 0,
        iterator = startIndex,
        costLength = cost.length,
        canBeTravelled = true,//TODO_TAKEAWAY: make a hypothesis and then prove it wrong.
        times = 0;
    

    while( canBeTravelled && times <= costLength){//TODO_TAKEAWAY: The condition has to be readable and understandable. Be realistic.

        gasFilled = gasFills[iterator];
        costIncur = cost[iterator];
        gasAvailable = gasAvailable + gasFilled - costIncur;

        if(gasAvailable<0){
            canBeTravelled = false;
        };
        
        iterator = (iterator++)%costLength;
        times++;

    }

    return canBeTravelled;

}

const gasFills = [1, 1 , 7 , 5];
const cost = [4, 3 , 5 , 4];
const output = getMinGasStationIndex(gasFills , cost);
console.log( 'Output : ' , output );