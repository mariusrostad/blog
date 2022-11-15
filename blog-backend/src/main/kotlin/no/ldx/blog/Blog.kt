package no.ldx.blog

import javax.persistence.*

@Entity
@Table(name = "blog")
class Blog(
    id: Long?,
    @Column(length = 512)
    val heading: String,
    @Column(columnDefinition = "TEXT")
    val summary: String,
    @Column(columnDefinition = "TEXT")
    val content: String,
) {
    @Id
    @Column(name = "blog_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = id ?: -1
}
