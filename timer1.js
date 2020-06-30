let myArgs = process.argv.slice(2);

for (argument of myArgs) {
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(argument);
  }, (argument * 1000))
}