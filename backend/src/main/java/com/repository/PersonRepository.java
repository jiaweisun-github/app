package com.repository;

import java.util.List;

import com.entities.Person;
import jakarta.persistence.EntityManager;

public class PersonRepository {

    private final EntityManager em;

    public PersonRepository(EntityManager em) {
        this.em = em;
    }

    public Person save(Person person) {
        em.getTransaction().begin();
        em.persist(person);
        em.getTransaction().commit();
        return person;
    }

    public Person findById(Long id) {
        return em.find(Person.class, id);
    }

    public List<Person> findAll(){
        return em.createQuery(
            "SELECT p FROM Person p", Person.class)
            .getResultList();
    }

    public List<Person> findByName(String name) {
        return em.createQuery(
            "SELECT p FROM Person p WHERE p.name = :name", Person.class)
            .setParameter("name", name)
            .getResultList();
    }

    public List<Person> findByAddress(String address) {
        return em.createQuery(
            "SELECT p FROM Person p WHERE p.address = :address", Person.class)
            .setParameter("address", address)
            .getResultList();
    }

    public void delete(Long id) {
        em.getTransaction().begin();
        Person person = em.find(Person.class, id);
        if (person != null) {
            em.remove(person);
        }
        em.getTransaction().commit();
    }
}