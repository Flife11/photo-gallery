import { useParams } from "react-router-dom";
import { Card, CardContent ,CardActionArea, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { GetPhoto } from "../../utilities/api.js"
import { useEffect } from "react";
import { useState } from "react";

function ImageDetail() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [title, setTitle] = useState("");    
    const [description, setDescription] = useState("");

    useEffect(() => {
      const asyncFn = async () => {
        let dataFetch = await GetPhoto(id);
        setData(dataFetch);

        let tmpTitle = "";
        let tmpDes = "";
        dataFetch.tags.forEach(element => {
          if (element.source) {
            tmpTitle = element.source.title;
            tmpDes = element.source.description;
          }          
        });  
        setTitle(tmpTitle);
        setDescription(tmpDes);
      }
      asyncFn();
    })
    
    //console.log(data, title);

    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Title: {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Author: {data?.user.name}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={`${data?.urls.full}`}
            alt={`${description}`}
          />
        </CardActionArea>
      </Card>
     );
}

export default ImageDetail;