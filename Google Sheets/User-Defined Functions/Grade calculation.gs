/**
 * Map numeric marks in column C to grades in column D using:
 * A >= 85, B: 70-84, C: 55-69, D: 40-54, F < 40
 * Demonstrates getRange().getValues(), loop, if-else mapping,
 * array building, and setValues().
 */

function calculateGrades() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const startRow = 2; // data begins from row 2 (row 1 is header)
  const marksCol = 3; // column C
  const gradeCol = 4; // column D
  const lastRow = sheet.getLastRow();
  const numRows = Math.max(0, lastRow - startRow + 1);
  
  if (numRows === 0) {
    return; // nothing to process
  }

  // 1) Read all marks in one call (2D array: [ [m1], [m2], ... ])
  const marksRange = sheet.getRange(startRow, marksCol, numRows, 1);
  const marksValues = marksRange.getValues();

  // 2) Prepare output array for grades (2D shape: rows x 1)
  const gradesOut = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    const cellVal = marksValues[i][0];
    const grade = toGrade(cellVal);
    gradesOut[i] = [grade];
  }

  // 3) Write all grades at once (efficient batch write)
  const gradeRange = sheet.getRange(startRow, gradeCol, numRows, 1);
  gradeRange.setValues(gradesOut);
}

/**
 * Convert a single cell value to a grade string.
 * Adjust thresholds as per your institutional policy.
 */
function toGrade(value) {
  const n = Number(value);
  if (!isFinite(n)) {
    return ""; // blank for non-numeric/empty cells
  }
  if (n >= 85) {
    return "A";
  }
  if (n >= 70) {
    return "B";
  }
  if (n >= 55) {
    return "C";
  }
  if (n >= 40) {
    return "D";
  }
  return "F";
}
