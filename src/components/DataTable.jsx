import * as React from 'react';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from '../redux/slices/info';
import Loader from './UI/Loader';

function createData(checkbox, name, type, location, org, number, tags, creation, refresh, audit) {
  return { checkbox, name, type, location, org, number, tags, creation, refresh, audit };
}

const DataTable = () => {
  const { info, status } = useSelector((state) => state.info);
  const { search, page } = useSelector((state) => state.filter);
  const currentType = useSelector((state) => state.filter.currentType.name);
  const currentTag = useSelector((state) => state.filter.currentTag.name);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfo({ search, page, currentType, currentTag }));
  }, [search, page, currentType, currentTag]);

  console.log(info, status);

  if (status === 'LOADING') {
    return <Loader />;
  }

  const rows = info.map((item) => {
    return createData(
      <Checkbox key={item.id}></Checkbox>,
      item.name,
      item.type,
      item.location,
      item.org,
      item.number,
      item.tags,
      item.creation,
      item.refresh,
      item.audit,
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '85%', marginLeft: '8%', marginTop: '30px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ width: '5%' }}>
              <Checkbox disabled></Checkbox>
            </TableCell>
            <TableCell align="center">Название</TableCell>
            <TableCell align="center">Тип</TableCell>
            <TableCell align="center">Расположение</TableCell>
            <TableCell align="center">Орг. единица</TableCell>
            <TableCell align="center">Инв. номер</TableCell>
            <TableCell align="center">Теги</TableCell>
            <TableCell align="center">Дата создания</TableCell>
            <TableCell align="center">Дата обновления</TableCell>
            <TableCell align="center">Аудит</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">{row.checkbox}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">{row.org}</TableCell>
              <TableCell align="center">{row.number}</TableCell>
              <TableCell align="center">{row.tags}</TableCell>
              <TableCell align="center">{row.creation}</TableCell>
              <TableCell align="center">{row.refresh}</TableCell>
              <TableCell align="center">{row.audit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
