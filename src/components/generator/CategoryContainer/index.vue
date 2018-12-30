import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import GoodsContainer from './goodsContainer/'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  },
});

class CategoryContainer extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
   this.setState({ value });
 };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Item One" icon={<PhoneIcon />} />
            <Tab label="Item Two" icon={<FavoriteIcon />} />
            <Tab label="Item Three" icon={<PersonPinIcon />} />
            <Tab label="Item Four" icon={<HelpIcon />} />
            <Tab label="Item Five" icon={<ShoppingBasket />} />
            <Tab label="Item Six" icon={<ThumbDown />} />
            <Tab label="Item Seven" icon={<ThumbUp />} />
          </Tabs>
        </AppBar>
        {value === 0 && <GoodsContainer value={1} />}
        {value === 1 && <GoodsContainer value={2} />}
        {value === 2 && <GoodsContainer value={3} />}
        {value === 3 && <GoodsContainer value={4} />}
        {value === 4 && <GoodsContainer value={5} />}
        {value === 5 && <GoodsContainer value={6} />}
      </div>
    );
  }
}

CategoryContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryContainer);
