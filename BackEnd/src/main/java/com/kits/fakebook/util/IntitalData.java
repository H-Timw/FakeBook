package com.kits.fakebook.util;

import com.github.javafaker.Faker;
import com.kits.fakebook.model.Post;
import com.kits.fakebook.model.User;
import com.kits.fakebook.repository.PostRepository;
import com.kits.fakebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.time.LocalDate;

@Component
public class IntitalData implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Override
    public void run(String... args) throws Exception {
        Faker faker = new Faker();

        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusYears(5);
        java.util.Date date = faker.date().between(
                java.sql.Date.valueOf(startDate),
                java.sql.Date.valueOf(endDate)
        );
        //user default to login
        User admin = new User();
        admin.setUsername("hao.doanminh");
        admin.setEmail("timw051201@gmail.com");
        admin.setPassword("8469");
        admin.setBio("Just a nor mal person");
        admin.setProfilePicture("https://i.ibb.co/fHH7t9m/359686976-265376716112236-2802863176676756692-n.jpg");
        admin.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        admin.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
        userRepository.save(admin);

        Timestamp createdAt = new Timestamp(date.getTime());

        for (int i = 0; i < 10; i++) {
            User user = new User();
            user.setUsername(faker.name().username());
            user.setEmail(faker.internet().emailAddress());
            user.setPassword(faker.internet().password());
            user.setBio(faker.lorem().sentence());
            user.setProfilePicture("https://source.unsplash.com/random/"+i);
            user.setCreatedAt(createdAt);
            user.setUpdatedAt(createdAt);
            userRepository.save(user);
        }

        for (int i = 0; i < 10; i++) {
            Post post = new Post();
            post.setContent(faker.lorem().paragraph());
            post.setPostImage("https://source.unsplash.com/random/"+i);
            post.setCreatedAt(createdAt);
            post.setUpdatedAt(createdAt);

            User user = userRepository.findRandomUser();
            post.setUser(user);

            postRepository.save(post);
        }
    }
}
