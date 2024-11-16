export class DataTable {
    values: any[] = [];
    fields: Column[] = [];
    totalRecords: number = 0;
    page: number = 1;
    route: string = "";
    classBase?: Function;
    filters?: Filters
}

export class Column {
    field: string = "";
    header: string = "";
    width: string = "";
}

export class Filters {
  field: string = "";
  type: string = "";
}
