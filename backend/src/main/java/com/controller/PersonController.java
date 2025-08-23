package com.controller;

import com.entities.Person;
import com.service.PersonService;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.*;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/jakarta")
public class PersonController {

    private final PersonService personService = new PersonService();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response createPerson(Person person) {
        personService.savePerson(person);
        return Response.ok("Received: " + person.getName() + ", " + person.getAddress()).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getPersonById(@PathParam("id") Long id) {
        Person person = personService.findPersonById(id);
        if (person != null) {
            return Response.ok(person).build();
        } else {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}