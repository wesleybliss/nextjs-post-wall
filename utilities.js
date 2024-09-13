
export const request = async (endpoint, method = 'GET', data) => {
    
    const opts = {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    
    if (data)
        opts.body = JSON.stringify(data)
    
    return await fetch(`/api/${endpoint}`, opts)
    
}
    