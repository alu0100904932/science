const specialForms = Object.create(null);
const topEnv = Object.create(null);

specialForms["arr+"] = function(args, env) {
  if (args.length != 2)
    throw new Error ("Se esperaban dos argumentos");
  args = args.map((arg) => arg.evaluate(env));
  let mayor = 0;
  args.forEach((arg) => {
    if (!Array.isArray(arg))
      throw new Error ("Se esperaba un array")
    else
      if (mayor < arg.length)
        mayor = arg.length;
  });
  let aux = [];
  for (let i = 0; i < mayor; i++) {
    aux[i] = args[0][i] || 0;
    aux[i] += args[1][i] || 0;
  }
  return aux;
}

specialForms["arr-"] = function(args, env) {
  if (args.length != 2)
    throw new Error ("Se esperaban dos argumentos");
  args = args.map((arg) => arg.evaluate(env));
  let mayor = 0;
  args.forEach((arg) => {
    if (!Array.isArray(arg))
      throw new Error ("Se esperaba un array")
    else
      if (mayor < arg.length)
        mayor = arg.length;
  });
  let aux = [];
  for (let i = 0; i < mayor; i++) {
    aux[i] = args[0][i] || 0;
    aux[i] -= args[1][i] || 0;
  }
  return aux;
}

specialForms["arr*"] = function(args, env) {
  if (args.length != 2)
    throw new Error ("Se esperaban dos argumentos");
  args = args.map((arg) => arg.evaluate(env));
  let mayor = 0;
  args.forEach((arg) => {
    if (!Array.isArray(arg))
      throw new Error ("Se esperaba un array")
    else
      if (mayor < arg.length)
        mayor = arg.length;
  });
  let aux = [];
  for (let i = 0; i < mayor; i++) {
    aux[i] = args[0][i] || 0;
    aux[i] *= args[1][i] || 0;
  }
  return aux;
}

specialForms["arr/"] = function(args, env) {
  if (args.length != 2)
    throw new Error ("Se esperaban dos argumentos");
  args = args.map((arg) => arg.evaluate(env));
  let mayor = 0;
  args.forEach((arg) => {
    if (!Array.isArray(arg))
      throw new Error ("Se esperaba un array")
    else
      if (mayor < arg.length)
        mayor = arg.length;
  });
  let aux = [];
  for (let i = 0; i < mayor; i++) {
    aux[i] = args[0][i] || 0;
    if (args[1][i] == 0)
      throw new Error ("División por cero");
    aux[i] /= args[1][i] || 1;
  }
  return aux;
}

module.exports = {specialForms, topEnv}

