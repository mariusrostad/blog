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

fun toBlogDto(blog: Blog): BlogDto =
    BlogDto(
        id = blog.id,
        heading = blog.heading,
        summary = blog.summary,
        content = blog.content,
    )

data class BlogDto(
    val id: Long,
    val heading: String,
    val summary: String,
    val content: String,
)