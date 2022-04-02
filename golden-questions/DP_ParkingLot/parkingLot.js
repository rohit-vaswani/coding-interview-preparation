/*

    Source:
    TODO_PENDING: This is not solved completely
    Approach: a) Stack for each vehicle type b) HashMap for Faster lookups.

*/

/*
        Source: https://www.youtube.com/watch?v=DSGsa0pu8-k
        Solution link: ?
        Difficulty: TODO_DI_HARD
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            A) SEEK CLARIFICATION OF THE QUESTION. Communicate the Assumptions
                a) Is this a multi-level parking?
                b) Does each level has different parking?
                c) Can it accommodates all types of the vehicles?
                d) Can I assume that vehicles will be of 4 type: S, M, L, XL.
                e) Do we have different price points for different slot size
                f) Can a vehicle of size M can be accommodated on the M & beyond.
                g) Can I assume that floors will be searched in the ascending order by default
            B) Discuss Approach/Solution/Methodology
                a) Three entities: a) Vehicle b) ParkingLot c) SlotManager d) VehicleManager
                b) Discuss about the data model
                c) With comments, discuss about the input & output of each function.
        TODO_TAKEAWAY:
            a) Always break down the problem basis entity types with each representing a class
            b) Driver class (ParkingLot) should maintain a registry to query the classes
            c) The API should be clear, logical & minimum
            d) SlotManager -> i) findSlot(slotSize) ii) reserveSlot(slotId) iii) reclaimSlot(slotId) iv) isSlotAvailable(slotId)
            e) VehicleManager -> i) addVehicle(vehicle) ii) removeVehicle(plateNo) iii) getVehicle(plateNo)
            f) ParkingLot -> i) parkVehicle(vehicle) ii) removeVehicle(plateNo) iii) getVehicleSlotDetails() iv) isVehicleParked(plateNo) v) getVehicleParkingDetails()
            g) PriceDetails -> i) getPrice(floorNo, slotType, entryTime, hours) ii)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
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



// ----- SOLUTION 2 ------



class ParkingLotManager {


    constructor() {
        this.vehicle = new VehicleManager()
        this.slots = new SlotManager()
        this.vehicleSlotsRegistry = new Map()
    }


    parkVehicle(vehicle) {

        const slotNo = this.slots.getTargetSlot(vehicle.vehicleType)
        this.slots.reserveSlot(slotNo)
        this.vehicle.addVehicle(vehicle)
        this.vehicleSlotsRegistry.set(vehicle.plateNo, slotNo)

    }


    removeVehicle(plateNo) {
        this.slots.reclaimSlot(this.vehicleSlotsRegistry.get(plateNo))
        this.vehicleSlotsRegistry.delete(plateNo)
        this.vehicle.removeVehicle(plateNo)
    }

}


class SlotManager {


    constructor() {
        this.slotDetails = new Array(4).fill({})
    }

    getTargetSlot(slotSize) {

    }


    createFloorSlotDetails() {
        const map = new Map()
    }

    reserveSlot(slotId) {
        const [floorNo, rowNo, colNo] = [...slotId]
        this.slotDetails[floorNo][rowNo] = this.slotDetails[floorNo][rowNo] || {}
        this.slotDetails[floorNo][rowNo][colNo] = 1
    }


    reclaimSlot(slotId) {
        const [floorNo, rowNo, colNo] = [...slotId]
        this.slotDetails[floorNo][rowNo] = this.slotDetails[floorNo][rowNo] || {}
        delete this.slotDetails[floorNo][rowNo][colNo]
    }

    _findSlot(slotSize) {
        for(let [floorNo, floorMap] of Object.entries(this.slotDetails)) {
            for(let [slotSize, slotMap] of Object.entries(floorMap)) {
                for(let [rowIndex, rowMap] of Object.entries(slotMap)) {
                    for (let [colIndex, isAvailable] of Object.entries(rowMap)) {
                        if(this.slotDetails[floorNo][slotSize][rowIndex][colIndex] !== -1) {
                            return [floorNo, slotSize, rowIndex, colIndex].join('_')
                        }
                    }
                }
            }
        }





    }

}

class VehicleManager {


    constructor() {
        this.vehicleDetails = new Map()
    }

    addVehicle(vehicle) {
        this.vehicleDetails.set(vehicle.plateNo, vehicle)
    }

    removeVehicle() {

    }


    getVehicle(plateNo){
        return this.vehicleDetails.get(plateNo)
    }
}


class Vehicle {

    constructor(plateNo) {
        this.plateNo = plateNo
    }
}


class Truck extends Vehicle{


    constructor() {
        super();
        this.vehicleType = 'XL'
    }
}

class Car {

}

class Bike {

}

class SUV {

}