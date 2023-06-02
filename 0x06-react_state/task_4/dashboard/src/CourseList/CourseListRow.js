import React, { useState} from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {

  const [isCheck, setIsCheck] = useState(false);

  // const checkChange = () => {
  //   if (isCheck === false) {
  //     setIsCheck(true);
  //   } else {
  //     setIsCheck(false);
  //   }
  // }

  handleClick = () => {
    setIsCheck(!isCheck);
  }

  const row = css(isCheck ? styles.rowChecked : null);

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
          <td className={row}>
            <input type="checkbox" onClick={handleClick}/>
            {textFirstCell}
          </td>
          <td>
            {textSecondCell}
          </td>
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
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
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