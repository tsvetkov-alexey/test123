import Pagination from '../../components/Pagination';
import DataTable from '../../components/DataTable';
import Header from '../../components/Header';
import SearchInfo from '../../components/SearchInfo';
import Sidebar from '../../components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/slices/filter';
import { useEffect } from 'react';
import { fetchInfo } from '../../redux/slices/info';

const Home = () => {
  const dispatch = useDispatch();

  // const currentType = useSelector((state) => state.filter.currentType.name);
  // const currentTag = useSelector((state) => state.filter.currentTag.name);

  // console.log(currentTag, currentType);

  // useEffect(() => {
  //   if (currentType) {
  //     const typeFetch = () => {
  //       dispatch(fetchInfo({ currentType }));
  //     };
  //     typeFetch();
  //   }
  //   if (currentTag) {
  //     const tagFetch = () => {
  //       dispatch(fetchInfo({ currentTag }));
  //     };
  //     tagFetch();
  //   }
  // }, [currentType, currentTag]);

  const onChangePage = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header />
        <SearchInfo />
        <DataTable />
        <Pagination onChangePage={onChangePage} />
      </div>
    </div>
  );
};

export default Home;
