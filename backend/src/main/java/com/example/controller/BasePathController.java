package com.example.controller;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/")
public class BasePathController {

    @GET
    @Path("/success")
    @Produces(MediaType.TEXT_PLAIN)
    public String success() {
        return "Payment Successful!";
    }

    @GET
    @Path("/cancel")
    @Produces(MediaType.TEXT_PLAIN)
    public String cancel() {
        return "Payment Cancelled";
    }   
}