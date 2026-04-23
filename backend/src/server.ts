import app from './app.js';

const PORT = process.env.PORT || 5175;

app.listen(PORT, () => {
  console.log(`🎬 CINQ backend running on port ${PORT}`);
});