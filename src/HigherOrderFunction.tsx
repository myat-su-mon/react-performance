const App = () => {
  // const calculate = (
  //   x: number,
  //   y: number,
  //   callback: (x: number, y: number) => void
  // ) => {
  //   return callback(x, y);
  // };
  // const addFunc = (x: number, y: number) => {
  //   return x + y;
  // };
  // const subFunc = (x: number, y: number) => {
  //   return x - y;
  // };
  // console.log(calculate(1, 3, subFunc));

  const greet = (prefix: string) => {
    return function (name: string) {
      console.log(`${prefix} ${name}`);
    };
  };

  const sayHi = greet("hello");
  sayHi("myat");

  return <div>App</div>;
};

export default App;
