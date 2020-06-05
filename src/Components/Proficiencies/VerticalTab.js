import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Tabs, Tab} from "@material-ui/core";
import Langauges from './Languages';
import Languages from "./Languages";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Typography component="div" style={{ padding: 24 }}>
          {props.children}
        </Typography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  GridContainer: {
    display: "flex",
    width: '100%',
    height: '100%',
  },
  Tabs: {
    width: '100%',
    height: '100%',
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Grid className = {classes.GridContainer} container alignItems = 'flex-start'>
        <Grid item xs = {3} md = {2} alignItems = 'center'>
          <Tabs
            item
            orientation="vertical"
            variant="standard"
            value={value}
            onChange={handleChange}
            className={classes.Tabs}
          >
            <Tab label = 'Languages' />
            <Tab label = 'Frameworks' />
            <Tab label = 'Libraries' />
            <Tab label = 'Other' />
          </Tabs>
        </Grid>
        <Grid item xs = {9} md = {9}>
          <TabPanel item value={value} index={0}>
            <Languages/>
          </TabPanel>
          <TabPanel item value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </Grid>
      </Grid>
    </Paper>
  );
}
