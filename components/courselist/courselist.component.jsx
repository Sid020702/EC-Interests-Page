import React from "react";
import Course from "../course/course.component";
const CourseList = ({ courses, updateSelected }) => (
    <div className="ec-flex ec-w-full sm:ec-p-5 ec-m-auto ec-flex-col ec-justify-center ec-items-center sm:ec-flex-row sm:ec-flex-wrap sm:ec-justify-around lg:ec-w-4/6">
        {

            courses.map((course) => (
                <Course key={course} course={course} updateSelected={updateSelected} />
            ))
        }
    </div>
)

export default CourseList