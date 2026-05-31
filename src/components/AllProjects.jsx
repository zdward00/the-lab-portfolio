import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import * as React from "react";
import {motion, AnimatePresence } from "framer-motion"
//import { ImageGallery } from "./ImageGallery"
import { Box } from "./Box"
import { projects } from "../data/projects.js"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video"



const categories = ["all", "vector", "motion", "photography", "fashion"]
// const collections = ["rodeo", "lanis", "zerostate"]


export const AllProjects = () => {

    const [activeCategory, setActiveCategory] = useState("all"); //this should be how to categorize projects in the future, create a use state for active category, categories located in arrays
    // const [activeCollection, setActiveCollection] = useState("all");
    const [open, setOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory);
    // const collections = projects.filter((project) => activeCollection === "all" || project.collection === activeCollection);
    
    const relatedProjects = selectedProject
    ? projects.filter(
        (p) =>
            p.collection &&
            p.collection === selectedProject.collection &&
            p.id !== selectedProject.id
        )
    : [];

    const projectGroup = selectedProject
        ? projects.filter(
            (p) =>
                p.collection &&
                p.collection === selectedProject.collection
            )
        : [];

    const currentIndex = projectGroup.findIndex(
        (p) => p.id === selectedProject?.id
        );

    const goNext = () => {
        if (!projectGroup.length) return;
        const nextIndex = (currentIndex + 1) % projectGroup.length;
        setSelectedProject(projectGroup[nextIndex]);
    };

    const goPrev = () => {
        if (!projectGroup.length) return;
        const prevIndex = (currentIndex - 1 + projectGroup.length) % projectGroup.length;
        setSelectedProject(projectGroup[prevIndex]);
    };

    return (
        <section id="allprojects" className="py-23 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold md-4 text-center"> 
                {" "}
                All <span className="text-primary text-glow"> Projects </span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here you can find all of my projects, digital art, and photos. 
                </p>

                {/* likely want to change the styling of the buttons, hover if not active */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} 
                        onClick={() => setActiveCategory(category)} 
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                            {category}
                        </button>
                    ))}
                </div>
                
                
                {activeCategory && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, key) => (
                                    <div key={key} onClick={() => setSelectedProject(project)} className="bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer group">
                                        <div className="h-96 overflow-hidden">
                                            {project.category === "motion" && <video src={project.image} alt={project.title} controls className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-110"/>}
                                            {project.category != "motion" && <img src={project.image} alt={project.title} className="w-full h-full object-cover
                                            transition-transform duration-500 group-hover:scale-110"/>}
                                        </div>

                                        <div className="p-6">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag) => (
                                                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                                ))}
                                            </div>

                                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                                        
                                        </div>

                                    </div>        
                        ))}
                    </div>
                )}
                
                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-card max-w-4xl rounded-xl p-10 overflow-hidden relative">

                        <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 cursor-pointer"
                        >
                        <X />
                        </button>

                        <button
                            onClick={goPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2  rounded-full cursor-pointer"
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            onClick={goNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2  rounded-full cursor-pointer"
                        >
                            <ChevronRight />
                        </button>

                        <div className="grid md:grid-cols-2">
                        <div className="h-100 md:h-full relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                key={selectedProject.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.25 }}
                                className="w-full h-full"
                                >
                                {selectedProject.category === "motion" ? (
                                    <video
                                    src={selectedProject.image}
                                    controls
                                    className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                    />
                                )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">
                            {selectedProject.title}
                            </h2>

                            <p className="text-gray-600">
                            {selectedProject.description}
                            </p>

                            
                        </div>
                        </div>
                        {relatedProjects.length > 0 && (
                            <>
                                <h3 className="font-semibold mb-3 pt-6">Related Projects</h3>

                                <div className="flex gap-5 overflow-x-auto">
                                {relatedProjects.map((proj) => (
                                    <div
                                        key={proj.id}
                                        onClick={() => setSelectedProject(proj)}
                                        className={cn(
                                            "w-24 h-24 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200",
                                            
                                            // active state
                                            proj.id === selectedProject.id
                                            ? "border-primary scale-105"
                                            : "border-transparent",

                                            // hover state
                                            "hover:border-primary"
                                        )}
                                    >
                                    <div className="relative w-full h-full group">
                                        {proj.category === "motion" ? (
                                            <video src={proj.image} className="w-full h-full object-cover" />
                                        ) : (
                                            <img src={proj.image} className="w-full h-full object-cover" />
                                        )}

                                        <div className="absolute inset-0 backdrop-blur-sm bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs">
                                            View
                                        </div>
                                    </div>
                                    </div>
                                ))}
                                </div>
                                </>
                            )}
                            
                    </div>
                    </div>
                )}
                
                
                
                
            </div>
                
        </section>
    )
}