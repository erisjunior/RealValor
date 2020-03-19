import subMonths from 'date-fns/subMonths';
import subYears from 'date-fns/subYears';

const monthlyRevenue = 0.1 / 12;

function formatDirectTreasureChart(directTreasure) {
  const chartData = [];

  const now = new Date();

  const monthsUntilNow = directTreasure.yearsAgo * 12;

  let { amount } = directTreasure;

  for (let index = 0; index <= monthsUntilNow; index += 1) {
    const date = subMonths(now, monthsUntilNow - index);
    amount += amount * monthlyRevenue;
    chartData.push([date, amount]);
  }

  return { amount, chartData };
}

export function formatDirectTreasure(filter) {
  const now = Date.now();

  const initialAmount = filter.amount;
  const initialDate = subYears(now, filter.yearsAgo);

  const { amount, chartData } = formatDirectTreasureChart(filter);

  const revenue = amount - initialAmount;

  return { initialAmount, initialDate, amount, revenue, chartData, ...filter };
}

function formatBitcoinChart() {
  return { amount: 10, chartData: [] };
}

export function formatBitcoin(data, filter) {
  const now = Date.now();

  const initialAmount = filter.amount;
  const initialDate = subYears(now, filter.yearsAgo);

  const { amount, chartData } = formatBitcoinChart(data, filter);

  const revenue = amount - initialAmount;

  return { initialAmount, initialDate, amount, revenue, chartData, ...filter };
}
