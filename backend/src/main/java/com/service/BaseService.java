package com.service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public abstract class BaseService {

    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("examplePU");

    protected EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
}
