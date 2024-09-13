import { apiKey } from '../../constants'

export default async function postInit(req, res) {
    
    if (!req.method === 'POST')
        return res.status(405).json({ error: 'Method not allowed' })
    
    try {
        
        const { url } = req.body
        
        if (!url || !url.includes(apiKey))
            return res.status(401).json({ error: 'Unauthorized' })
        
        res.json({ success: true })
        
    } catch (e) {
        
        console.error('api/submit error:', e)
        
        return res.status.json({
            error: 'An error occurred while processing the request'
        })
        
    }
    
}
