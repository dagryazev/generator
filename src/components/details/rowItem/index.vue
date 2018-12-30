import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
  card: {
    display: 'flex',
    width: "100%"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "20%"
  },
  priceWith: {
    color: "#444",
    marginRight: 20,
    fontSize: 14
  },
  blockPrice: {
    width: 'auto',
    display: 'inline-block',
    float: 'right'
  },
  chip: {
    fontSize: 16
  }
});

function RowItem(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image="https://i.kupongid.ru/deals_img/32/3b200677.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Рама пластиковая
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Артикул: 00001
          </Typography>
          <div className={ classes.blockPrice }>
            <span className={classes.priceWith}>Цена за п.м.: 250 руб.</span>
            <Chip label="145 руб." className={classes.chip} variant="outlined" />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

RowItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RowItem);
