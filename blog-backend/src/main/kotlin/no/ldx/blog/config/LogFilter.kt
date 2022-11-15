package no.ldx.blog.config

import org.slf4j.MDC
import java.util.UUID
import javax.servlet.Filter
import javax.servlet.FilterChain
import javax.servlet.ServletRequest
import javax.servlet.ServletResponse
import javax.servlet.http.HttpServletRequest

class LogFilter : Filter {
    override fun doFilter(request: ServletRequest, response: ServletResponse, chain: FilterChain) {
        val httpRequest = request as HttpServletRequest
        val transactionid = httpRequest.getHeader("request-id") ?: UUID.randomUUID().toString()

        MDC.put("tid", transactionid)
        chain.doFilter(request, response)
        MDC.remove("tid")
    }
}
