import { pgTable, varchar } from "drizzle-orm/pg-core"
import { createdAt, updatedAt } from "../schemahelpers"
import { relations } from "drizzle-orm"
import { JobListingTable } from "./jobListings"
import { OrganizationUserSettingsTable } from "./organizationUserSettings"

export const OrganizationTable = pgTable("organizations", {
  id: varchar().primaryKey(),// coming from clerk
  name: varchar().notNull(),
  imageUrl: varchar(),
  createdAt,
  updatedAt,
})

export const organizationRelations = relations(
  OrganizationTable,
  ({ many }) => ({
    jobListings: many(JobListingTable),
    organizationUserSettings: many(OrganizationUserSettingsTable),
  })
)