import React from "react";
import PropTypes from 'prop-types';


function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let row;
  if (isHeader) {
    if (textSecondCell === null) {
      row = /*#__PURE__*/React.createElement("th", {
        colSpan: "2"
      }, textFirstCell);
    } else {
      row = /*#__PURE__*/React.createElement("th", null, textFirstCell, /*#__PURE__*/React.createElement("th", null, textSecondCell));
    }
  } else {
    row = /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, textFirstCell), /*#__PURE__*/React.createElement("td", null, textSecondCell));
  }

  return row;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
  
};

export default CourseListRow;