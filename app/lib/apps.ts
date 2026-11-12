const getALlData = async () => {
  "use cache";
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

export default getALlData;
