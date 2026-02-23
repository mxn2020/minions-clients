"""
Minions Clients Python SDK

Client profiles built from job interactions, communications, and contracts
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Clients.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
