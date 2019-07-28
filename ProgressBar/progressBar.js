class ProgressBar{

    constructor(){
        this.pbContainer = '#progress-bar-container';
    }

    _getTemplate(index){
        return (
        `
            <div class=' progress-bar progress-bar-${index}' style='width: 100%;'>
                <div></div>
            </div>
        `);
    }

    addProgressBar(index){
        this._addToDom(index);
    }

    _addToDom(index){
        let template = this._getTemplate(index);
        $(this.pbContainer).append(template);
    }

    startProgress(){

    }
}

class Queue{

    constructor(){
        this.size = 0;
        this.arr = [];
    }

    enqueue(elem){
        this.size++;
        this.arr.push(elem);
    }

    deQueue(){
        this.size--;
        return !this.isEmpty() && this.arr.unshift();
    }

    isEmpty(){
        return !this.size;
    }
}


class ProgressBarManager{


    constructor(){
        this.queue = new Queue();
        this.isProgressRunning = false;
    }

    addProgressBar(){
        const progressBar = new ProgressBar();
        this.queue.enqueue(progressBar);
        let {size : index} = this.queue;
        progressBar.addProgressBar(index);     
        return this._onStateChange();
    }

    _onStateChange(){

        if(this.queue.isEmpty()){return false};
        if(this.isProgressRunning){return false};
        let firstProgressBar = this.queue.deQueue();
        this.isProgressRunning = true;
        return firstProgressBar.startProgress()
            .then(function(){
                this.isProgressRunning = false;
                return _onStateChange();
            });
    }

}

const pbManager = new ProgressBarManager();
pbManager.addProgressBar();
pbManager.addProgressBar();
pbManager.addProgressBar();