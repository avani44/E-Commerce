package com.ecom.ecommerce.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.ecommerce.model.User;

public interface UserRepository extends JpaRepository<User,Long> {

    User findByEmail(String email);
}