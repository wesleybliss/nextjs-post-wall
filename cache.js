
class Cache {
    
    constructor(initialValue) {
        this.data = initialValue || {}
    }
    
    read() {
        return this.data
    }
    
    write(value) {
        this.data = value
    }
    
    update(fn) {
        this.data = fn(this.data)
    }
    
    clear() { 
        this.data = {}
    }
    
}

export default new Cache()
