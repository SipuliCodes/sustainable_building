import readNDJSONStream from "ndjson-readablestream";

const fetchDataStream = async ({ id, setFn }) => {
  const response = await fetch(
    `https://hackathon.kvanttori.fi/buildings/${id}/streams`
  );

  if (!response.body) return;

  for await (const data of readNDJSONStream(response.body)) {
    setFn(data);
  }
};

export default {fetchDataStream}
