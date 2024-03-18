import { expect, test } from "vitest";
import { indexedDB, IDBKeyRange } from "fake-indexeddb";
import Dexie from "dexie";

Dexie.dependencies.indexedDB = indexedDB;
Dexie.dependencies.IDBKeyRange = IDBKeyRange;

import { CustomDexie, databaseSchema } from "../lib/db";

test("db", async () => {
  const testDb = new CustomDexie(databaseSchema);
  testDb.userSearchTable.clear();
  testDb.userSearchTable.add({ searchHistory: ["a", "b"] });

  const firstRow = await testDb.userSearchTable.get(1);
  const secondRow = await testDb.userSearchTable.get(2);

  expect(firstRow?.searchHistory[0]).toEqual("a");
  expect(secondRow).toBeUndefined();
});
