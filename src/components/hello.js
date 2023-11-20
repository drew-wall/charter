import React, { useState, useEffect, useMemo } from "react";
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const Hello = () => {
  const imageNameList = useMemo(() => [
    "akita",
    "germanshepherd",
    "dalmatian",
    "husky",
    "labrador"
  ], []);

  const [image, setImage] = useState('');
  const [pos, setPos] = useState(0);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${imageNameList[pos]}/images/random`)
      .then(response => response.json())
      .catch(err => { console.log(err) })
      .then(setImage)
  }, [pos, imageNameList]);

  const isFirst = () => pos === 0
  const isLast = () => pos === imageNameList.length - 1

  const getNext = () => {
    if (!isLast()) {
      setPos(pos + 1);
    }
  };

  const getPrev = () => {
    if (!isFirst()) {
      setPos(pos - 1);
    }
  };

  return (
    <Box>
      <div>
        <img src={image && image.message} height={350} width={450} alt={imageNameList[pos]} />
      </div>
      <h3>{imageNameList[pos]}</h3>
      <Button variant="contained" sx={ { mr: 1 }} disabled={isFirst()} onClick={getPrev}>Previous</Button>
      <Button variant="contained" disabled={isLast()} onClick={getNext}>Next</Button>
    </Box>
  );
};

export default Hello;
