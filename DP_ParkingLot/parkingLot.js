/*

    Source: https://www.youtube.com/watch?v=DSGsa0pu8-k
    TODO_PENDING: This is not solved completely
    Approach: a) Stack for each vehicle type b) HashMap for Faster lookups.

*/


//This is the interface of the application
class ParkingLot{

    constructor(){

        this.vehicles = new vehicleManager(); //TODO_TAKEAWAY: This is much similar to heartbeat API. A very great separation of concern.
        this.slots = new SlotsManager();
        this.vehicleHashMap = new Map();      //TODO_TAKEAWAY: To improve the lookup as O(1) and act as joining the two tables.        

    }

    placeVehicle(vehicle = {}){
        
        const { plateNo , type: vehicleType } = vehicle;

        const slotDetail = this.slots.addVehicleToSlot(vehicleType , plateNo);
        this.vehicles.addVehicle( vehicle );
        this.vehicleHashMap.set( plateNo , slotDetail.id );
        
    }

    removeVehicle(vehiclePlateNo){
        const slotId = this.vehicleHashMap.get(vehiclePlateNo);
        this.slots.reclaimSlot( slotId );
        this.vehicle.removeVehicle( vehiclePlateNo );
    }

}

//TODO_TAKEAWAY: This is an abstract design pattern
const vehicleFactory = () => {

    //TODO_TAKEAWAY: This should be a ENUM rather
    let vehicles = {
        'TRUCK': Truck,
        'CAR': Car
    }

    let registerVehicle = () => {

    }

    let getVehicleInstance = (vehicleDetail) => {
        const { type } = vehicleDetail;
        return new vehicles[type](vehicleDetail);
    }

    return {
        registerVehicle,
        getVehicleInstance
    }

}

class vehicleManager{

    constructor(){
        this.vehicleDetailsMap = new Map();
    }

    addVehicle(vehicleDetail){
        const { plateNo  } = vehicleDetail;
        const vehicleInstance = new vehicleFactory.getVehicleInstance(vehicleDetail);
        this.vehicleDetailsMap.set(plateNo , vehicleInstance);
    }

    removeVehicle(vehiclePlateNo){
        this.vehicleDetailsMap.delete( vehiclePlateNo );
    }

}

class Vehicle{

}

class Truck{

}

class Car{

}


const slotTypeEnum = {
    'S': 'SMALL',
    'M': 'MEDIUM',
    'L': 'LARGE',
    'XL': 'XTRA_LARGE'
}

const getSlots = limit => [...new Array(limit)].map( (val , i) => i);

class SlotsManager{

    constructor(){
        this.availableSlots = {
            [slotTypeEnum.S]: getSlots(3),
            [slotTypeEnum.M]: getSlots(3),
            [slotTypeEnum.L]: getSlots(3),
            [slotTypeEnum.XL]: getSlots(3),
        };
    }

    addVehicleToSlot(vehicleType){

        const slotKey = this._getTargetSlot(vehicleType);
        return vehicleType + '_' + this.availableSlots[slotKey].pop();

    }

    reclaimSlot(){
        const [ vehicleType , slotNo ] = this.availableSlots[slotKey].split('_');
        this.availableSlots[vehicleType].push(slotNo);
    }

    _getBaseSlotIndex(vehicleType){

        const slotKeys = Object.keys(this.availableSlots);
        const eligibleBaseIndex  = slotKeys.findIndex( slotType => slotType === vehicleType );
        return eligibleBaseIndex ? slotKeys.slice(eligibleBaseIndex) : -1;

    }

    _getTargetSlot(vehicleType){
        const baseSlotIndex = this._getBaseSlotIndex(vehicleType); //1 for M
        let slotValues;
        if(baseSlotIndex === -1){return ''};
        return Object.keys(this.availableSlots).slice(baseSlotIndex).find( slotKey => {
            slotValues = this.availableSlots[slotKey] || [];
            return slotValues.length;
        } )
    }

}


/*
    Schema representation:

    vehicle = {
        MH02-3867: {
            type: 'S',
            plateNo: 'MH02-3867
        }
    }

    slots = {
        S: [0,1,2],
        M: [0,1,2],
        L: [0,1,2],
        XL: [0,1,2]
    }

    slotManager = {
        S_0: 'MH02-3867'
    }

*/