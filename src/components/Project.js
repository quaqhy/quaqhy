import React from "react";
import PropTypes from "prop-types";
import { Button, Card, CardContent, CardActions, Grid } from "@mui/material";

Project.propTypes = {
  url: PropTypes.string,
  srcImg: PropTypes.string,
  name: PropTypes.string,
};

Project.defaultProps = {
  url: "",
  srcImg: "",
  name: "",
};

function Project({ url, name, srcImg, index }) {
  return (
    <Grid item xs={4} color="info">
      <Card>
        <CardContent>
          <img
            key={index}
            src={srcImg}
            alt=""
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href={url}
            fullWidth="true"
            variant="contained"
            color="secondary"
            target="_blank"
          >
            {name}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Project;
