import { Briefcase, Camera, Heart, Zap } from "react-feather";

export default function UserBadge() {
  return (
    <>
      <div className="user-badges">
        <div className="hexagon is-red">
          <div>
            <Heart size={16} color="#fff" />
          </div>
        </div>
        <div className="hexagon is-green">
          <div>
            <Camera size={16} color="#fff" />
          </div>
        </div>
        <div className="hexagon is-accent">
          <div>
            <Zap size={16} color="#fff" />
          </div>
        </div>
        <div className="hexagon is-blue">
          <div>
            <Briefcase size={16} color="#fff" />
          </div>
        </div>
      </div>
    </>
  );
}
