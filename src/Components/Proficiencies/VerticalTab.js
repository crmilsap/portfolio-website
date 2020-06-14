import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Tabs, Tab, useMediaQuery} from "@material-ui/core";
import CardList from "./CardList";
import LanguagesImages from '../../Assets/Proficiencies/Languages';
import FrameworkImages from '../../Assets/Proficiencies/Frameworks';
import LibrariesImages from '../../Assets/Proficiencies/Libraries';
import OtherImages from '../../Assets/Proficiencies/Other';

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
        <Typography component="div" style={{ padding: 10, paddingLeft: 24 }}>
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
    minHeight: '308px',
  },
  Tabs: {
    width: '80vw',
    maxWidth: '80vw',
    height: '100%',
  },
}));

export default function VerticalTabs({labels}) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const verticalOrientation = useMediaQuery('(min-width: 960px)');
  const orientation = verticalOrientation ? 'vertical' : 'horizontal';
  const variant = verticalOrientation ? 'standard': 'scrollable';

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Paper className = {classes.GridContainer}>
      <Grid className = {classes.GridContainer} container alignItems = 'flex-start'>
        <Grid item xs = {12} md = {3}>
          <Tabs
            indicatorColor = 'primary'
            orientation={orientation}
            variant={variant}
            value={value}
            scrollButtons = 'auto'
            onChange={handleChange}
            className={classes.Tabs}
          >
            {labels.map(l => {
              return <Tab key = {l} label = {l}/>
            })}

          </Tabs>
        </Grid>
        <Grid item xs = {12} md = {9}>
          <TabPanel value={value} index={0}>
            <CardList imagesObject = {LanguagesImages}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CardList imagesObject = {FrameworkImages}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CardList imagesObject = {LibrariesImages}/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <CardList imagesObject = {OtherImages}/>
          </TabPanel>
        </Grid>
      </Grid>
    </Paper>
  );
}
