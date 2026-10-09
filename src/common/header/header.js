import React, { Component } from 'react';
import data from './../../samples.json';
const otherPlatforms = data.otherPlatforms;

function loadTrackingScript() {
    var script = document.createElement('script');
    script.src = 'https://cdn.boldreports.com/website/js/tracking.js?v=' + new Date().getTime();
    script.async = true;
    document.head.appendChild(script);
}
class Header extends Component {
    dropdownContainer = React.createRef();
    state = {
        open: false,
    };
    handleButtonClick = () => {
        this.setState((state) => {
            return {
                open: !state.open,
            };
        });
    };
    humbergerClick = () => {
        if (window.matchMedia('(max-width:550px)').matches) {
            let mobileOverlay = document.querySelector('.mobile-overlay');
            let mobileSideBar = document.querySelector('ej-sidebar');
            if (mobileSideBar.classList.contains('ej-toc-mobile-slide-left')) {
                mobileSideBar.classList.remove('ej-toc-mobile-slide-left');
                mobileOverlay.classList.add('e-hidden');
            } else {
                mobileSideBar.classList.add('ej-toc-mobile-slide-left');
                mobileOverlay.classList.remove('e-hidden');
            }
        } else {
            let element = document.getElementsByClassName("ej-main-parent-content")[0];
            element.className = !element.className.includes("ej-toc-slide-left") ? element.className + " ej-toc-slide-left" : element.className.replace("ej-toc-slide-left", "");
        }
    }
    getRouterPath(curPlatform, targetplatform, sampleName) {
        curPlatform = curPlatform.toLowerCase();
        targetplatform = targetplatform.toLowerCase();
        const samePath = (curPlatform.indexOf('asp') === -1 && targetplatform.indexOf('asp') === -1 && targetplatform.indexOf('blazor') === -1) ||
            (curPlatform.indexOf('asp') >= 0 && targetplatform.indexOf('asp') >= 0);
        if (samePath) {
            return sampleName;
        } else {
            return sampleName.split(/(?=[A-Z])/).map((name) => {
                return name.toLowerCase();
            }).join('-');
        }
    }
    platformSwitcher(e) {
        if (e.target.tagName == 'A') {
            let targetPlatform = e.target.innerText.trim();
            let routerData = getRouterData(window.location.hash.replace('#/', ''));
            let platformBasePath;
            let platformSamplePath;
            const sampleName = routerData.reportRouterPath ? routerData.reportRouterPath : routerData.reportBasePath;
            if (routerData.reportRouterPath) {
                platformBasePath = this.getRouterPath(data.platform, targetPlatform, routerData.reportBasePath);
            }
            platformSamplePath = this.getRouterPath(data.platform, targetPlatform, sampleName);
            const reportPath = routerData.reportRouterPath ? (platformBasePath + '/' + platformSamplePath) : platformSamplePath;
            window.open(location.origin + "/" + data.otherPlatforms[targetPlatform] + reportPath, '_self');
        }
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        loadTrackingScript();
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = (event) => {
        if (
            this.dropdownContainer.current &&
            !this.dropdownContainer.current.contains(event.target)
        ) {
            this.setState({
                open: false,
            });
        }
    };
    render() {
        const showFrameworkTabs = this.props.isViewer || this.props.isPreview || this.props.isDesigner;
        const isDesignerHeader = this.props.isDesigner || (!this.props.isViewer && !this.props.isPreview);
        return (
            <ej-header>
                <div className={`ej-sb-header ${isDesignerHeader ? 'designer-header' : ''}`}>
                    <div className="ej-sb-left-side">
                        {this.props.isViewer ?
                            <div className="ej-sb-hamburger-icon ej-sb-icons" onClick={this.humbergerClick}></div> : ''}
                        <a href="/" className="ej-sb-logo-link">
                            <img src="https://cdn.boldreports.com/website/images/logo/bold-reports-logo.svg" alt="Bold Reports" className="ej-sb-logo" />
                        </a>
                        {showFrameworkTabs ?
                            <React.Fragment>
                                <div className="ej-sb-header-divider"></div>
                                <h1 className='framework'>Frameworks</h1>
                                <div className={`ej-sb-framework-tabs`} ref={this.dropdownContainer}>
                                    {Object.keys(otherPlatforms).map((name, index) => {
                                        const platformSlug = name === 'JavaScript' ? 'javascript'
                                            : name === 'ASP.NET Core' ? ''
                                            : name.toLowerCase();
                                        const isLocal = !window.location.hostname.includes('boldreports.com');
                                        const href = isLocal ? (platformSlug === '' ? '/' : `/${platformSlug}.html`) : (platformSlug === '' ? '/home/' : `/home/${platformSlug}.html`);
                                        const isActive = name === data.platform;
                                        return (
                                            <a
                                                key={index}
                                                href={href}
                                                className={`ej-sb-framework-tab ${isActive ? 'active' : ''}`}
                                                onClick={isActive ? (e) => e.preventDefault() : undefined}
                                            >
                                                {name}
                                            </a>
                                        );
                                    })}
                                </div>
                            </React.Fragment> :
                            ''}
                    </div>
                    <div className="ej-sb-right-side">
                        {/* We hided this element as per management instruction  */}
                        {/* <a className="ej-sb-button nav-link bold-schedule-demo" href="https://www.boldreports.com/schedule-free-demo" target="_blank">Schedule Free Demo</a> */}
                        <a className="ej-sb-button nav-link product-detail" href={this.props.isViewer || this.props.isPreview ? 'https://www.boldreports.com/embedded-reporting/react-report-viewer' : 'https://www.boldreports.com/embedded-reporting/react-report-designer'} target="_blank">Product Details</a>
                        <a className="ej-sb-button nav-link try-it-free" href={data.banner.freeTrialUrl} target="_blank">Try it Free</a>
                    </div>
                </div>
            </ej-header>
        );
    }
}

export { Header };

function getRouterData(path, basePathIndex = 0, routerPathIndex = 1) {
    const modifiedUrl = path.indexOf('?') !== -1 ? path.substring(0, path.indexOf('?')) : path;
    const spilttedUrl = modifiedUrl.split('/');
    const reportBasePath = spilttedUrl[basePathIndex];
    const reportRouterPath = spilttedUrl[routerPathIndex] ? spilttedUrl[routerPathIndex] : '';
    return { reportBasePath: reportBasePath, reportRouterPath: reportRouterPath };
}
