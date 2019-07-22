import * as mongoose from 'mongoose';

export const TenantSchema = new mongoose.Schema({
  subdomain: String,
  tenantdb: String,
  tenantadmin: String,
  tenantpass: String,
});
