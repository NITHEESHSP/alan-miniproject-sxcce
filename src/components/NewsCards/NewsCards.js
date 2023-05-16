import { Grow, Grid, Typography } from '@mui/material';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles';

const infoCards = [
  { backgroundImage: 'url(https://i.gifer.com/PMyd.gif)', title: 'Latest News', text: 'Give me the latest news' },
  { backgroundImage: 'url(https://i.gifer.com/8Wy8.gif)', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { backgroundImage: 'url(https://i.gifer.com/7XJ1.gif)', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { backgroundImage: 'url(https://media.giphy.com/media/3o6ZthWzyoIzSknltu/giphy.gif)', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  { backgroundImage: 'url(https://i.gifer.com/3jhE.gif)', title: 'News by Country',
  info: 'India, America, China, SriLanka...',
  text: 'Give me news from India', },
  { backgroundImage: 'url(https://i.gifer.com/PMyd.gif)', title: 'Latest News', text: 'Give me the latest news' },
];


const NewsCards = ( {articles, activeArticle } ) => {
  const classes = useStyles();

  if(!articles.length){
      return (
          <Grow in>
              <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                  {infoCards.map((infoCard) => (
                      <Grid item xs={12} sm={6} md={4} lg={2} className={classes.infoCard}>
                          <div className={classes.card} style={{ backgroundImage: infoCard.backgroundImage }}>
                              <Typography variant="h5">{infoCard.title}</Typography>
                              { infoCard.info ? (<Typography variant="h6"> <strong> {infoCard.title.split(' ')[2]}; </strong> <br /> {infoCard.info} </Typography>) : null }
                              <Typography variant="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>

                          </div>
                      </Grid>
                  ))}
              </Grid>
          </Grow>
      );
  }

  return (
      <Grow in>
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {articles.map((article, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                  <NewsCard article={article} activeArticle={activeArticle} i={i} />
                  </Grid>
              ))}
          </Grid>
      </Grow>
  );
}

export default NewsCards;
