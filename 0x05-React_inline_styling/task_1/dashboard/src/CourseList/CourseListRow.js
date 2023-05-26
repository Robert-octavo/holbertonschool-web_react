import React from "react";
import PropTypes from 'prop-types';

const rowsStyle = {
  backgroundColor: '#f5f5f5ab',
  border: '1px solid lightgray'
};

const headerStyle = {
  backgroundColor: '#deb5b545',
  border: '1px solid lightgray'
};


function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader === true) {
      if (textSecondCell === null) {
        return (
          <tr style={headerStyle}>
            <th colSpan="2">{textFirstCell}</th>
          </tr>
        );
      } else {
        return (
          <tr style={headerStyle}>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </tr>
        );
      }
    } else {
      return (
        <tr style={rowsStyle}>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      );
    }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;