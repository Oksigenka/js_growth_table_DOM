'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const updateButtons = () => {
  const allRows = table.rows.length;
  const allCols = table.rows[0].cells.length;

  appendRow.disabled = allRows >= 10;
  removeRow.disabled = allRows <= 2;
  appendColumn.disabled = allCols >= 10;
  removeColumn.disabled = allCols <= 2;
};

appendRow.addEventListener('click', () => {
  const newRow = table.insertRow(-1);
  const numberOfColumns = table.rows[0].cells.length;

  for (let i = 0; i < numberOfColumns; i++) {
    const newCell = newRow.insertCell(-1);

    newCell.innerHTML = '';
  }

  updateButtons();
});

removeRow.addEventListener('click', () => {
  const allRows = table.rows.length;

  if (allRows > 2) {
    table.deleteRow(allRows - 1);
  }

  updateButtons();
});

appendColumn.addEventListener('click', () => {
  const allRow = table.rows;

  for (let i = 0; i < allRow.length; i++) {
    const newCell = allRow[i].insertCell(-1);

    newCell.innerHTML = '';
  }

  updateButtons();
});

removeColumn.addEventListener('click', () => {
  const allRows = table.rows;
  const index = 1;
  const allColumns = table.rows[0].cells.length;

  if (allColumns > 2) {
    for (let i = 0; i < allRows.length; i++) {
      if (allRows[i].cells.length > index) {
        allRows[i].deleteCell(index);
      }
    }
  }

  updateButtons();
});

updateButtons();
