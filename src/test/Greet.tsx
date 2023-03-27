type GreetProps = {
  name?: string;
};
const Greet = ({ name }: GreetProps) => {
  return <>Hello {name}</>;
};

export default Greet;
