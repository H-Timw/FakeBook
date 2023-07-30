package com.kits.fakebook.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.kits.fakebook.model.Post;
import com.kits.fakebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
@RestController
@RequestMapping("")
public class PostController {
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private ObjectMapper objectMapper;
    @GetMapping(value = "/posts", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Post> getPost(){
        List<Post> posts = postRepository.findAll();
        for(Post post : posts){
            post.getUser().getUserId();
        }
        objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        return posts.stream().sorted((Post e1, Post e2) -> e2.getUpdatedAt()
                .compareTo(e1.getUpdatedAt())).collect(Collectors.toList());
        // so sanhs o day hay o javascript deu duoc
        // co the su dung query jql de sort cho bai viet gan nhat hien thi len truoc.
    }
    @PostMapping("/create-post")
    public ResponseEntity<Post> createPost(@RequestBody Post post){
        Timestamp now = new Timestamp(System.currentTimeMillis());
        post.setCreatedAt(now);
        post.setUpdatedAt(now);
        Post savedPost = postRepository.save(post);
        return new ResponseEntity<>(savedPost, HttpStatus.CREATED);
    }
}
