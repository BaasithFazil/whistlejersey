const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">

<!-- Bootstrap Css-->
<link rel="stylesheet" type="text/css" href="/zoyothemes.com/eagle/css/bootstrap.min.css"/>

<!-- Materialdesign icon Css-->
<link rel="stylesheet" type="text/css" href="/zoyothemes.com/eagle/css/materialdesignicons.min.css"/>
<!-- Pe 7 icon Css-->
<link rel="stylesheet" type="text/css" href="/zoyothemes.com/eagle/css/pe-icon-7-stroke.css"/>

<!-- Custom Css -->
<link rel="stylesheet" type="text/css" href="/zoyothemes.com/eagle/css/style.css"/>


        <style>

        @media (min-width: 769px) {
            ul.nav li:hover > ul.dropdown-menu {
                display: block;
            }
        
            #navbar {
                text-align: center;
            }
        
            .nav>li>a {
                padding-top: 20px;
                padding-bottom: 20px;
            }
        }
        
        @media (max-width: 768px){ 
            body {
                padding: 0;
            }
            .dropdown-menu > li > a:hover, .dropdown-menu > .active > a:hover {
                text-decoration: none;
                color:#70a67c !important;
                transition: all 0.3s;
            }    
        }
        
        @media (max-width: 767px){ 
            .sidebar {
                padding-top: 50px;
                padding-left: 0;
            }
            .navbar-custom .navbar-nav>li>a {
                line-height: 24px;
            }
            .page-title h2 {
                line-height: 36px;
                font-size: 22px;
                margin-top: 40px;
            }
        }
        .navbar-custom {
            background-color: #ffffff;
            margin-bottom: 0px;
            width: 100%;
            z-index: 1000;
            border: none;
            color: #333;
            border-radius: 0px;
            position: relative;
        }
        
        .logo>img {
            height:42px;
        }
        
        .logo{
            padding: 19px 0px;
            height: 80px;
            line-height: 40px;
            font-weight: 700;
            font-size: 24px;
            color: #333 !important;
        }
        
        .navbar-custom .navbar-nav>li>a {
            font-size: 14px;
            line-height: 40px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        
        .navbar-light .navbar-nav .nav-link {
            color:#777;
            padding: 10px 15px;
        }
        
        .navbar-toggler {
            padding: 4px 10px;
            font-size: 24px;
        }
        
        .navbar-toggler:hover {
            background-color: #ddd;
        }
        
        .navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover {
            color: #000;
            background-color:transparent;
        }
        
        
        .navbar-custom .navbar-nav>li>a:hover{
            color: #333;
            transition:all 0.3s;
        }
        
        .dropdown:hover .dropdown-content {
            display: block;
        }
        
        .dropdown-menu>li>a{
            display: block;
            padding: 10px 20px;
            clear: both;
            line-height: 1.42857143;
            color: #666;
            white-space: nowrap;
            font-weight: 400;
            font-size: 13px;
        }
        
        .dropdown-menu > li > a:hover, .dropdown-menu > .active > a:hover {
            text-decoration: none;
            color:#70a67c;
            transition: all 0.3s;
            background-color: transparent;
        } 
        
        .dropdown-menu>li:active>a,.dropdown-menu>li:hover>a {
            color: #70a67c;
        }
        
        .dropdown-submenu{
            position:relative;
        }
        
        .dropdown-submenu>.dropdown-menu{
            top:0;
            left:100%;
            right: auto;
            margin-top: -3px;
            -webkit-border-radius:0 6px 6px 6px;
            -moz-border-radius:0 6px 6px 6px;
            border-radius:0 6px 6px 6px;
        }
        
        .navbar-custom li.dropdown:last-of-type .dropdown-submenu>.dropdown-menu {
            right: 100%;
            left: auto;
        }
        
        .dropdown-submenu.pull-left{
            float:none;
        }
        
        .dropdown-submenu.pull-left>.dropdown-menu{
            left:-100%;
            margin-left:10px;
            -webkit-border-radius:6px 0 6px 6px;
            -moz-border-radius:6px 0 6px 6px;
            border-radius:6px 0 6px 6px;
        }
        
        .submenu-arrow {
            position: absolute;
            right: 8px;
            font-size: 16px;
            margin-top: -1px;
        }
        
        .navbar-custom .dropdown-menu {
            transition: all .3s ease;
            min-width: 200px;
            background-color: #fff;
            border: 1px solid #eee;
            border-radius: 4px;
            box-shadow: 0 0 18px 0 rgba(0,0,0,.05);
            padding: 10px;
        }
        
        .navbar-toggle{
            margin-top: 22px;
        }
        
        .navbar-custom .navbar-nav li.active-item > a{
            color: #70a67c;
        }
        </style>

        <nav class="navbar navbar-expand-lg navbar-default navbar-custom navbar-light">
        <div class="container">
                <a class="navbar-brand logo" href="index.html"><img src="/assets/logo/logo.png" alt=""></a>

            <div class="navbar-header">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="mdi mdi-menu"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" id="navbar-collapse-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="/index.html">Home</a></li>
                    <!-- <li class="nav-item"><a class="nav-link" href="/zoyothemes.com/eagle/about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li> -->
                    <li class="nav-item"><a class="nav-link" href="/zoyothemes.com/eagle/gallery.html">Gallery</a></li>
                    <!-- <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li> -->
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
        <nav>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);