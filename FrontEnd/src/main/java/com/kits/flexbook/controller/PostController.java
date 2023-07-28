package com.kits.flexbook.controller;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.kits.flexbook.model.Post;
import com.kits.flexbook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
@RestController
@RequestMapping("/post")
public class PostController {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private ObjectMapper objectMapper;
    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Post> getAlPost() throws JsonProcessingException {
        List<Post> posts = postRepository.findAll();
        for (Post post : posts) {
            post.getUser().getUsername(); // Initialize the Hibernate proxy object
        }
        objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        return posts;
    }
    @PostMapping("/create-post")
    public Post createPost() throws JsonProcessingException {

    }

}
