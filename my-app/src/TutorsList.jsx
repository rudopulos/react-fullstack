import PropTypes from "prop-types";

const TutorsList = ({ tutors }) => {
  // function renderList(items) {
  //   return items.map((item) => (
  //     <li key={item.phone}>{`${item.firstName} ${item.lastName}`}</li>
  //   ));
  // }

  // return <ul>{renderList(tutors)}</ul>;

  return (
    <ul>
      {tutors.map((item) => (
        <li key={item.phone}>{`${item.firstName} ${item.lastName}`}</li>
      ))}
    </ul>
  );
};

export default TutorsList;

TutorsList.propTypes = {
  tutors: PropTypes.array,
};
