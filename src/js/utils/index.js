export function classList(...args) {
  const classes = [];

  for (var i = 0; i < args.length; i++) {
    if (args[i]) {
      if (args[i] instanceof Array) {
        args[i] = args[i].join(' ');
      }

      classes.push(args[i]);
    }
  }

  return classes.join(' ');
}
