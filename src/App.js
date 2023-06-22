import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home'
import Details from './Pages/details'
import Header from '../src/Components/Header/header'
import Banner from '../src/Components/Banner/Banner'
import Footer from '../src/Components/Footer/Footer'
import useApiRequest from './API/useApiRequest'
import { useState, useEffect } from 'react';



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
  // const [sotredTopics, setSortedTopics] = useState([]);


  useEffect(() => {
    if (data) {
      setDataCount(data.length);
      let categories = [... new Set(data.map((topic) => {
        return topic.category;
      }))];
      setCategories(categories);
    }
  }, [data]);

  const handleSearch = (value) => {
    setSearchValue(value);
  };


  const handleSort = (value) => {
    setSortValue(value);
    console.log(sortValue)
  };

  const handleFilter = (value) => {
    setFilterValue(value);
    console.log(filterValue)
  };

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
    console.log("before sorting",filteredTopics,!sortValue )
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
    console.log("after sorting",filteredTopics) 
  }, [sortValue, filteredTopics, searchData]);


  return (
    <div>
      <Header />
      <Banner />
      <Router>
        <Routes>
          <Route path="/Hala-Salhab-Project1" element={<Home data={data} loading={loading} error={error} loadingMessage={loadingMessage} dataCount={dataCount} resultMessage={resultMessage} errorMessage={errorMessage} filterOptions={categories} sortOptions={sortOptions} handleSearch={handleSearch} handleSort={handleSort} handleFilter={handleFilter} searchValue={searchValue} setSearchData={setSearchData} filteredTopics={filteredTopics} searchData={searchData}/>} />
          <Route path="/Hala-Salhab-Project1/details/:id" element={<Details loadingMessage={loadingMessage} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
