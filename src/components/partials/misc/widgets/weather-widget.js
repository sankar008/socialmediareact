export default function WeatherWidget() {
    return (
        <div class="card is-weather-card has-background-image" data-background="assets/img/illustrations/cards/weather-bg.svg">
            <div class="card-heading">
                <div class="dropdown is-spaced is-accent is-right dropdown-trigger is-light">
                    <div>
                        <div class="button">
                            <i data-feather="more-vertical"></i>
                        </div>
                    </div>
                    <div class="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="map-pin"></i>
                                    <div class="media-content">
                                        <h3>Change City</h3>
                                        <small>Change the displayed city.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="rotate-ccw"></i>
                                    <div class="media-content">
                                        <h3>Synchronize</h3>
                                        <small>Synchronize with a weather source.</small>
                                    </div>
                                </div>
                            </a>
                            <a class="dropdown-item">
                                <div class="media">
                                    <i data-feather="settings"></i>
                                    <div class="media-content">
                                        <h3>Settings</h3>
                                        <small>Access widget settings.</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="trash-2"></i>
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
                        <i data-feather="sun"></i>
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
                        <i data-feather="sun"></i>
                        <span>69°</span>
                    </div>
                    <div class="day">
                        <span>Tue</span>
                        <i data-feather="cloud-lightning"></i>
                        <span>74°</span>
                    </div>
                    <div class="day">
                        <span>Wed</span>
                        <i data-feather="cloud-lightning"></i>
                        <span>73°</span>
                    </div>
                    <div class="day">
                        <span>Thu</span>
                        <i data-feather="sun"></i>
                        <span>68°</span>
                    </div>
                    <div class="day">
                        <span>Fri</span>
                        <i data-feather="cloud-drizzle"></i>
                        <span>55°</span>
                    </div>
                    <div class="day">
                        <span>Sat</span>
                        <i data-feather="cloud-rain"></i>
                        <span>58°</span>
                    </div>
                    <div class="day">
                        <span>Sun</span>
                        <i data-feather="sun"></i>
                        <span>64°</span>
                    </div>
                </div>
                <div class="current-date-location has-text-centered"> 
                    <span class="date">Sunday, 18th 2018</span>
                    <span class="location"> <i data-feather="map-pin"></i> Los Angeles, CA</span>
                </div>
            </div>
        </div>
    )
}
