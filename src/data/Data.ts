import React, { useState, useEffect } from 'react';

export default function Data() {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState<Number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [pageParams, setPageParams] = useState([]);

  const fetchData = async() => {
    setLoading(true);
    try {

    } catch(err) {
      console.log("err:", err);
      setLoading(false);
    }
  }

  return datas;
}