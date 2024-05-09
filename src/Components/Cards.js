import { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);
    

    function getCourses() {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }
        else{
            return courses[category];
        }
    }

    // function getCourses() {
    //     if (category === "All") {
    //         let allCourses = [];
    //         Object.values(courses).forEach(array => {
    //             if (Array.isArray(array)) {
    //                 allCourses.push(...array);
    //             }
    //         });
    //         return allCourses;
    //     } else {
    //         return courses[category] || []; // Handle the case when category does not exist
    //     }
    // }

    return (
        <div className="flex flex-wrap justify-center gap-4 py-2">
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                ))
            }
        </div>
    );
}

export default Cards;
