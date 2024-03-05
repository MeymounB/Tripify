import Dexie, { Table } from "dexie";

// export interface exampleTableType {
//   id?: number;
//   value: string
// }

export class CustomDexie extends Dexie {
  //   exampleTable!: Table<exampleTableType>;

  constructor(schema: { [tableName: string]: string | null }) {
    super("database");
    // Remember to increment version number when you change the schema!
    this.version(1).stores(schema);
  }
}

export const db = new CustomDexie({
  // add one or more Dexie tables to the schema here
  // Format =
  // tableName: '++id, firstKey, secondKey'
  // So, with our current example =
  // exampleTable: '++id, value'
});

// How to use the database we just created in a component
// If you did everything correctly, it should be fully typed:
// import { db } from "@/lib/db";
//
// db.exampleTable.add({value: 'this is an example value'})
