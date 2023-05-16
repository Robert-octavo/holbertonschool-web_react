import react from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';

/*
t returns a table element with an id CourseList
it contains a thead element

    it includes a CourseListRow with the props textFirstCell="Available courses" and isHeader=true
    it includes a CourseListRow with the props textFirstCell="Course name", textSecondCell="Credit", and isHeader=true

it contains a tbody element

    it includes a CourseListRow with the props textFirstCell="ES6", textSecondCell="60", and isHeader=false
    it includes a CourseListRow with the props textFirstCell="Webpack", textSecondCell="20", and isHeader=false
    it includes a CourseListRow with the props textFirstCell="React", textSecondCell="40", and isHeader=false
*/

function CourseList() {
  return /*#__PURE__*/React.createElement("table", {
    id: "CourseList"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(CourseListRow, {
    textFirstCell: "Available courses",
    isHeader: true
  }), /*#__PURE__*/React.createElement(CourseListRow, {
    textFirstCell: "Course name",
    textSecondCell: "Credit",
    isHeader: true
  })), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(CourseListRow, {
    textFirstCell: "ES6",
    textSecondCell: "60",
    isHeader: false
  }), /*#__PURE__*/React.createElement(CourseListRow, {
    textFirstCell: "Webpack",
    textSecondCell: "20",
    isHeader: false
  }), /*#__PURE__*/React.createElement(CourseListRow, {
    textFirstCell: "React",
    textSecondCell: "40",
    isHeader: false
  })));
}

export default CourseList;
