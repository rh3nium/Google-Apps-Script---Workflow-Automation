/**
 * Dynamically format an attendance sheet:
 * - Bold header with light background
 * - Highlight rows where % attendance < threshold
 * - Optionally color status markers (P/A/L)
 * Focused APIs: setFontWeight, setFontColor, setBackground, clearFormat
 */
function formatAttendance() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();
  const startDataRow = 2;

  if (lastRow < startDataRow) {
    // Nothing to format
    return;
  }

  // 1) Optional reset for deterministic styling
  const dataRange = sheet.getRange(startDataRow, 1, lastRow - startDataRow + 1, lastCol);
  dataRange.clearFormat();

  // 2) Header styling
  const header = sheet.getRange(1, 1, 1, lastCol);
  header.setFontWeight('bold').setBackground('#eef7ff').setFontColor('black');

  // 3) Shortage highlighting on rows using % in column J (10)
  const THRESHOLD = 75; // policy decision; adjust as needed
  const pctCol = 10;

  // Read percentages just once (then loop in memory if you want compute-heavy logic)
  const pctRange = sheet.getRange(startDataRow, pctCol, lastRow - startDataRow + 1, 1);
  const pctValues = pctRange.getValues(); // [[v], [v], ...]

  for (let i = 0; i < pctValues.length; i++) {
    const rowIndex = startDataRow + i;
    const v = Number(pctValues[i][0]);
    const rowRange = sheet.getRange(rowIndex, 1, 1, lastCol);

    if (isFinite(v) && v < THRESHOLD) {
      // Warning theme for shortage rows
      rowRange
        .setBackground('#fff3cd') // light amber
        .setFontColor('#cc0000'); // dark red text
    } else {
      // Ensure normal text color for non-shortage rows
      rowRange.setFontColor('black');
    }
  }

  // 4) Optional: status coloring for daily marks in D..I (4..9)
  const statusCols = { start: 4, end: 9 }; // adjust to your layout
  for (let c = statusCols.start; c <= statusCols.end; c++) {
    const colRange = sheet.getRange(startDataRow, c, lastRow - startDataRow + 1, 1);
    const vals = colRange.getValues();
    for (let i = 0; i < vals.length; i++) {
      const cell = sheet.getRange(startDataRow + i, c);
      const mark = String(vals[i][0]).trim().toUpperCase();
      if (mark === 'A') {
        cell.setFontColor('#cc0000').setBackground('#ffe5e5'); // absent - red
      } else if (mark === 'L') {
        cell.setFontColor('#8a6d3b').setBackground('#fff3cd'); // late - brown
      } else if (mark === 'P') {
        cell.setFontColor('black').setBackground('#eaffea'); // present - green
      } else {
        // Unknown/blank - white
        cell.setFontColor('black').setBackground('white');
      }
    }
  }
}
