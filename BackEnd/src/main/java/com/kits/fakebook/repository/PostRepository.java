package com.kits.fakebook.repository;
import com.kits.fakebook.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
