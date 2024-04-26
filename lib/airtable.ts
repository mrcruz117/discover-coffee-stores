import { AirtableRecordType } from "@/types";

var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  "appYAR14pbpqCcymG"
);

const table = base("Table 1");

export const findRecordByFilter = async (id: string) => {
  const findRecords = await table
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage();

  const allRecords = findRecords.map((record: AirtableRecordType) => {
    return {
      recordId: record.id,
      ...record.fields,
    };
  });

  return allRecords;
};

export const createCoffeeStore = async (id: string) => {
  const records = await findRecordByFilter(id);

  if (records.length > 0) {
    // create
  } else {
    // return
  }
};
