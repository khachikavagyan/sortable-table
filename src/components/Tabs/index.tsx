import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Table from '../Table';
import { useStyles } from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [orderPrice, setOrderPrice] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabs}>
        <Tabs
          classes={{
            indicator: classes.indicator,
          }}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="All" className={classes.tableHeadText} />
          <Tab label="Shippd" className={classes.tableHeadText} disabled />
          <Tab
            label={
              <span>
                Total orders:{' '}
                <b
                  style={{
                    fontSize: 20,
                  }}
                >
                  ${orderPrice}
                </b>{' '}
                USD
              </span>
            }
            className={classes.rightAlign}
            disabled
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Table setOrderPrice={setOrderPrice} />
      </TabPanel>
    </div>
  );
}
