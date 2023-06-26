import React  from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import {
  fetchCourses,
  selectCourse,
  unSelectCourse
} from '../actions/courseActionCreators';
import { listCourses } from '../selectors/courseSelector';
import { render } from 'react-dom';


export class CourseList extends Component {

  constructor(props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  };

  render() {
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
  };
};

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
  listCourses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  selectCourse: PropTypes.func,
  unSelectCourse: PropTypes.func,
  fetchCourses: PropTypes.func
};

CourseList.defaultProps = {
  listCourses: null,
  selectCourse: () => {},
  unSelectCourse: () => {},
  fetchCourses: () => {},
};

const mapStateToProps = (state) => ({
  listCourses: listCourses(state)
});

const mapDispatchToProps = {
  selectCourse,
  unSelectCourse,
  fetchCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
//export default CourseList;
