import React, { useEffect, useState } from 'react';
import { getData } from '../Utils/Common';
import '../styles/Table.css';
import { Link } from 'react-router-dom';
import Pagination from '../paginate/Pagination';
import Loader from 'react-loader-spinner';

const Tables = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(100);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const user = getData();
  useEffect(() => {
    setData(user);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line
  }, []);

  // The handleChange for search
  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  // GETTING THE CURRENT POST
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // CHANGE PAGE
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  // Filtering section for the search
  const filteredData = currentPosts.filter((post) =>
    Object.values(post).join(' ').toLowerCase().match(search)
  );
  // const filteredData = currentPosts.filter((post) =>
  //   post['Customer Name'].toLowerCase().includes(search.toLocaleLowerCase())
  // );

  // The delete section
  const handleDelete = (id) => {
    const filt = data.filter((item) => item !== id);
    setData(filt);
  };

  return (
    <div className='users'>
      <div className='users-top'>
        <div className='showing'>
          <h2>Users Information</h2>
          <span>showing page {currentPage}</span>
        </div>

        <div className='user-input'>
          <input type='search' placeholder='Search' onChange={handleChange} />
        </div>

        <div className='users-top-iconbox'>
          <button className='btn btn-success'>Create User</button>
          <button className='btn btn-light'>Delete All</button>
        </div>
      </div>

      <div className='users-bottom'>
        {loading && (
          <div className='load'>
            <Loader type='Oval' color='#00B87C' height={34} width={34} />
          </div>
        )}
        <table className='table' border='1' width='500'>
          <thead>
            <tr>
              <th>NO</th>
              <th scope='col'>ORDER ID</th>
              <th scope='col'>CUSTOMER ID</th>
              <th scope='col'>CUSTOMER NAME</th>
              <th scope='col'>PRODUCT NAME</th>
              <th scope='col'>PRODUCT ID</th>
              <th scope='col'>COUNTRY</th>
              <th scope='col'>STATE</th>
              <th scope='col'>CITY</th>
              <th scope='col'>REGION</th>
              <th scope='col'>SALES</th>
              <th scope='col'>PROFIT</th>
              <th scope='col'>DISCOUNT</th>
              <th scope='col'>QUANTITY</th>
              <th scope='col'>POSTAL CODE</th>
              <th scope='col'>SHIP MODE</th>
              <th scope='col'>SHIP DATE</th>
              <th scope='col'>ORDER DATE</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => {
              return (
                <tr key={item['Row ID']}>
                  <td>{index + 1}</td>
                  <td>{item['Order ID']}</td>
                  <td>{item['Customer ID']}</td>
                  <td>{item['Customer Name']}</td>
                  <td>{item['Product Name']}</td>
                  <td>{item['Product ID']}</td>
                  <td>{item.Country}</td>
                  <td>{item.State}</td>
                  <td>{item.City}</td>
                  <td>{item.Region}</td>
                  <td>${item.Sales}</td>
                  <td>{item.Profit}</td>
                  <td>{item.Discount}</td>
                  <td>{item.Quantity}</td>
                  <td>{item['Postal Code']}</td>
                  <td>{item['Ship Mode']}</td>
                  <td>{item['Ship Date']}</td>
                  <td>{item['Order Date']}</td>
                  <td>
                    <button
                      className='btn btn-danger text-white'
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='paginate mt-4'>
        {filteredData.length === 0 ? (
          <p className='text-center bg-danger py-2 text-white mt-4'>
            Data not found
          </p>
        ) : (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Tables;
