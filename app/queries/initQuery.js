import { useQuery } from '@tanstack/react-query'
import { request } from '../../utilities'

const useInitQuery = () => useQuery({
    queryKey: ['initData'],
    queryFn: async () => {

        const res = await request('init', 'post', {
            url: window.location.href,
        })

        const data = await res.json()

        if (data.error)
            throw new Error(data.error)

        // console.log('init data:', res.status, data)

        return data

    },
})

export default useInitQuery
