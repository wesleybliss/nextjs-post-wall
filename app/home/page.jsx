'use client'
import useInitQuery from '../queries/initQuery'
import useHomeViewModel from './home.vm'
import PostForm from '../components/PostForm'

const Home = () => {
    
    const { isPending, error, data } = useInitQuery()
    const vm = useHomeViewModel()
    
    return (
        
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center
            min-h-screen p-8 pb-20 gap-16 sm:p-20">
            
            <main className="flex flex-col gap-8 pb-8 row-start-2 items-center text-center">
                
                <h1 className="mb-4">Post Wall</h1>
                
                {isPending && <p><i>Loading...</i></p>}
                
                {error && <div className="p-4 rounded-sm text-red-500">
                    {error.message}
                </div>}
                
                {!isPending && !error && (
                    <PostForm vm={vm} />
                )}
                
            </main>
            
        </div>
        
    )
    
}

export default Home
