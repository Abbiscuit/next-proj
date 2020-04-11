import Head from 'next/head';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Home = () => (
  <Box component="div" padding={2}>
    <Head>
      <title>Hnyka Studio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Box component="main">
      <Typography variant="h6" component="h1" gutterBottom>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>

      <Typography gutterBottom>
        Get started by editing <code>pages/index.js</code>
      </Typography>
    </Box>
  </Box>
);

export default Home;
