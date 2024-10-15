import { ImageListItem, ImageListItemBar } from "@mui/material";

function ImageItem( {item} ) {
    const url = item.urls.thumb;
    const alt_description = item.alt_description;
    const author = item.user.name;
    
    return (
      <ImageListItem key={url}>
        <img
          srcSet={`${url}`}
          src={`${url}`}
          alt={alt_description}
          loading="lazy"
        />
        <ImageListItemBar
          title={author}
        />
      </ImageListItem>
    );
    
    // return ( 
    //     <ImageListItem key={item.img}>
    //         <Link to={`/photo/1`}>
    //                 <img
    //             srcSet={`${item.img}?w=300`}
    //             src={`${item.img}?w=300&fit=crop&auto=format`}
    //             alt={item.title}
    //             loading="lazy"
    //             />
    //             <ImageListItemBar
    //             title={item.title}
    //             subtitle={item.author}
    //             />
    //         </Link>
    //   </ImageListItem>
    // );
}

export default ImageItem;