package com.service;
import com.entities.Person;
import com.repository.PersonRepository;

import jakarta.persistence.EntityManager;

public class PersonService extends BaseService {

    public void savePerson(Person person) {
        EntityManager em = getEntityManager();
        PersonRepository repo = new PersonRepository(em);
        repo.save(person);
        em.close();
    }

    public Person findPersonById(Long id) {
        EntityManager em = getEntityManager();
        PersonRepository repo = new PersonRepository(em);
        Person person = repo.findById(id);
        em.close();
        return person;
    }
}