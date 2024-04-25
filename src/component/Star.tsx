import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

type starprops = {
  rate?: number;
};

const Star: React.FC<starprops> = ({ rate }) => {
  return (
    <div className="text-white">
      <div>
        {rate === 0 && (
          <div>
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        )}
        {rate === 0.5 && (
          <div>
            <StarHalfIcon color="inherit" />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        )}
        {rate === 1 && (
          <div>
            <StarRateIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        )}
        {rate === 1.5 && (
          <div>
            <StarRateIcon />
            <StarHalfIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        )}
        {rate === 2 && (
          <div>
            <StarRateIcon />
            <StarRateIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        )}
        {rate === 2.5 && (
          <div>
            <StarRateIcon />
            <StarRateIcon />
            <StarHalfIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        )}
        {rate === 3 && (
          <div>
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
        )}
        {rate === 3.5 && (
          <div className="text-copper">
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarHalfIcon />
            <StarOutlineIcon />
          </div>
        )}
        {rate === 4 && (
          <div className="text-silver">
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarOutlineIcon />
          </div>
        )}
        {rate === 4.5 && (
          <div className="text-gold">
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarHalfIcon />
          </div>
        )}
        {rate === 5 && (
          <div className="text-red-600">
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </div>
        )}
        {rate === 99 && (
          <div className="text-white text-base sm:text-xl">onGoing...</div>
        )}
      </div>
    </div>
  );
};

export default Star;
