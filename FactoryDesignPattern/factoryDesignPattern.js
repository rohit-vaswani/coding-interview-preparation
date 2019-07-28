
const vehicleTypeEnum = {
    CAR: 'CAR',
    TRUCK: 'TRUCK'
}


var vehicleFactory = (function(){

    let vehicleType = {};

    const registerVehicle = (type , vehicle) => {
        vehicleType[type] =  vehicle;
    }

    const getVehicle = (_type) => {
        return new vehicleType[_type];
    }

    return{
        registerVehicle,
        getVehicle
    }

}());

//Constructor function of the Car
function Car(){

}

function Truck(){

}

vehicleFactory.registerVehicle(  vehicleTypeEnum.CAR , Car );
vehicleFactory.registerVehicle(  vehicleTypeEnum.TRUCK , Truck );

const carInstance = vehicleFactory.getVehicle(vehicleTypeEnum.CAR);
const truckInstance = vehicleFactory.getVehicle(vehicleTypeEnum.TRUCK);