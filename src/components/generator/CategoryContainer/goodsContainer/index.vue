import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GoodItem from './goodItem'
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  blockCard:{
    display: "flex",
    justifyContent: "space-between"
  }
});

class GoodsContainer extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.blockCard}>
        <GoodItem
          value={{
            "img": "https://hammerart.ru/upload/resize_cache/iblock/ce7/130_130_16a9cdfeb475445909b854c588a1af844/ce7537a61fc25197f2349fd7be7c018b.jpg",
            "price": 250
          }}/>
          <GoodItem
            value={{
              "img": "https://hammerart.ru/upload/resize_cache/iblock/667/130_130_16a9cdfeb475445909b854c588a1af844/667923aab6a348b341b4f3ed135fb282.jpg",
              "price": 120
            }}/>
            <GoodItem
              value={{
                "img": "https://hammerart.ru/upload/resize_cache/iblock/335/130_130_16a9cdfeb475445909b854c588a1af844/335a497d437dd84f6490966277d264a4.jpg",
                "price": 230
              }}/>
      </div>
    );
  }
}

GoodsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(GoodsContainer);
