import React  from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';


function CourseList( {listCourses} ) {
  return (
    <div>
      <div className={css(styles.table)}>
        <table id="CourseList" className={css(styles.CourseList, styles.td)}>
          <thead className={css(styles.th)}>
            <CourseListRow isHeader={true} textFirstCell="Available courses"/>
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
          </thead>
          <tbody>
            {(listCourses.length > 0) ? (listCourses.map(({id, name, credit}) =>(
              <CourseListRow key={id} textFirstCell={name} textSecondCell={credit}/>
            ))) : 
            (
              <tr>
                <td className={css(styles.th)} colSpan="2">No course available yet</td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  table: {
    height: "200px",
    
  },
  CourseList: {
    width: "90%",
    margin: "60px",
    //border: '.2px solid black',
    borderCollapse: "collapse",
  },
  td: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  },
  th: {
    textAlign: "center",
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;
