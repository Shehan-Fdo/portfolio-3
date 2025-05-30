"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Portfolio() {
  // State for managing selected category filter
  const [selectedCategory, setSelectedCategory] = useState("all");
  // State for managing selected project in modal
  const [selectedProject, setSelectedProject] = useState(null);
  // State for managing window width
  const [windowWidth, setWindowWidth] = useState(0);

  // Effect to handle window resize and set initial width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // MODIFY THIS: Add or remove categories as needed
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "ui", label: "UI/UX" },
    // Add more categories here if needed
    // { id: "backend", label: "Backend" },
  ];

  // MODIFY THIS: Replace with your actual projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform", // Change project title
      category: "web", // Must match category id above
      image: "/projects/ecommerce.jpg", // Add your project image path
      description: "Modern e-commerce platform built with Next.js and React", // Project description
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"], // Technologies used
      liveUrl: "https://example.com", // Replace with actual live demo URL
      githubUrl: "https://github.com/Shehan-Fdo/project1", // Replace with actual GitHub URL
    },
    {
      id: 2,
      title: "Task Manager App",
      category: "web",
      image: "/projects/taskmanager.jpg",
      description: "Collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "Material-UI", "JavaScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Shehan-Fdo/project2",
    },
    {
      id: 3,
      title: "Weather App",
      category: "mobile",
      image: "/projects/weather.jpg",
      description: "Beautiful weather application with location-based forecasts",
      technologies: ["React Native", "API Integration", "AsyncStorage"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Shehan-Fdo/project3",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "ui",
      image: "/projects/portfolio.jpg",
      description: "Modern portfolio website with smooth animations",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Shehan-Fdo/project4",
    },
    {
      id: 5,
      title: "Chat Application",
      category: "web",
      image: "/projects/chat.jpg",
      description: "Real-time chat application with group messaging",
      technologies: ["Socket.io", "Express.js", "MongoDB", "React"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Shehan-Fdo/project5",
    },
    {
      id: 6,
      title: "Finance Tracker",
      category: "mobile",
      image: "/projects/finance.jpg",
      description: "Personal finance tracking app with expense analytics",
      technologies: ["React Native", "Chart.js", "SQLite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Shehan-Fdo/project6",
    },
    // Add more projects here following the same structure
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Function to open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close project modal
  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  // Determine how many technologies to show based on screen size
  const getTechLimit = () => {
    if (windowWidth === 0) return 3; // Default for SSR
    return windowWidth < 640 ? 2 : 3;
  };

  return (
    <div className="min-h-screen bg-[#222] text-white p-4 pt-15 sm:p-6 sm:pt-0">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - MODIFY TEXT HERE */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-orange-500">Portfolio</span> {/* Change title color here */}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills in web development, 
            mobile applications, and UI/UX design. {/* Modify description here */}
          </p>
        </div>

        {/* Category Filters - Responsive for mobile */}
        <div className="flex justify-center mb-6 sm:mb-8 px-4">
          <div className="flex gap-1 sm:gap-2 bg-[#222] p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-[#333] overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? "bg-orange-500 text-white" // Active category styling - change color here
                    : "text-gray-400 hover:text-white hover:bg-[#333]" // Inactive category styling
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#222] border border-[#333] rounded-xl sm:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => openProjectModal(project)}
            >
              {/* Project Image Placeholder - Replace with actual images */}
              <div className="relative h-36 sm:h-48 bg-[#333] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  {/* MODIFY THIS: Replace with actual Image component when you have project images */}
                  <div className="text-2xl sm:text-4xl text-gray-500 group-hover:scale-110 transition-transform duration-300">
                    📁
                  </div>
                  {/* Uncomment below when you have project images:
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  */}
                </div>
              </div>
              
              {/* Project Information */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {/* Show limited technologies based on screen size */}
                  {project.technologies.slice(0, getTechLimit()).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-[#333] text-xs rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > getTechLimit() && (
                    <span className="px-2 sm:px-3 py-1 bg-[#333] text-xs rounded-full text-gray-300">
                      +{project.technologies.length - getTechLimit()} more
                    </span>
                  )}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 text-xs sm:text-sm font-semibold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm font-semibold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal - Responsive modal for project details */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-[#222] border border-[#333] rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={closeProjectModal}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-white text-xl sm:text-2xl z-10 hover:rotate-90 transition-all duration-200"
                >
                  ×
                </button>
                
                {/* Project Image */}
                <div className="h-48 sm:h-64 bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-4xl sm:text-6xl text-gray-500">📁</div>
                  {/* MODIFY THIS: Replace with actual project image */}
                  {/* 
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
                
                {/* Project Details */}
                <div className="p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3">{selectedProject.title}</h2>
                  <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{selectedProject.description}</p>
                  
                  {/* Technologies Section */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-[#333] text-xs sm:text-sm rounded-lg text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons - Stack on mobile, side by side on desktop */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold transition-colors duration-200 text-center text-sm sm:text-base"
                    >
                      View Live Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#333] hover:bg-[#444] text-white px-4 sm:px-6 py-3 rounded-xl font-semibold transition-colors duration-200 text-center text-sm sm:text-base"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}