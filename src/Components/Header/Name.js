import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  /* SVG Text */

  name: {
    zIndex: 6,
    position: "relative",
    display: "block",
    top: "50%",
    left: "20%",
    transform: "translate(0%, -50%)",
    width: "auto",
    height: "50%",
    [theme.breakpoints.down('md')]: {
      left: '10%',
    },
    [theme.breakpoints.up('md')]: {
      left: '20%',
    },
  },

  secondaryColorStroke: {
    stroke: theme.palette.secondary.main,
  },
  
  c: {
    strokeDasharray: 656,
    strokeDashoffset: 656,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards, 
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
  },

  o: {
    strokeDasharray: 405,
    strokeDashoffset: 405,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 0.3s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
  },

  r: {
    strokeDasharray: 353,
    strokeDashoffset: 353,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 0.6s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
    
  },

  y: {
    strokeDasharray: 552,
    strokeDashoffset: 552,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 0.9s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
  },

  m: {
    strokeDasharray: 1090,
    strokeDashoffset: 1090,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 1.2s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
  },

  i: {
    strokeDasharray: 386,
    strokeDashoffset: 386,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 1.5s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
  },

  l: {
    strokeDasharray: 366,
    strokeDashoffset: 366,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 1.8s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
  },

  s: {
    strokeDasharray: 561,
    strokeDashoffset: 561,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 2.1s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
  },

  a: {
    strokeDasharray: 572,
    strokeDashoffset: 572,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 2.4s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
  },

  p: {
    strokeDasharray: 634,
    strokeDashoffset: 634,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 2.7s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
  },

  apst: {
    strokeDasharray: 634,
    strokeDashoffset: 634,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 3.0s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
  },

  s2: {
    strokeDasharray: 634,
    strokeDashoffset: 634,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 3.3s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 4s`,
  },

  portfolio: {
    strokeDasharray: 634,
    strokeDashoffset: 634,
    animation: `$line-animation 1.5s ${theme.transitions.easing.easeInOut} forwards 5s,
                $fill-animation 0.5s ${theme.transitions.easing.easeInOut} forwards 5.5s`,
  },

  '@keyframes line-animation': {
    '100%': {
      stroke: theme.palette.secondary.main,
      strokeDashoffset: 0,
    },
  },

  '@keyframes fill-animation': {
    '0%': {
      fill: "transparent",
    },
    '100%': {
      fill: theme.palette.primary.main,
    },
  },
}));

const Name = () => {
  const classes = useStyles();

  return (
    <svg
      id = 'name'
      className={classes.name}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 790.55 631.19"
    >
      <path
        className= {classes.c}
        d="M128.28,125.45a51.77,51.77,0,0,1-8,26.22A48.36,48.36,0,0,1,99.72,169.3q-13.25,6.24-30.23,6.25-28,0-44.14-18.26T9.24,105.72v-7q0-20.89,7.27-36.57a55.18,55.18,0,0,1,21-24.22q13.68-8.55,31.64-8.54Q95,29.36,110.7,43t17.87,37.55H94.39q-.39-13-6.54-18.65T69.1,56.21q-12.79,0-18.75,9.57T44.1,96.35v10.06q0,22.75,5.71,32.52t19.68,9.76q11.82,0,18.07-5.57t6.64-17.67Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.o}
        d="M138.83,119.79q0-15.83,6.15-28.18a44,44,0,0,1,17.68-19Q174.18,66,189.71,66q23.73,0,37.4,14.69t13.67,40v1.18q0,24.71-13.72,39.2T189.9,175.55q-22.56,0-36.23-13.53t-14.74-36.67Zm32.91,2q0,14.64,4.59,21.48t13.57,6.84q17.58,0,18-27v-3.32q0-28.42-18.16-28.42-16.52,0-17.87,24.51Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.r}
        d="M319.2,97.71l-10.84-.78q-15.53,0-19.92,9.77v66.89H255.53V67.93h30.86l1.07,13.57Q295.76,66,310.61,66a32.2,32.2,0,0,1,9.18,1.17Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.y}
        d="M373.3,127.5l17.58-59.57h35.25L383.07,191.27l-1.86,4.49q-9.18,20.51-32.42,20.51a51.4,51.4,0,0,1-13.57-2V190.88h4.29q6.93,0,10.6-2t5.42-7.19l2.63-7L321.45,67.93H356.6Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.m}
        d="M58.26,271.41,90,370.33l31.64-98.92h45.12V413.59H132.38v-33.2l3.32-68L101.33,413.59H78.67L44.2,312.32l3.32,68.07v33.2H13.24V271.41Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.i}
        d="M186.78,280.68a14.69,14.69,0,0,1,5.08-11.52q5.07-4.49,13.18-4.49t13.18,4.49a15.61,15.61,0,0,1,0,23q-5.07,4.49-13.18,4.49t-13.18-4.49A14.69,14.69,0,0,1,186.78,280.68Zm35,132.91h-33V307.93h33Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.l}
        d="M276.72,413.59h-33v-150h33Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.s}
        d="M352.31,383.91q0-4.2-4.4-6.74t-16.7-5.27a76.51,76.51,0,0,1-20.31-7.18,34,34,0,0,1-12.21-10.79,25.8,25.8,0,0,1-4.2-14.55q0-14.55,12-24T338,306q20.9,0,33.59,9.47t12.7,24.9h-33q0-12.69-13.38-12.69a13.25,13.25,0,0,0-8.69,2.88,8.92,8.92,0,0,0-3.51,7.18q0,4.39,4.29,7.12t13.72,4.5a118.44,118.44,0,0,1,16.56,4.2Q384,361.73,384,382.93q0,14.46-12.84,23.54T338,415.55a57.41,57.41,0,0,1-24.22-4.89,40.41,40.41,0,0,1-16.6-13.28,30.08,30.08,0,0,1-6-17.67h30.76q.19,7.32,4.89,10.69t12,3.37q6.74,0,10.11-2.73A8.78,8.78,0,0,0,352.31,383.91Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.a}
        d="M459,413.59a36.58,36.58,0,0,1-3.13-9.47q-9.07,11.43-25.39,11.43-14.94,0-25.39-9a28.73,28.73,0,0,1-10.45-22.7q0-17.19,12.7-26T444.2,349h10.16v-5.59q0-14.62-12.6-14.62-11.72,0-11.72,11.58H397.13q0-15.32,13-24.87T443.42,306q20.22,0,31.93,9.86t12,27.05v46.78q.19,14.55,4.5,22.26v1.66Zm-20.61-21.48a18.38,18.38,0,0,0,10.21-2.64,16.56,16.56,0,0,0,5.81-6v-16.9h-9.57q-17.19,0-17.19,15.43a9.43,9.43,0,0,0,3,7.28A11,11,0,0,0,438.34,392.11Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.p}
        d="M603.67,361.54q0,24.61-11.08,39.31t-29.93,14.7a30.46,30.46,0,0,1-23.93-10.65v49.32H505.82V307.93h30.76l1,9.77Q547,306,562.46,306q19.53,0,30.37,14.4T603.67,360Zm-32.91-2.05q0-28.12-16.4-28.12-11.73,0-15.63,8.4v41.6q4.31,8.79,15.82,8.79,15.72,0,16.21-27.15Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.apst}
        d="M629.84,315.94l-14.45-7.81q8.1-14.07,8.3-27.54v-17h24v15.92q0,9.09-5.23,19.39A58.18,58.18,0,0,1,629.84,315.94Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.s2}
        d="M699.38,383.91q0-4.2-4.4-6.74t-16.7-5.27A76.51,76.51,0,0,1,658,364.72a34,34,0,0,1-12.21-10.79,25.8,25.8,0,0,1-4.2-14.55q0-14.55,12-24T685,306q20.9,0,33.59,9.47t12.7,24.9h-33q0-12.69-13.38-12.69a13.25,13.25,0,0,0-8.69,2.88,8.92,8.92,0,0,0-3.51,7.18q0,4.39,4.29,7.12t13.72,4.5a118.08,118.08,0,0,1,16.56,4.2q23.82,8.19,23.82,29.39,0,14.46-12.84,23.54T685,415.55a57.41,57.41,0,0,1-24.22-4.89,40.41,40.41,0,0,1-16.6-13.28,30.08,30.08,0,0,1-6-17.67H669q.19,7.32,4.89,10.69t12,3.37q6.74,0,10.11-2.73A8.78,8.78,0,0,0,699.38,383.91Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className = {classes.portfolio}
        d="M47.52,605.35v48.24H13.24V511.41H70q16.3,0,28.86,6a45.32,45.32,0,0,1,19.43,17.09,46.68,46.68,0,0,1,6.89,25.15q0,20.8-14.9,33.25T69.39,605.35Zm0-26.46H70q10,0,15.19-5t5.22-14.07q0-10-5.37-15.91t-14.65-6.06H47.52Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className = {classes.portfolio}
        d="M136.48,599.79q0-15.82,6.16-28.18a44,44,0,0,1,17.67-19Q171.83,546,187.36,546q23.73,0,37.41,14.69t13.67,40v1.18q0,24.7-13.72,39.21t-37.16,14.5q-22.56,0-36.23-13.53t-14.75-36.67Zm32.91,2.05q0,14.64,4.59,21.48t13.58,6.84q17.58,0,18-27v-3.32q0-28.42-18.17-28.42-16.5,0-17.87,24.51Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.portfolio}
        d="M316.86,577.72,306,576.93q-15.54,0-19.93,9.77v66.89H253.18V547.93H284l1.08,13.57Q293.41,546,308.26,546a32.1,32.1,0,0,1,9.18,1.17Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className = {classes.portfolio}
        d="M371.93,521.66v26.27h17.39v22.85H371.93v48.34q0,6,2.15,8.3c1.43,1.56,4.27,2.35,8.5,2.35a48.27,48.27,0,0,0,8.2-.59v23.54a61,61,0,0,1-18.55,2.83q-17,0-25.1-8T339,623.22V570.78H325.55V547.93H339V521.66Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.portfolio}
        d="M409.53,653.59V570.78H394.2V547.93h15.33v-8.4q0-18.06,10.65-28t29.88-10a65.8,65.8,0,0,1,15.43,2l.1,24.22a30.32,30.32,0,0,0-8.11-.88q-14.94,0-14.94,12.89v8.11h20.61v22.85H442.54v82.81Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.portfolio}
        d="M470.57,599.79q0-15.82,6.15-28.18a44,44,0,0,1,17.68-19Q505.92,546,521.45,546q23.73,0,37.4,14.69t13.67,40v1.18q0,24.7-13.72,39.21t-37.16,14.5q-22.56,0-36.23-13.53t-14.75-36.67Zm32.91,2.05q0,14.64,4.59,21.48t13.57,6.84q17.58,0,18-27v-3.32q0-28.42-18.16-28.42-16.52,0-17.88,24.51Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.portfolio}
        d="M621.74,653.59h-33v-150h33Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.portfolio}
        d="M641.76,520.68a14.69,14.69,0,0,1,5.08-11.52q5.07-4.49,13.18-4.49t13.18,4.49a15.61,15.61,0,0,1,0,23.05q-5.07,4.49-13.18,4.49t-13.18-4.49A14.69,14.69,0,0,1,641.76,520.68Zm35,132.91h-33V547.93h33Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className= {classes.portfolio}
        d="M692.83,599.79q0-15.82,6.15-28.18a44.11,44.11,0,0,1,17.68-19Q728.18,546,743.71,546q23.73,0,37.4,14.69t13.68,40v1.18q0,24.7-13.73,39.21t-37.15,14.5q-22.56,0-36.23-13.53t-14.75-36.67Zm32.91,2.05q0,14.64,4.59,21.48t13.58,6.84q17.58,0,18-27v-3.32q0-28.42-18.17-28.42-16.5,0-17.87,24.51Z"
        transform="translate(-6.74 -26.86)"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
    </svg>
  );
};
export default Name;
