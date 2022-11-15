package no.ldx.blog

class Permissions {

    companion object {
        const val None = 0
        const val ViewRoles = 1
        const val ManageRoles = 2
        const val ViewUsers = 4
        const val ConfigureAccessControl = 8
        const val Counter = 16
        const val Forecast = 32

        fun hasRole(currentRoles: Int, validateAgainst: Int): Boolean = currentRoles and validateAgainst != 0
    }

}