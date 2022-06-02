<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Post;
use App\Repository\PostRepository;

class PostController extends AbstractController
{
    // #[Route('/post', name: 'app_post')]
    // public function index(): Response
    // {
    //     return $this->render('post/index.html.twig', [
    //         'controller_name' => 'PostController',
    //     ]);
    // }

        /**
     * @Route("/post", name="app_post")
     * @return Response
     */
    public function indexPost(PostRepository $repository)
    {
        $posts = $repository->findAll();

        return $this->render('post/index.html.twig', [
            'posts' => $posts
        ]);
    }

    /**
    * @param Post $post
    * @return Response
    * @Route("/posts/{title}", name="app_posts_show")
    */
    public function show(Post $post): Response
    {

        return $this->render('posts/show.html.twig',[
            'post' => $post
        ]);
    }

    /**
     * @Route("/post/new", name="post_new")
     */
    public function new(EntityManagerInterface $entityManager): Response
    {
        $posts = new Post();
        $post->setTitle('Un body pillow')
            ->setDescription('Description cool')
            ->setPrice(rand(1, 1000))
            ->setPhoto('/public/images/astolfo_2785.jpg')
            ->setPublishDate(new \DateTime('now'));
        
        $entityManager->persist($post);
        $entityManager->flush();

        return new Response(sprintf('Un nouveau message a été ecrit par username%s',
            $posts->getUsername()
        ));
    }
}
