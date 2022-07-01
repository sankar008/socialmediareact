import {iconFeatures} from './IconFeatures';

export const IconSection = () => {

    return (
        <div className="section landing-wrapper icons-section">
            <div className="container">

                {iconFeatures.map(iconRow => (
                    <div id="icon-features" className="columns">
                        <div className="column is-hidden-mobile"></div>
                        {iconRow.map(icon => (
                            <div className="column is-3">
                                <div className="landing-icon-box">
                                    <img src={icon.src} alt="" />
                                    <h3>{icon.title}</h3>
                                    <p>{icon.span}</p>
                                </div>
                            </div>
                            ))}
                            <div className="column is-hidden-mobile"></div>
                        </div>
                        )
                        )}
                       
                    </div>
        </div>

    )
}