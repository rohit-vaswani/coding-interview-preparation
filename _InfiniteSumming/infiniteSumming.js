function Sum(val , ...args){//TODO_TAKEAWAY: The name of a constructor function should begin with the caps

    this.val = val || 0;
    return (...fnArgs) => {
        return this._sum.apply(this , args.concat(fnArgs));//TODO_TAKEAWAY: This needs to be optomized
    }

}

Sum.prototype._sum = function(...args){
    this.val += args.reduce( (acc , val) => acc+val , 0 );
    console.log(this.val);
    // return this._sum.bind(this);//TODO_TAKEAWAY: Approach 1
    return new Sum(this.val);//TODO_TAKEAWAY: Approach 2
}


new Sum(1,2)(3)(4);


