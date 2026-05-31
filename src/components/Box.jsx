import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import { projects } from "../data/projects.js";
import { AllProjects } from "./AllProjects";




export const Box = () => {

    const [open, setOpen] = React.useState(false);

    return(
        <>
            <button onClick={() => setOpen(true)} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> 
                Expand 
            </button>
        
        <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides.id}
        />
        </>
    )
}