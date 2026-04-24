import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import * as React from "react";
import {motion, AnimatePresence } from "framer-motion"
//import { ImageGallery } from "./ImageGallery"
import { Box } from "./Box"
import { slides } from "../data/slides.js"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";



const projects =[
    {
        id: 1,
        title: "Nikes",
        description: "Sticker inspired by Frank Ocean's 'Nikes'",
        image: "projects/nikes.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "Blonded",
    },

    {
        id: 2,
        title: "MF LOU",
        description: "Sticker of my cat Louie inspired by legendary rapper MF DOOM",
        image: "projects/mflou.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "Lou",
    },

    {
        id: 3,
        title: "Little Lani's Text Logo",
        description: "The text logo for Little Lani's mock brand.",
        image: "projects/lanis.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "Blonded",
    },

    {
        id: 4,
        title: "Motion Tiles",
        description: "Pulsating background.",
        image: "projects/motiontiles.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },

    {
        id: 5,
        title: "Glitchy Shoe",
        description: "Rotating shoe with VHS effects.",
        image: "projects/shoe.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },

    {
        id: 6,
        title: "Zero State Hand",
        description: "Created for neofuturistic mock brand Zero//State.",
        image: "projects/hand.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "zerostate",
    },

    {
        id: 7,
        title: "Flying Birds",
        description: "Photo of some birds flying.",
        image: "projects/birds.JPG",
        tags: ["Photography"],
        category: "photography",
        collection: "",
    },

    {
        id: 8,
        title: "Boat On The River",
        description: "Boat travelling along the river.",
        image: "projects/boat.jpeg",
        tags: ["Photography"],
        category: "photography",
        collection: "",
    },

    {
        id: 9,
        title: "Pacific Park",
        description: "A couple rides at Pacific Park",
        image: "projects/pacificpark.JPG",
        tags: ["Photography"],
        category: "photography",
        collection: "",
    },
    {
        id: 10,
        title: "Astrothunder Hypercoaster",
        description: "Animated graphic for a hypercoaster inspired by Travis Scott's 'Astrothunder'",
        image: "projects/astrothunder.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 11,
        title: "Zero State Cube",
        description: "Loading screen animation for Zero//State",
        image: "projects/cube.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 12,
        title: "Glitch Effect",
        description: "Glitch and reflection effects on text",
        image: "projects/glitch.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 13,
        title: "Nike Glow",
        description: "A transitionary or finishing screen for Nike with glow and particle effects",
        image: "projects/glow.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 14,
        title: "Purple Haze",
        description: "Watch text disappear in a wisp of smoke",
        image: "projects/haze.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 15,
        title: "La Flame",
        description: "Flaming text inspired by Travis Scott moniker 'La Flame'",
        image: "projects/laflame.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "Rodeo",
    },
    {
        id: 16,
        title: "Melt Away",
        description: "Melting text",
        image: "projects/melt.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 17,
        title: "Neon Flicker",
        description: "A neon flickering sign",
        image: "projects/neonflicker.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 18,
        title: "Zero//State VHS",
        description: "Retro, VHS style effects applied to text",
        image: "projects/vhs.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 19,
        title: "Numbuh Zero",
        description: "Me as a Codename: Kids Next Door character",
        image: "projects/zero.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "",
    },
    {
        id: 20,
        title: "Ragers",
        description: "Hand drawn logo with computer generated text logo.",
        image: "projects/ragers.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "",
    },
    {
        id: 21,
        title: "Little Lani's Branding",
        description: "Branding guidelines for Little Lani's",
        image: "projects/llbranding.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "",
    },
    {
        id: 22,
        title: "Zero//State Gold",
        description: "Rotating gold logo for Zero//State",
        image: "projects/gold.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 23,
        title: "Adidas Logo",
        description: "Metallic render of the Adidas Trefoil logo",
        image: "projects/adidas.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 24,
        title: "Only You",
        description: "Photo that captures the vibe of Norfolk lounge, Only You",
        image: "projects/onlyyou.png",
        tags: ["Photography"],
        category: "photography",
        collection: "",
    },
    {
        id: 25,
        title: "CRT Effects",
        description: "Futuristic CRT effects on a photo of Travis Scott during the Utopia tour",
        image: "projects/crt.png",
        tags: ["Photoshop"],
        category: "photography",
        collection: "",
    },
    {
        id: 26,
        title: "Threshold Effects",
        description: "Threshold effects applied to a Travis Scott photo",
        image: "projects/threshold.png",
        tags: ["Photoshop"],
        category: "photography",
        collection: "",
    },
    {
        id: 27,
        title: "Louie",
        description: "A vectorized image of my cat, Louie",
        image: "projects/lou.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "Lou",
    },
    {
        id: 28,
        title: "Blonded Rodeo Hoodie",
        description: "A mockup of a hoodie for my favorite album, Rodeo, in the style of another favorite album, Blonde",
        image: "projects/hoodie.jpg",
        tags: ["Illustrator", "Vector", "Fashion"],
        category: "fashion",
        collection: "Rodeo",
    },
    {
        id: 29,
        title: "Printed Rodeo Hoodie",
        description: "A completed version of the Rodeo hoodie modeled by my brother",
        image: "projects/completehoodie.JPG",
        tags: ["Illustrator", "Vector", "Fashion"],
        category: "fashion",
        collection: "Rodeo",
    },
    {
        id: 30,
        title: "Rodeo Brutalism",
        description: "A brutalist t-shirt design using Travis Scott's Rodeo as inspiration. Also comes in black.",
        image: "projects/brutalist.jpg",
        tags: ["Illustrator", "Vector", "Fashion"],
        category:"fashion",
        collection: "Rodeo",
    },
    {
        id: 31,
        title: "Rodeo Poster",
        description: "A poster for Travis Scott's album Rodeo",
        image: "projects/rodeoposter.png",
        tags: ["Illustrator", "Vector", "Photoshop"],
        category: "vector",
        collection: "Rodeo",
    },
    {
        id: 32,
        title: "Norfolk Admirals Promo 1",
        description: "Promotional art for the Norfolk Admirals",
        image: "projects/admirals1.jpg",
        tags: ["Illustrator", "Vector", "Photoshop"],
        category: "vector",
        collection: "Sports",
    },
    {
        id: 33,
        title: "Norfolk Admirals Promo 2",
        description: "Another promo for the Norfolk Admirals",
        image: "projects/admirals2.jpg",
        tags: ["Illustrator", "Vector", "Photoshop"],
        category: "vector",
        collection: "Sports",
    },
    {
        id: 34,
        title: "Little Lani's T-shirt",
        description: "Merchandise for the Little Lani's Brand",
        image: "projects/lanisshirt.jpg",
        tags: ["Illustrator", "Vector", "Photoshop"],
        category: "fashion",
        collection: "Lanis",
    },
    {
        id: 35,
        title: "Wave Next Match Promo",
        description: "Promo material for local soccer club Wave Futbol Club",
        image: "projects/nextmatch.mp4",
        tags: ["After Effects", "Motion", "Photoshop"],
        category: "motion",
        collection: "Sports",
    },
    {
        id: 36,
        title: "Wave Match Schedule",
        description: "Spring '25 match schedule for Wave Futbol Club",
        image: "projects/wave.png",
        tags: ["Illustrator", "Vector", "Photoshop"],
        category: "vector",
        collection: "Sports",
    },
]



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