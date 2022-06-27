import { Bell, Image, MessageSquare, Youtube } from "react-feather";
import { useState } from "react";


export const NotificationsDropdown = () => {
    let [isActive, setisActive] = useState();

    return (
        <div class="navbar-item is-icon drop-trigger" onBlur={(() => setisActive(false))}> 
            <a class="icon-link" onClick={() => setisActive(!isActive)} href="javascript:void(0);" >
                <Bell />
                <span class="indicator"></span>
            </a>

            <div class={`nav-drop ${isActive ? 'is-active' : ''}`}>
                <div class="inner">
                    <div class="nav-drop-header">
                        <span>Notifications</span>
                        <a href="#">
                            <Bell />
                        </a>
                    </div>
                    <div class="nav-drop-body is-notifications">
                        {/* Notification */}
                        <div class="media">
                            <figure class="media-left">
                                <p class="image">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=male" data-demo-src="assets/img/avatars/david.jpg" alt="" />
                                </p>
                            </figure>
                            <div class="media-content">
                                <span><a href="#">David Kim</a> commented on <a href="#">your post</a>.</span>
                                <span class="time">30 minutes ago</span>
                            </div>
                            <div class="media-right">
                                <div class="added-icon">
                                    <MessageSquare />
                                </div>
                            </div>
                        </div>
                        {/* Notification */}
                        <div class="media">
                            <figure class="media-left">
                                <p class="image">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=male" data-demo-src="assets/img/avatars/daniel.jpg" alt="" />
                                </p>
                            </figure>
                            <div class="media-content">
                                <span><a href="#">Daniel Wellington</a> liked your <a href="#">profile.</a></span>
                                <span class="time">43 minutes ago</span>
                            </div>
                            <div class="media-right">
                                <div class="added-icon">
                                    <heart />
                                </div>
                            </div>
                        </div>
                        {/* Notification */}
                        <div class="media">
                            <figure class="media-left">
                                <p class="image">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=male" data-demo-src="assets/img/avatars/stella.jpg" alt="" />
                                </p>
                            </figure>
                            <div class="media-content">
                                <span><a href="#">Stella Bergmann</a> shared a <a href="#">New video</a> on your wall.</span>
                                <span class="time">Yesterday</span>
                            </div>
                            <div class="media-right">
                                <div class="added-icon">
                                    <Youtube />
                                </div>
                            </div>
                        </div>
                        {/* Notification */}
                        <div class="media">
                            <figure class="media-left">
                                <p class="image">
                                    <img src="https://xsgames.co/randomusers/avatar.php?g=male" data-demo-src="assets/img/avatars/elise.jpg" alt="" />
                                </p>
                            </figure>
                            <div class="media-content">
                                <span><a href="#">Elise Walker</a> shared an <a href="#">Image</a> with you an 2 other people.</span>
                                <span class="time">2 days ago</span>
                            </div>
                            <div class="media-right">
                                <div class="added-icon">
                                    <Image />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-drop-footer">
                        <a href="#">View All</a>
                    </div>
                </div>
            </div>
        </div>
    )
}