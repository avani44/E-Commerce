package com.ecom.ecommerce.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecom.ecommerce.model.Orders;
import com.ecom.ecommerce.model.User;

public interface OrderRepository extends JpaRepository<Orders,Long> {

    @Query("SELECT o from Orders o JOIN FETCH o.user")
    List<Orders> findAllOrdersWithUsers();

    List<Orders> findByUser(User user);

}