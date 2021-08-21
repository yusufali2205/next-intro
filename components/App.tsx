import React from 'react';
import styles from './App.module.css';
import Paper from '@material-ui/core/Paper';

const App = () => (
  <Paper style={{height: "100vh"}}>
    <div className={styles.container}>
      <title>Intro - Yusuf Ali</title>

      <main>
        <h1 className={styles.title}>
          Welcome to my page
        </h1>

        <p className={styles.description}>
          This page will evolve to a better site in future...
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/yusufali2205" className={styles.card}>
            <h3>My Github &rarr;</h3>
            <p>Find projects and repos I contribute to.</p>
          </a>

          <a href="https://www.linkedin.com/in/yali22/" className={styles.card}>
            <h3>LinkedIn &rarr;</h3>
            <p>Learn more about me and my experience!</p>
          </a>

          <a
            href="https://www.instagram.com/yali47/"
            className={styles.card}
          >
            <h3>Insta &rarr;</h3>
            <p>Catch me on social media.</p>
          </a>
        </div>
      </main>

      <footer>
        See you later!
      </footer>
    </div>
  </Paper>
);

export default App;
