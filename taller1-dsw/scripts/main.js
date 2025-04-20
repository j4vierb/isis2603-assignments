import { series } from "./data.js";
const seriesTable = document.getElementById('series-table');
const seasonsAverage = document.getElementById('seasons-average');
function calculateSeasonsAverage() {
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / series.length;
}
function renderSeriesTable() {
    series.forEach(serie => {
        const row = document.createElement('tr');
        row.setAttribute('id', 'serie-row');
        row.innerHTML = `
      <td><b>${serie.id}</b></td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        seriesTable.appendChild(row);
    });
    const averageSeasons = calculateSeasonsAverage();
    seasonsAverage.innerHTML = `${averageSeasons}`;
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('Ok');
    renderSeriesTable();
});
