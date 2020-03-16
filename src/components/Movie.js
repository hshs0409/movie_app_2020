import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

// Home.js에서 받아오는 Movie component
function Movie({ id, year, title, summary, poster, genres }) {
  return (
      // Link 통해서 라우터 이용 
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`, // 라우터 pathname 지정해주고
          state: {
            year,
            title,
            summary,
            poster,
            genres
          }
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => ( // map을 통해서 genre index 를 map하고 index는 키값으로 genre는 genres 보내준다
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

// propTypes를 통해 각 변수마다 들어와야할 값과 조건을 정해준다. isRequried => 반드시 있어야하는값
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired // 배열의 값이 들어와야함 => 배열내의 값은 스트링
};

export default Movie;