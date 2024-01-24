import { ACTION_TYPE } from "./../App"


export default function NewPost({post, dispatch}) {
    
    // if(post.toggle === false){
    //     document.getElementById(post.id).style.textDecoration = "line-through"
    // }


    return(
        <div className="listElement" key={post.id}>
            <span style={
                post.toggle ? {} :  {textDecoration : "line-through"}
            } id={post.id} > {post.toggle ?  post.name : "This content is Hidden"} </span> 
            
            <button onClick={()=>{
                dispatch({type:ACTION_TYPE.TOGGLE, payload: {id: post.id}})
            }}>Redatct</button>
        </div>
    )
}