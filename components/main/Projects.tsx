import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/hogwartshunt.png"
          title="Hogwarts Hunt"
          description={
            "In Hogwarts Hunt Quest, players are tested on various soft skills, turning every step of the journey into a learning adventure. Enhance your abilities in:" +
            "\nDecision Making: Choose wisely at every crossroad." +
            "\nTime Management: Race against time to unravel the mysteries." +
            "\nCritical Thinking: Solve puzzles that challenge your intellect." +
            "\nCreativity: Think outside the box to find hidden clues." +
            "\nPersistence and Perseverance: Overcome obstacles and never give up."
          }
        />
        <ProjectCard
          src="/img_generator.png"
          title="Character Generator"
          description="Custom Character Image Generation: Powered by Stability.ai's RestAPIs, our Flask-based web app on AWS EC2 allows the creation of unique character images.
          Efficient Storage and Retrieval: Google Cloud Services are utilized for optimal management of image data.
          Scalable Data Management: MongoDB backs our application, ensuring that data handling is both smooth and scalable.
          Personalized Character Styles: With Stability.ai gRPC APIs, users can train models to generate characters in their unique style.
          Image Outline Generation: Provide an image outline, and we will generate a character matching your outline."
        />
        <ProjectCard
          src="/ecommerce.png"
          title="Django Ecommerce Website"
          description="E-commerce website built with Django. It has following functionality:

          user registration, 
          add / change user billing address, 
          add / remove item from cart, 
          change the default billing address during the checkout process, 
          apply a promotion code during the checkout process, 
          pay for a order using Stripe, 
          list all proceeded orders, 
          request a refund for a order, 
          The purpose of this project was to learn Django Framework."
        />
      </div>
    </div>
  );
};

export default Projects;
