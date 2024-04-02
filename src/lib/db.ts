import Dexie, { Table } from "dexie";

export interface userSearchTable {
  id?: number;
  searchHistory: string[];
}

export class CustomDexie extends Dexie {
  userSearchTable!: Table<userSearchTable>;

  constructor(schema: { [tableName: string]: string | null }) {
    super("database");
    // Remember to increment version number when you change the schema!
    this.version(1).stores(schema);
  }
}

export const databaseSchema = {
  userSearchTable: "++id, searchHistory",
};

export const db = new CustomDexie(databaseSchema);

// How to use the database we just created in a component
// If you did everything correctly, it should be fully typed:
// import { db } from "@/lib/db";
//
// db.exampleTable.add({value: 'this is an example value'})
