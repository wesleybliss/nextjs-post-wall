
const PostForm = ({
    vm,
}) => {
    
    return (
        
        <form className="flex flex-col gap-4">
            
            <input
                className="input input-bordered"
                type="text"
                placeholder=""
                value={vm.text}
                onChange={e => vm.setText(e.target.value)}
            />
            
            <button
                className="btn btn-primary"
                disabled={!vm.canSubmit}
                onClick={vm.handleSubmit}>
                SUBMIT
            </button>
            
        </form>
        
    )
    
}

export default PostForm
