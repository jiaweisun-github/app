package com.example;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.servlet.ServletContainer;

public class Application {
    public static void main(String[] args) throws Exception {
        ResourceConfig config = new ResourceConfig()
        .packages("com.controller")
        .register(org.glassfish.jersey.jackson.JacksonFeature.class);

        ServletContainer servletContainer = new ServletContainer(config);
        ServletHolder servletHolder = new ServletHolder(servletContainer);

        ServletContextHandler context = new ServletContextHandler(ServletContextHandler.NO_SESSIONS);
        context.setContextPath("/");
        context.addServlet(servletHolder, "/*");

        Server server = new Server(8080);
        server.setHandler(context);

        server.start();
        System.out.println("Jersey app started on http://localhost:8080/");
        server.join();
    }
}