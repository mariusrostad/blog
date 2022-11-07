package no.ldx.blog

import javax.persistence.*

@Entity
@Table(name = "blog")
class Blog(
    id: Long?,
    @Column
    val heading: String,
    @Column
    val content: String,
    @Column
    val summary: String,
) {
    @Id
    @Column(name = "blog_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = id ?: -1
}