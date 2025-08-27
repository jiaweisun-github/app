
package com.service;
import java.util.*;

import com.entities.Product;
import com.repository.ProductRepository;

import jakarta.persistence.EntityManager;

public class ProductService extends BaseService {

    public Product saveProduct(Product product) {

        EntityManager em = getEntityManager();
        ProductRepository repo = new ProductRepository(em);
        repo.save(product);
        return product;
    }

    public Product findProductById(Long id) {

        EntityManager em = getEntityManager();
        ProductRepository repo = new ProductRepository(em);
        Product product = repo.findById(id);
        em.close();
        return product;
    }

    public List<Product> findAllProducts() {

        EntityManager em = getEntityManager();
        ProductRepository repo = new ProductRepository(em);
        List<Product> products = repo.findAll();
        em.close();
        return products;
    }
}
