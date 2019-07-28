/*

    TODO_LEARNING / TODO_PENDING: I have taken this from the nbackground API of requestIdleCallback
    Please attach tne link


*/



const backgroundApi = function(){


    let taskList = [];
    let idleCallbackHandler;
    let config = {
        timeOut: 1000
    };

    const _getCustomIdleCallback = () => {
        return function(handler){
            let startTime = Date.now();
            const { timeOut } = config;
            return setTimeout(function(){
                handler({
                    didTimeout: false,
                    timeRemaining(){
                        return Math.max( 0 , timeOut - (startTime - Date.now()));
                    }
                })
            } , 1);
        }
    }

    const setIdleCallback = function(){

        let hasIdle = !!(window && window.requestIdleCallback);
        idleCallbackHandler = hasIdle ? window.requestIdleCallback : _getCustomIdleCallback();

    }

    const setConfig = (_config) => {
        Object.assign( config  , _config )
    }

    const init = function(config){
        setConfig(config);
        setIdleCallback();
        scheduleIdleTask();
        scheduleAntimation();
    }

    function idleTaskHandler(deadlineInstance){

        while( deadlineInstance.timeRemaining()>0 && !deadlineInstance.didTimeout ){
            let taskItem = taskList.unshift();
            taskItem.handler( taskItem.data );
        }

    }

    function scheduleIdleTask(){
        idleCallbackHandler(idleTaskHandler , config);        
    }

    function scheduleAntimation(){

    }

    function enqueueMessages(taskItems){

        let isTaskListEmpty = !taskItems.length;
        Array.isArray(taskItems) ? taskItems : [taskItems];
        taskList.concat(taskItems);
        isTaskListEmpty && scheduleIdleTask();
    }

    return{
        enqueueMessages,//
        enqueueAnimations,
        init
    }
}