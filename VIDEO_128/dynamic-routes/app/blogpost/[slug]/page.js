export default function Page({ params }){
    let language = ["cpp", "c+", "html", "python", "Java", "JavaScript", "react"]
    if(language.includes(params.slug)){
        return <div> My post : {params.slug}</div>
    }
    else{
        return <div> Post not found</div>
    }
   
}