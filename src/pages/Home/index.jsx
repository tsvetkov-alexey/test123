import Pagination from '../../components/Pagination';
import DataTable from '../../components/DataTable';
import Header from '../../components/Header';
import SearchInfo from '../../components/SearchInfo';
import Sidebar from '../../components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/slices/filter';

const Home = () => {
  const dispatch = useDispatch();

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
