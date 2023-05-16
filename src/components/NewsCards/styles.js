import { makeStyles } from "@mui/styles";







export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height:  '50vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
    backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat'
  },
  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center',
  },
  container: {
    padding: '0 2% 2%', width: '100%', margin:'0 5%'
  },
});
