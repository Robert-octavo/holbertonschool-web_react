import React, { PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

export default class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    let styleType = css(type === 'urgent' ? styles.urgent : styles.default);
    //const getLi = () => {
      if (html) {
        return (
          <li className={styleType} data-priority={type} dangerouslySetInnerHTML={html} onClick={() => {markAsRead(id)}}></li>
        );
      } else {
        return (
          <li className={styleType} data-priority={type} onClick={() => {markAsRead(id)}}>{value}</li>
        );
      }
    //};

    // return (
    //   <Fragment>
    //     {getLi()}
    //   </Fragment>
    // );
  }
}
;


const styles = StyleSheet.create({
  default: {
    color: 'blue',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      borderBottom: '1px solid black',
      listStyle: 'none',
      padding: '0',
      margin: '0',
		},
  },
  urgent: {
    color: 'red',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      borderBottom: '1px solid black',
      listStyle: 'none',
      padding: '0',
      margin: '0',
		},
  }
});

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  //html: {__html: ''},
  markAsRead: () => {}
};
