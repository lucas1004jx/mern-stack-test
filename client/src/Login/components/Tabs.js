import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Tabs as MaterialTabs, Tab, Typography, Box,
} from '@material-ui/core';

const TabPanel = (props) => {
  const {
    children, value, index, label,
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={label}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

TabPanel.defaultProps = {
  children: () => <div />,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Tabs = ({ tabs }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div position="static">
        <MaterialTabs value={value} onChange={handleChange} aria-label="tabs">
          {tabs.map((tab) => <Tab label={tab.label} />)}
        </MaterialTabs>
      </div>
      {tabs.map((tab, idx) => (
        <TabPanel value={value} index={idx}>
          {tab.element}
        </TabPanel>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    element: PropTypes.node,
  })).isRequired,
};

export default Tabs;
