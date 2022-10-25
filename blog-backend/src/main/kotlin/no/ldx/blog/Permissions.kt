package no.ldx.blog

class Permissions {

    companion object {
        val None = 0
        val ViewRoles = 1
        val ManageRoles = 2
        val ViewUsers = 4
        val ConfigureAccessControl = 8
        val Counter = 16
        val Forecast = 32

        fun hasRole(currentRoles: Int, validateAgainst: Int): Boolean = currentRoles and validateAgainst != 0
    }

}