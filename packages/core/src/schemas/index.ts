/**
 * @module @minions-clients/sdk/schemas
 * Custom MinionType schemas for Minions Clients.
 */

import type { MinionType } from 'minions-sdk';

export const clientprofileType: MinionType = {
  id: 'clients-client-profile',
  name: 'Client profile',
  slug: 'client-profile',
  description: 'A client built from one or more job postings and interactions.',
  icon: '🤝',
  schema: [
    { name: 'personId', type: 'string', label: 'personId' },
    { name: 'organizationId', type: 'string', label: 'organizationId' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'firstSeenAt', type: 'string', label: 'firstSeenAt' },
    { name: 'totalJobsPosted', type: 'number', label: 'totalJobsPosted' },
    { name: 'totalContractsWithMe', type: 'number', label: 'totalContractsWithMe' },
    { name: 'averageBudget', type: 'number', label: 'averageBudget' },
    { name: 'rating', type: 'number', label: 'rating' },
    { name: 'tags', type: 'string', label: 'tags' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

export const clientinteractionType: MinionType = {
  id: 'clients-client-interaction',
  name: 'Client interaction',
  slug: 'client-interaction',
  description: 'A recorded touchpoint with a client across any channel.',
  icon: '💬',
  schema: [
    { name: 'clientId', type: 'string', label: 'clientId' },
    { name: 'type', type: 'select', label: 'type' },
    { name: 'occurredAt', type: 'string', label: 'occurredAt' },
    { name: 'summary', type: 'string', label: 'summary' },
    { name: 'sentiment', type: 'select', label: 'sentiment' },
    { name: 'threadId', type: 'string', label: 'threadId' },
  ],
};

export const clientpreferenceType: MinionType = {
  id: 'clients-client-preference',
  name: 'Client preference',
  slug: 'client-preference',
  description: 'An observed or stated preference of a client used to tailor future proposals.',
  icon: '🎯',
  schema: [
    { name: 'clientId', type: 'string', label: 'clientId' },
    { name: 'preference', type: 'string', label: 'preference' },
    { name: 'confidence', type: 'select', label: 'confidence' },
    { name: 'inferredFrom', type: 'string', label: 'inferredFrom' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const customTypes: MinionType[] = [
  clientprofileType,
  clientinteractionType,
  clientpreferenceType,
];

