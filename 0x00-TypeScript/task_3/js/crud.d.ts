import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): RowID;
export function updateRow(id: RowID, row: RowElement): RowID;
export function deleteRow(id: RowID): void;
