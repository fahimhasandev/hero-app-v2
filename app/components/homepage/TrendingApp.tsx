const TrendingApp = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  console.log(data);
  return <div></div>;
};

export default TrendingApp;
