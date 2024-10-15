import { Typography } from "@mui/material";
import ImageItem from "../../components/ImageItem/ImageItem.jsx";
import { GetPhotos } from "../../utilities/api.js";
import styles from "./ImageList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ImageList() {
  const [itemData, setitemData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(() => {
    setTimeout(async () => {
      const newData = await GetPhotos(page, 12);      

      setitemData([...itemData, ...newData]);
      setPage(page+1);
    }, 1500);
  });

  useEffect(fetchData);
  
  return (
    <>
      <Typography variant="h4">Photo Gallery</Typography>
      <InfiniteScroll className={styles.flex}
        dataLength={itemData.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }      
      >
        {itemData.map((item) => (
          <Link to={`/photo/${item.id}`}>
            <ImageItem item={item} />
          </Link>
          ))}
      </InfiniteScroll>
    </>
  );
}

export default ImageList;
