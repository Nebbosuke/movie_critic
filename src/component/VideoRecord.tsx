import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Trailer from "./Trailer";

type movie = {
  src: string[];
  title: string;
};

type record = {
  record: movie[];
};

const VideoRecord: React.FC<record> = ({ record }) => {
  return (
    <div className="pb-72">
      {record.map((movie, index) => (
        <Accordion
          key={index}
          sx={{
            background: "#1A1A1A",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="inherit" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className="flex flex-row items-center gap-1 text-base md:text-lg lg:text-xl text-yellow-600">
              {movie.title}
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {movie.src.map((link, index) => (
              <div key={index} className="flex flex-col">
                <Trailer src={link} />
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default VideoRecord;
