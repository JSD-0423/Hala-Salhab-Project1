import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home'
import Details from './Pages/details'
import Header from '../src/Components/Header/header'
import Banner from '../src/Components/Banner/Banner'
import Footer from '../src/Components/Footer/Footer'
import useApiRequest from './API/useApiRequest'
import { useState, useEffect, useContext } from 'react';
import FavortiesContainer from './Components/FavortiesContainer/FavortiesContainer';
import ThemeContext from './Context/ThemeContext';
import './Style/dark-mode.css';

function App() {
  const { data, loading, error } = useApiRequest('https://tap-web-1.herokuapp.com/topics/list');
  const [dataCount, setDataCount] = useState();
  const [loadingMessage, setLoadingMessage] = useState('Loading...');
  const [resultMessage, setResultMessage] = useState('Web Topics Found');
  const [errorMessage, setErrorMessage] = useState('Something went wrong. Web topics failed to load.');
  const [categories, setCategories] = useState();
  const [sortOptions, setSortOptions] = useState(['Topic Title', 'Author Name'])
  const [searchData, setSearchData] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [favotireContaierHeadLine, setfavotireContaierHeadLine] = useState('My Favourite Topics');
  const [showFavorites, setShowFavorites] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('Web Topics');
  const [favoriteTopics, setFavoriteTopics] = useState([]);

  //extract theme 
  const { theme, toggleTheme } = useContext(ThemeContext);
  const appClassName = theme === 'dark'
      ? 'app app-dark'
      : 'app app-ligh';

  useEffect(() => {
    if (data) {
      setDataCount(data.length);
      let categories = [... new Set(data.map((topic) => {
        return topic.category;
      }))];
      setCategories(categories);
    }
  }, [data]);

  // Apply filtering based on filterValue 
  useEffect(() => {
    console.log(searchData)
    if (searchData) {
      setFilteredTopics(searchData.filter((topic) => topic.category === filterValue))
    } else if (filterValue) {
      setFilteredTopics(data.filter((topic) => topic.category === filterValue))
    }
    console.log(!filterValue, !data, searchData, filteredTopics)
  }, [searchData, filterValue]);

  // Apply sorting based on sortValue

  useEffect(() => {
    console.log("before sorting", filteredTopics, !sortValue)
    if (sortValue && filteredTopics.length) {
      const sortedTopics = [...filteredTopics];
      sortedTopics.sort((a, b) => {
        if (sortValue === 'Author Name') {
          return a.name.localeCompare(b.name);
        } else if (sortValue === 'Topic Title') {
          return a.topic.localeCompare(b.topic);
        }
        return 0;
      })
      setFilteredTopics(sortedTopics);
    }

    if (sortValue && searchData.length) {
      const sortedSearchData = [...searchData];
      sortedSearchData.sort((a, b) => {
        if (sortValue === 'Author Name') {
          return a.name.localeCompare(b.name);
        } else if (sortValue === 'Topic Title') {
          return a.topic.localeCompare(b.topic);
        }
        return 0;
      })
      setSearchData(sortedSearchData);
    }
    console.log("after sorting", filteredTopics)
  }, [sortValue, filteredTopics, searchData]);

  // Load favorite topics from local storage on component mount
  useEffect(() => {
    const storedFavoriteTopics = localStorage.getItem('favoriteTopics');
    if (storedFavoriteTopics) {
      setFavoriteTopics(JSON.parse(storedFavoriteTopics));
      console.log(storedFavoriteTopics)
    }
  }, []);

  // Save favorite topics to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('favoriteTopics', JSON.stringify(favoriteTopics));
  }, [favoriteTopics]);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleSort = (value) => {
    setSortValue(value);
  };

  const handleFilter = (value) => {
    setFilterValue(value);
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className={appClassName}>
      <Header toggleFavorites={toggleFavorites} headerTitle={headerTitle} theme={theme} toggleTheme={toggleTheme} />
      <Banner />
      <Router>
        <Routes>
          <Route path="/Hala-Salhab-Project1" element={<Home data={data} loading={loading} error={error} loadingMessage={loadingMessage} dataCount={dataCount} resultMessage={resultMessage} errorMessage={errorMessage} filterOptions={categories} sortOptions={sortOptions} handleSearch={handleSearch} handleSort={handleSort} handleFilter={handleFilter} searchValue={searchValue} setSearchData={setSearchData} filteredTopics={filteredTopics} searchData={searchData}/>} />
          <Route path="/Hala-Salhab-Project1/details/:id" element={<Details loadingMessage={loadingMessage} favoriteTopics={favoriteTopics} setFavoriteTopics={setFavoriteTopics} />} />
        </Routes>
      </Router>
      {showFavorites && <FavortiesContainer favoriteTopics={favoriteTopics} favotireContaierHeadLine={favotireContaierHeadLine} />}
      <Footer />
    </div>
  );
}

export default App;
