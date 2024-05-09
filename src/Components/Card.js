import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify";
const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;


    const [readmore, setReadmore] = useState(false);
    const description = readmore ? course.description : `${course.description.substr(0,100) + "..."}`; 

    function readmoreHandler(){
        setReadmore(!readmore);
    }


    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //phela se like hua pada ha
            setLikedCourses ( (prev)=> prev.filter( (cid)=>( cid !== course.id)));
            toast.warning("Liked removed: "+ course.id);
        }
        else{
            //phela se like nhi hua course
            if(likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }else{
                setLikedCourses ((prev) => [...prev, course.id]);
            }
            toast.success("liked successfully: " + course.id );  
        }
    }
    return (
        <div className="w-[300px] bg-slate-900 rounded-md overflow-hidden border-2 border-cyan-700">
            <div className="relative">
                <img src ={course.image.url}/>
                <div className="absolute w-[40px] h-[40px] rounded-full bg-white right-2 bottom-3
                      grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id)? 
                            <FcLike fontSize="1.75rem"/>:
                            <FcLikePlaceholder fontSize="1.75rem"/> 
                        }
                        
                    </button>
                </div>
            </div>
            
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {description}
                    <span className="text-cyan-500 cursor-pointer" onClick={readmoreHandler}>
                        {readmore ? 'Show less':'Read more'}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Card