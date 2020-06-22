import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Grid,
  Box,
  Link,
} from "@material-ui/core/";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 275,
    padding: "0px 5px 0px 5px",
    borderRadius: 30,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  contentContainer: {
    padding: "15px 0px 5px 0px",
  },
  actionContainter: {
    padding: "0px 0px 0px 0px",
    justifyContent: "flex-end",
  },
  contentDropDown: {
    padding: '0px 0px 0px 20px',
  }
}));

const makeRow = (leftSide, rightSide) => {
  return (
    <>
      <Grid item xs={3} align="right">
        <Typography variant="body1" component={"span"}>
          <Box fontWeight="fontWeightBold">{leftSide}:</Box>
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={8}>
        <Typography variant="body1">{rightSide}</Typography>
      </Grid>
    </>
  );
};

export default function QuickFactsCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation = {15}>
      <CardContent className={classes.contentContainer}>
        <Typography color="primary" align="center" variant="h1" gutterBottom>
          Quick Facts
        </Typography>
        <Grid container>
          {makeRow("Major", "Computer Science")}
          {makeRow("Year", "Rising Junior")}
          {makeRow("GPA", "3.96/4.00")}
          {makeRow("ACT", "35/36")}
        </Grid>
      </CardContent>
      <CardActions className={classes.actionContainter}>
        <Typography variant="body1" color="primary">
          Honors
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className = {classes.contentDropDown}>
          <Typography variant="body1" color="black">
            <Box fontWeight="fontWeightBold">UA Scholarships</Box>
          </Typography>
          <ul>
            <li>
              <Typography>Presidential Scholarship</Typography>
            </li>
            <li>
              <Typography>Engineering Leadership Scholarship</Typography>
            </li>
          </ul>
          <Typography variant="body1" color="black">
            {" "}
            <Box fontWeight="fontWeightBold">
              Tailhook Educational Foundation
            </Box>{" "}
          </Typography>
          <Link href="https://www.tailhook.net/tef-home" target="_blank">
            <LinkIcon />
          </Link>
          <ul>
            <li>
              <Typography>
                2019: USS Oriskany (CV-34) "The Mighty O" Scholarship
              </Typography>
            </li>
            <li>
              <Typography>
                2018: The "Trader Jon" Memorial Scholarship
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" color="black">
            <Box fontWeight="fontWeightBold">Accomplishments</Box>
          </Typography>
          <ul>
            <li>
              <Typography>President's List</Typography>
            </li>
            <li>
              <Typography> UA Honors College Program</Typography>
            </li>
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}
