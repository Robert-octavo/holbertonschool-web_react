import React  from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import './CourseList.css';

/*
  - Add a propType listCourses that will take an array of the shape you created
  - Make sure that if listCourses is not passed by the parent component the propType defaults to an empty array
  - When listCourses is empty, display a row showing No course available yet
  - When listCourses contains at least one element, display a row for each element showing the name of the course and the number of credits
  - Make sure to add a key to help React optimize rendering
*/

function CourseList() {
  return (
    <div>
      <div class="table">
        <table id="CourseList">
          <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses"/>
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
          </thead>
          <tbody>
            {(listCourses.length > 0) ? (listCourses.map(({id, name, credit}) =>(
              <CourseListRow key={id} textFirstCell={name} textSecondCell={credit}/>
            ))) : 
            (
              <tr>
                <td colSpan="2">No course available yet</td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;
