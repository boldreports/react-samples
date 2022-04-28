import React, { Component } from 'react';
import data from './../../samples.json';
const otherPlatforms = data.otherPlatforms;
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
            if (curPlatform.indexOf('asp') !== -1) {
                return sampleName.split(/(?=[A-Z])/).map((name) => {
                    return name.toLowerCase();
                }).join('-');

            } else {
                return sampleName.split(/-/).map((name) => {
                    return name.charAt(0).toUpperCase() + name.slice(1);
                }).join('');

            }
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
            let url = location.origin.indexOf('demos.boldreports.com') !== -1 ? '/' : '/demos/';
            window.open(location.origin + url + data.otherPlatforms[targetPlatform] + reportPath, '_self');
        }
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
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
        return (
            <ej-header>
                <div className="ej-sb-header">
                    <div className="ej-sb-left-side">
                        {this.props.isViewer ?
                            <div className="ej-sb-hamburger-icon ej-sb-icons" onClick={this.humbergerClick}></div> : ''}
                        {this.props.isViewer ? <div className="ej-sb-platform-name">Bold Reports for React</div> : <a id="home_page" href="/" target="_blank">
                            <div className="ej-platform-name">Bold Reports for React</div>
                        </a>}
                        {this.props.isViewer ?
                            <div className={`dropdown show`} ref={this.dropdownContainer}>
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.handleButtonClick}>
                                </button>
                                {this.state.open && (<div className={`dropdown-menu show`} aria-labelledby="dropdownMenuButton">{Object.keys(otherPlatforms).map((name, index) => <a className={`dropdown-item ${name.includes('React') ? 'active' : ''}`} key={index} onClick={this.platformSwitcher.bind(this)}>{name}</a>)}</div>)}
                            </div> :

                            ''}
                    </div>
                    <div className="ej-sb-right-side">
                        <a href="https://help.boldreports.com/embedded-reporting/react-reporting/" title="Documentation" target="_blank" rel="noreferrer"><span
                            className="ej-sb-header-icons sb-icon-documentation"></span></a>
                        <a href="https://www.boldreports.com" title="Product Details" target="_blank" rel="noreferrer"><span
                            className="ej-sb-header-icons sb-icon-product"></span></a>
                        <a href="https://www.boldreports.com/embedded-reporting/pricing" title="Download Now" target="_blank" rel="noreferrer"><span
                            className="ej-sb-header-icons sb-icon-download"></span></a>
                        <div className="ej-sb-divider"></div>
                        <a className="ej-sb-button" href="https://on-premise-demo.boldreports.com" title="Report Server" target="_blank" rel="noreferrer"
                        >Explore Report Server</a>
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