
export const getApiKey = () => {
    
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)

    for (const [key, value] of params.entries()) {
        return key
    }
    
}

export const request = async (endpoint, method = 'GET', data) => {
    
    const apiKey = getApiKey()
    
    const opts = {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
    }
    
    if (data)
        opts.body = JSON.stringify(data)
    
    return await fetch(`/api/${endpoint}`, opts)
    
}
    