package no.ldx.blog

data class BlogCreateDto(
    val heading: String,
    val summary: String,
    val content: String,
) {
    fun toBlog(): Blog =
        Blog(
            id = null,
            heading = heading,
            summary = summary,
            content = content,
        )
}