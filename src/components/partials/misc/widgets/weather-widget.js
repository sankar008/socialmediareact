import { useState } from "react";
import {
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  MapPin,
  MoreVertical,
  RotateCcw,
  Settings,
  Sun,
  Trash2,
} from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function WeatherWidget() {
  const [activeDropDown, setActiveDropDown] = useState(false);
  return (
    <div class="card is-weather-card has-background-image">
      <div class="card-heading">
        <div
          class={`dropdown is-spaced is-accent is-right dropdown-trigger is-light ${
            activeDropDown ? "is-active" : ""
          }`}
        >
          <div>
            <OutsideClickHandler
              onOutsideClick={() => {
                setActiveDropDown(false)
              }}
            >
              <div
                class="button"
                onClick={() => setActiveDropDown(!activeDropDown)}
              >
                <MoreVertical />
              </div>
            </OutsideClickHandler>
          </div>
          <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                <div class="media">
                  <MapPin />
                  <div class="media-content">
                    <h3>Change City</h3>
                    <small>Change the displayed city.</small>
                  </div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="media">
                  <RotateCcw />
                  <div class="media-content">
                    <h3>Synchronize</h3>
                    <small>Synchronize with a weather source.</small>
                  </div>
                </div>
              </a>
              <a class="dropdown-item">
                <div class="media">
                  <Settings />
                  <div class="media-content">
                    <h3>Settings</h3>
                    <small>Access widget settings.</small>
                  </div>
                </div>
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                <div class="media">
                  <Trash2 />
                  <div class="media-content">
                    <h3>Remove</h3>
                    <small>Removes this widget from your feed.</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="temperature">
          <span>71</span>
        </div>
        <div class="weather-icon">
          <div>
            <Sun />
            <h4>Sunny</h4>
            <div class="details">
              <span>Real Feel: 78° </span>
              <span>Rain Chance: 5%</span>
            </div>
          </div>
        </div>
        <div class="previsions">
          <div class="day">
            <span>Mon</span>
            <Sun />
            <span>69°</span>
          </div>
          <div class="day">
            <span>Tue</span>
            <CloudLightning />
            <span>74°</span>
          </div>
          <div class="day">
            <span>Wed</span>
            <CloudLightning />
            <span>73°</span>
          </div>
          <div class="day">
            <span>Thu</span>
            <Sun />
            <span>68°</span>
          </div>
          <div class="day">
            <span>Fri</span>
            <CloudDrizzle />
            <span>55°</span>
          </div>
          <div class="day">
            <span>Sat</span>
            <CloudRain />
            <span>58°</span>
          </div>
          <div class="day">
            <span>Sun</span>
            <Sun />
            <span>64°</span>
          </div>
        </div>
        <div class="current-date-location has-text-centered">
          <span class="date">Sunday, 18th 2018</span>
          <span class="location">
            <MapPin /> Los Angeles, CA
          </span>
        </div>
      </div>
    </div>
  );
}
