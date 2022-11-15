package no.ldx.blog.config

import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Component

@Component
class BeanConfigs {

    @Bean
    fun logFilter(): FilterRegistrationBean<LogFilter> {
        val filterRegistrationBean = FilterRegistrationBean<LogFilter>()
        val logFilter = LogFilter()
        filterRegistrationBean.filter = logFilter
        filterRegistrationBean.order = Integer.MAX_VALUE
        return filterRegistrationBean
    }

}