function Greeting(props){
    return(
        <div className="text-2xl pt-2 px-1 font-semibold">
         <h1>Welcome, {props.user}</h1>  

        </div>
    )
}

export default Greeting;