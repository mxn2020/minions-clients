"""
Minions Clients SDK — Type Schemas
Custom MinionType schemas for Minions Clients.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

client_profile_type = MinionType(
    id="clients-client-profile",
    name="Client profile",
    slug="client-profile",
    description="A client built from one or more job postings and interactions.",
    icon="🤝",
    schema=[
        FieldDefinition(name="personId", type="string", label="personId"),
        FieldDefinition(name="organizationId", type="string", label="organizationId"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="firstSeenAt", type="string", label="firstSeenAt"),
        FieldDefinition(name="totalJobsPosted", type="number", label="totalJobsPosted"),
        FieldDefinition(name="totalContractsWithMe", type="number", label="totalContractsWithMe"),
        FieldDefinition(name="averageBudget", type="number", label="averageBudget"),
        FieldDefinition(name="rating", type="number", label="rating"),
        FieldDefinition(name="tags", type="string", label="tags"),
        FieldDefinition(name="notes", type="string", label="notes"),
    ],
)

client_interaction_type = MinionType(
    id="clients-client-interaction",
    name="Client interaction",
    slug="client-interaction",
    description="A recorded touchpoint with a client across any channel.",
    icon="💬",
    schema=[
        FieldDefinition(name="clientId", type="string", label="clientId"),
        FieldDefinition(name="type", type="select", label="type"),
        FieldDefinition(name="occurredAt", type="string", label="occurredAt"),
        FieldDefinition(name="summary", type="string", label="summary"),
        FieldDefinition(name="sentiment", type="select", label="sentiment"),
        FieldDefinition(name="threadId", type="string", label="threadId"),
    ],
)

client_preference_type = MinionType(
    id="clients-client-preference",
    name="Client preference",
    slug="client-preference",
    description="An observed or stated preference of a client used to tailor future proposals.",
    icon="🎯",
    schema=[
        FieldDefinition(name="clientId", type="string", label="clientId"),
        FieldDefinition(name="preference", type="string", label="preference"),
        FieldDefinition(name="confidence", type="select", label="confidence"),
        FieldDefinition(name="inferredFrom", type="string", label="inferredFrom"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

custom_types: list[MinionType] = [
    client_profile_type,
    client_interaction_type,
    client_preference_type,
]

