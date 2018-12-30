import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    display: "inline-flex",
    margin: 10
  },
  media: {
    height: 140,
  },
};

class GoodItem extends React.Component {


  render(){
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={this.props.value.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              Цена за п.м. {this.props.value.price} руб.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

GoodItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoodItem);
