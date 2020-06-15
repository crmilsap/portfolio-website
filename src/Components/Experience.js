import React from "react";
import { Typography, Grid, Box, useMediaQuery, Divider, makeStyles, Link } from "@material-ui/core";
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles(theme => ({
  Divider: {
    marginBottom: 20,
  },
}));

const MakeRow = (position, company, description, location, dates, link = '') => {
  const isMDScreen = useMediaQuery("(min-width: 600px)");
  const dateLocationAlign = isMDScreen ? "right" : "left";
  const italicizeDate = isMDScreen ? "oblique" : "normal";

  return (
    <Grid container>
      {/* Container for the head text */}
      <Grid item container direction = {isMDScreen ? 'row' : 'column'} justify = 'space-between'>
        <Grid item>
          <Typography variant="h2">
            <Box fontStyle="oblique">{position}</Box>
          </Typography>
          <Typography variant="h2">
            <Box fontWeight="fontWeightRegular">{company}</Box>
            {link && <Link href = {link} target = '_blank'><LinkIcon/></Link>}
          </Typography>
        </Grid>

        {/*  Date and location */}
        <Grid item>
          <Typography variant="h2" align={dateLocationAlign}>
            <Box fontStyle={italicizeDate}>{dates}</Box>
          </Typography>
          <Typography variant="h2" align={dateLocationAlign}>
            <Box fontWeight='fontWeightRegular'>{location}</Box>
          </Typography>
        </Grid>
      </Grid>

      {/* Bullet points */}
      <Grid item xs={12} xl = {10}>
        <ul>
          {description.map((point) => {
            return (
              <li key = {point}>
                <Typography variant="body1">{point}</Typography>
              </li>
            );
          })}
        </ul>
      </Grid>
    </Grid>
  );
};

const Experience = () => {
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography
          variant='h1'
          color='primary'
          gutterBottom
        >
          Work Experience
        </Typography>
        {MakeRow(
          'Data Science Intern',
          'Vulcan Value Partners',
          [
            'Contact for a copy of my resume',
          ],
          'Birmingham, AL',
          'April 2020 – Present',
          'https://www.vulcanvaluepartners.com'
        )}
      </Grid>


      <Grid item>
        <Typography
          variant='h1'
          color='primary'
          gutterBottom
          style={{ marginTop: 50 }}
        >
          Extracurricular Experience
        </Typography>
        {MakeRow(
          "Equity Research Analyst",
          "Culverhouse Investment Management Group",
          [
            "Perform company and industry research within a highly selective 50-member student investment group which manages over a $1 million equity-only porfolio using a value investing approach centered around identifying undervalued companies through discounted cash flow and comparable valuation analyses",
            "Program software independently to trim one to two hours of data collection per pitch",
            "Lead weekly classes centered around building foundational programming skills in Python for the group",
          ],
          "Tuscaloosa, AL",
          "September 2019 – Present",
          'https://www.uacimg.com'
        )}
        <Divider className = {classes.Divider}/>
        
        {MakeRow(
          "CAVS Sensor Fusion Team Member",
          "EcoCAR",
          [
            "National vehicle development competition sponsored by the U.S. Department of Energy and General Motors",
            "Worked alongside 2 members on the Sensor Fusion Team to program effective sensor fusion techniques to convert a 2019 Chevy Blazer into an electric, level-two autonomous vehicle",
          ],
          "Tuscaloosa, AL",
          "August 2018 – September 2019",
          'https://www.energy.gov/eere/articles/us-department-energy-general-motors-and-mathworks-launch-ecocar-mobility-challenge'
        )}
        <Divider className = {classes.Divider}/>

        {MakeRow(
          "Student Mentor",
          "UA Honors College Connections Program",
          [
            "Led a small group of 12 college freshmen in weekly classes, representing the University and Honors College",
          ],
          "Tuscaloosa, AL",
          "August 2019 – December 2019"
        )}
        <Divider className = {classes.Divider}/>
        
        {MakeRow(
          "Member",
          "Association for Computing Machinery",
          [
            "Connect with industry professionals and engage in professional development opportunities and events to expand professional reach on campus",
          ],
          "Tuscaloosa, AL",
          "September 2018 – Present",
          'https://ua-acm-student-chapter.github.io'
        )}
        <br />
        <br />
        <br />
      </Grid>
    </Grid>
  );
};

export default Experience;
