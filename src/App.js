import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './request';
import Navbar from './components/Navbar';
function App() {
  return (

    <div className="App">
       <Navbar/>

      <Banner />

      <Row Title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} IsLargeRow={true}></Row>
      <Row Title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row Title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row Title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row Title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row Title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row Title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row Title="Documentaries" fetchUrl={requests.fetchDocumantaries}></Row>
    </div>
  );
}

export default App;
