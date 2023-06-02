import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader === true) {
      if (textSecondCell === null) {
        return (
          <tr className={css(styles.headerStyle)}>
            <th colSpan="2">{textFirstCell}</th>
          </tr>
        );
      } else {
        return (
          <tr className={css(styles.headerStyle)}>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </tr>
        );
      }
    } else {
      return (
        <tr className={css(styles.rowColor)}>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      );
    }
}

const styles = StyleSheet.create({
  rowColor: {
    ':nth-child(even)': {
      backgroundColor: "lightgray",
    },
  },
  headerStyle: {
    backgroundColor: '#deb5b545',
    border: '1px solid lightgray'
  }
});

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