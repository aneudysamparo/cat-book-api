import { Document } from 'mongoose';
export interface Tenant extends Document{
    readonly subdomain: String,
    readonly tenantdb: String,
    readonly tenantadmin: String,
    readonly tenantpass: String,
}