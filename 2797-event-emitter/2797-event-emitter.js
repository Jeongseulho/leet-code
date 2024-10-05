class EventEmitter {
    constructor() {
        this.event = {};
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if(eventName in this.event) this.event[eventName].push(callback);
        else this.event[eventName] = [callback];

        return {
            unsubscribe: () => {
                this.event[eventName] = this.event[eventName].filter((fnc) => fnc !== callback);
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        return this.event[eventName] ? this.event[eventName].map((fnc) => fnc(...args)) : [];
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */