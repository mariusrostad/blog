package no.ldx.blog

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1")
class BlogController(
    private val blogRepository: BlogRepository,
) {

    @GetMapping("/blogs")
    fun allBlogs(): List<Blog> =
        blogRepository.findAll()

    @PostMapping("/blogs/blog")
    fun createBlog(@RequestBody blog: BlogCreateDto): Blog? {
        return try {
            blogRepository.save(blog.toBlog())
        } catch (e: IllegalArgumentException) {
            e.printStackTrace()
            null
        }
    }

    @GetMapping("/blogs/blog")
    fun getBlog(@RequestParam id: Long): Blog =
        blogRepository.findById(id).orElseThrow { throw ResourceNotFoundException() }

}

@ResponseStatus(value = HttpStatus.NOT_FOUND)
class ResourceNotFoundException : RuntimeException()