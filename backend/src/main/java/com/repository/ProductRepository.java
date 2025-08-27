package com.repository;

import java.util.List;

import com.entities.Product;
import jakarta.persistence.EntityManager;

public class ProductRepository {

    private final EntityManager em;

    public ProductRepository(EntityManager em) {
        this.em = em;
    }

    public Product save(Product product) {
        em.getTransaction().begin();
        em.persist(product);
        em.getTransaction().commit();
        return product;
    }

    public Product findById(Long id) {
        return em.find(Product.class, id);
    }

    public List<Product> findAll(){
        return em.createQuery(
            "SELECT p FROM Product p", Product.class)
            .getResultList();
    }

    public List<Product> findByName(String name) {
        return em.createQuery(
            "SELECT p FROM Product p WHERE p.name = :name", Product.class)
            .setParameter("name", name)
            .getResultList();
    }

    public List<Product> findByAddress(String address) {
        return em.createQuery(
            "SELECT p FROM Product p WHERE p.address = :address", Product.class)
            .setParameter("address", address)
            .getResultList();
    }

    public void delete(Long id) {
        em.getTransaction().begin();
        Product product = em.find(Product.class, id);
        if (product != null) {
            em.remove(product);
        }
        em.getTransaction().commit();
    }
}