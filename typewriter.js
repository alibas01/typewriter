let sentence = "tiger tiger tiger ROOOAAAAAR!";
let delay = 50;
sentence = sentence + '\n';
for (const char of sentence) {
  delay += 100;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
};