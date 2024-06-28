package com.Dashboard.Services;


import com.Dashboard.Model.User;
import com.Dashboard.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public  UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> allUsers() {
        List<User> users = new ArrayList<User>();

        userRepository.findAll().forEach(users::add);
        return users;
    }
}
