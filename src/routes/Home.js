import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";


class Home extends React.Component {
    // state 값은 변할 수 없다. setstate를 통해 변경 가능
  state = {
    isLoading: true,
    movies: []
  };
  // async를 통해 안에 있는 url을 통해 데이터를 받아올 때까지 기다릴 수 있다 => 비동기화
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
      //await을 통해 axios가 끝날때까지 기다린다.
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=download_count"
    );
    this.setState({ movies, isLoading: false });
  };
  //rendering 완료 후에 실행되는 함수 렌더링 끝나면 getmovies를 통해 데이터 받아옴
  componentDidMount() {
    this.getMovies();
  }
  // 페이지를 실행시키면 가장 먼저 시작하는 함수
  render() {
      //this.state를 통해서 번거로운 변수 선언 반복 감소
    const { isLoading, movies } = this.state;
    return ( // 여기서는 class와 구분이 안되므로 className으로 class 설정(css시 사용)
      <section className="container">
        {isLoading ? ( //삼항 연산자 이용
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => ( // map을 통해 Proptypes를 통해 받아온 데이터들 저장
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres.splice(0,3)} // 장르가 여러개이면 css 깨져서 3개까지만..
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;