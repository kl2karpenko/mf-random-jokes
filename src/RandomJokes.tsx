import React, { useState, useEffect, useMemo } from 'react';
import Api from './api';
import { Box, Grid, Typography, Button, CircularProgress } from '@material-ui/core';

export default function RandomJokes() {
  const [question, setQuestion] = useState<string>('');
  const [joke, setJoke] = useState<string>('');
  const [showJoke, setShowJoke] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const api = useMemo(() => new Api(), []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.getRandomJoke();
        setQuestion(data?.setup);
        setJoke(data?.punchline);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [api]);

  if (loading) {
    return (
      <Box p={4} data-test="jokes-loading">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={4} data-test="random-jokes-app">
      <Grid container direction="column" spacing={2}>
        {question && (
          <>
            <Grid item xs={12} data-test="jokes-question">
              <Typography variant="body1">
                {question}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={() => setShowJoke(true)}
              >
                Show me a joke!
              </Button>
            </Grid>
          </>
        )}
        {joke && showJoke && (
          <Grid item xs={12} data-test="jokes-answer">
            <Typography variant="body1">
              {joke}
            </Typography>
            {/*<img src="https://i.pinimg.com/originals/2d/fa/35/2dfa355f1d25b69d514147a48faea57f.gif" />*/}
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
