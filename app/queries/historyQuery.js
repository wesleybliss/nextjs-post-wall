import { useQuery } from '@tanstack/react-query'
import { request } from '../../utilities'

const useHistoryQuery = () => useQuery({
    queryKey: ['historyData'], 
    queryFn: async () => {
        
        const res = await request('history')
        const data = await res.json()
        
        if (data.error)
            throw new Error(data.error)
        
        // console.log('history data:', res.status, data)
        
        return data
        
    },
    refetchInterval: 10_000, // Refetch every 10 seconds
})

export default useHistoryQuery
