package no.ldx.blog

import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface BlogRepository : PagingAndSortingRepository<Blog, Long> {
    // fun findAll(pagable: Pageable): Page<Blog>
}
