const stdin = process.stdin;
const stdout = process.stdout;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0062') {
    stdout.write('\x07');
  }
  if (!isNaN(key)) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      stdout.write('\x07');
    }, key * 1000);
  }
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
});