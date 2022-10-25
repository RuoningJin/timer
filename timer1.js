let arr = process.argv.slice(2);

const timer = (args) => {
  if (!args) {
    return args;
  }
  for (const arg of args) {
    if (arg < 0) {
      continue;
    }
    if (isNaN(arg)) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg * 1000);
  }
};

timer(arr);


/*
if no num
if NaN;
if -num;
*/