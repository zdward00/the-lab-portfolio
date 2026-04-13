import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects =[
    {
        id: 1,
        title: "Pacific Park",
        description: "A photo of some rides at Pacific Park in California.",
        image: "projects/pacificpark.JPG",
        tags: ["Photoshop", "Photography"],
        demoUrl: "#",
        githubUrl: "#",
        motion: false,
    },

    {
        id: 2,
        title: "Motion Tiles",
        description: "Pulsing dots for a loading or transition scene.",
        image: "projects/motiontiles.mp4",
        tags: ["After Effects", "Motion"],
        demoUrl: "#",
        githubUrl: "#",
        motion: true,
    },

    {
        id: 3,
        title: "Little Lani's Text Logo",
        description: "The logo for Little Lani's, a mock brand inspired by my cousin.",
        image: "projects/littlelanis.png",
        tags: ["Illustrator", "Vector"],
        demoUrl: "#",
        githubUrl: "#",
        motion: false,
    }
]

export const Projects = () => {

    return (
        <section id="projects" className="py-23 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold md-4 text-center"> 
                {" "}
                Featured <span className="text-primary"> Projects </span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was created with attention to 
                    detail and quality.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                            <div key={key} className="group bg-card rounded-lg overlfow-hidden shadow-xs card-hover">
                                <div className="h-48 overflow-hidden">
                                    {project.motion === true && <video src={project.image} alt={project.title} loop autoPlay={true} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>}
                                    {project.motion != true && <img src={project.image} alt={project.title} className="w-full h-full object-cover
                                    transition-transform duration-500 group-hover:scale-110"/>}
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                        ))}
                                    </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}