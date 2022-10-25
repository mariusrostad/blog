package no.ldx.blog

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

internal class PermissionsTest {

    @Test
    fun `hasRole should return true for role the user have`() {
        val currentRole = Permissions.ViewRoles + Permissions.ViewUsers

        assertTrue(Permissions.hasRole(currentRole, Permissions.ViewRoles))
        assertTrue(Permissions.hasRole(currentRole, Permissions.ViewUsers))
        assertFalse(Permissions.hasRole(currentRole, Permissions.ManageRoles))
    }

}