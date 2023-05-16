import React  from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList() {
  return React.createElement("div", {
    className: "table"
  }, React.createElement("table", {
    id: "CourseList"
  }, React.createElement("thead", null, React.createElement(CourseListRow, {
    textFirstCell: "Available courses",
    isHeader: true
  }), React.createElement(CourseListRow, {
    textFirstCell: "Course name",
    textSecondCell: "Credit",
    isHeader: true
  })), React.createElement("tbody", null, React.createElement(CourseListRow, {
    textFirstCell: "ES6",
    textSecondCell: "60",
    isHeader: false
  }), React.createElement(CourseListRow, {
    textFirstCell: "Webpack",
    textSecondCell: "20",
    isHeader: false
  }), React.createElement(CourseListRow, {
    textFirstCell: "React",
    textSecondCell: "40",
    isHeader: false
  }))));
}

export default CourseList;
