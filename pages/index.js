import Head from 'next/head';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Home = () => (
  <Grid component="div" container>
    <Head>
      <title>Hnyka Studio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Grid item>
      <Box component="main" padding={3}>
        <Typography variant="h2" component="h1" gutterBottom>
          Hnyka Studio 🎨
        </Typography>

        <Typography gutterBottom>We design and code.</Typography>
      </Box>
    </Grid>
  </Grid>
);

export default Home;
