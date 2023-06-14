import AnchorLink from "react-anchor-link-smooth-scroll";
import WelcomePage from "./WelcomePage";
import './ScrollTab.css';
import { Box } from "@mui/material";

function ScrollTab() {
return (
    <div>
        <div className="titleheader">
            <h1>Hello instep technologies</h1>
        </div>
    <Box className="linkHeader">
        <AnchorLink className="scroll-link" href='#course'>Courses</AnchorLink>
	    <AnchorLink className="scroll-link" href='#article'>Articles</AnchorLink>
	    <AnchorLink className="scroll-link" href='#new'>New</AnchorLink>
	    <AnchorLink className="scroll-link" href='#second'>Second</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next1'>Next1</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next2'>Next2</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next3'>Next3</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next4'>Next4</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next5'>Next5</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next6'>Next6</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next7'>Next7</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next8'>Next8</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next9'>Next9</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next10'>Next10</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next11'>Next11</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next12'>Next12</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next13'>Next13</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next14'>Next14</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next15'>Next15</AnchorLink>
	    <AnchorLink className="scroll-link" href='#next16'>Next16</AnchorLink>
        </Box>
	<WelcomePage/>
	</div>
);
}

export default ScrollTab;
