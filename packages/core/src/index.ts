/**
 * Minions Clients SDK
 *
 * Client profiles built from job interactions, communications, and contracts
 *
 * @module @minions-clients/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Clients.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
