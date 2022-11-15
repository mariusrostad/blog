package no.ldx.blog

import org.slf4j.LoggerFactory
import org.springframework.data.domain.Pageable
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/api/v1/blogs")
class BlogController(
    private val blogRepository: BlogRepository,
) {

    private val logger = LoggerFactory.getLogger(BlogController::class.java)

    @GetMapping
    fun allBlogs(pageable: Pageable): Iterable<Blog> = blogRepository.findAll(pageable)

    @GetMapping("/blog")
    fun getBlog(@RequestParam id: Long): Blog =
        blogRepository.findById(id).orElseThrow { throw ResourceNotFoundException() }

    @PostMapping("/blog")
    fun createBlog(@RequestBody blog: BlogCreateDto): Blog {
        try {
            val saved = blogRepository.save(blog.toBlog())
            logger.info("function=createBlog id={}", saved.id)
            return saved
        } catch (e: IllegalArgumentException) {
            e.printStackTrace()
            throw ResourceNotFoundException()
        }
    }

    @PutMapping("/blog")
    fun alter(@RequestBody blog: BlogDto): Blog {
        val entity = blogRepository.findById(blog.id).orElseThrow {
            logger.warn("function=alter id={} message=\"Accessing a resource that does not exist\"", blog.id)
            throw ResourceNotFoundException()
        }

        val altered = Blog(id = entity.id, heading = blog.heading, summary = blog.summary, content = blog.content)
        return blogRepository.save(altered)
    }

}

@RestControllerAdvice
class BlogControllerAdvice {

    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    @ExceptionHandler(ResourceNotFoundException::class)
    fun resourceNotFoundException(): String {
        return "Not found"
    }

}

@ResponseStatus(value = HttpStatus.NOT_FOUND)
class ResourceNotFoundException : RuntimeException()
