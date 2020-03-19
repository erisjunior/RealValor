export function calcDirectTreasure(filter) {
  return {};
}

export function formatData(bitcoin, directTreasure) {
  const data = { bitcoin, directTreasure };

  data.bitcoin.chartData = [];
  data.directTreasure.chartData = [];

  return data;
}
