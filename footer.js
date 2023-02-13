const footerTemplate = document.createElement('template');
headerTemplate.innerHTML = `


    <style>
    
        .footer {
            background-color: #fafafa;
            margin: 50px 0 -30px 0;
            padding: 30px 0;
            border-top: 1px solid #f5f5f5;
        }

        .social-circle li a {
            height: 36px;
            width: 36px;
            color: #4c5667;
            border-radius: 50%;
            font-size: 16px;
            display: inline-block;
            line-height: 36px;
            background-color: #ededed;
            -webkit-transition: all 0.5s ease-in-out;
            -moz-transition: all 0.5s ease-in-out;
            -o-transition: all 0.5s ease-in-out;
            transition: all 0.5s ease-in-out;
        }

        /* baasith */

        .social-circle li a:nth-child(1):hover {
            color: black ;
            background-color: grey;
        }


        .copyright-txt {
            margin-top: 20px;
        }

    </style>

<footer class="footer">
<div class="container">

    <div class="row">
        <div class="col-lg-12">
            <div class="text-center">
                <div class="logo center-block"><img src="images/logo.png" alt="" class=""></div>

                <ul class="list-inline social-circle margin-t-30">
                    <li class="list-inline-item">
                        <a href="#"> <i class="mdi mdi-facebook"></i> </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#"> <i class="mdi mdi-twitter"></i> </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#"> <i class="mdi mdi-google-plus"></i> </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#"> <i class="mdi mdi-apple"></i> </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#"> <i class="mdi mdi-instagram"></i> </a>
                    </li>
                </ul>

                <p class="text-muted m-b-0 copyright-txt"> © Whistle Jersey 2023 </p>

            </div>
        </div>
    </div>
    <!-- end row -->

</div>
</footer>
`

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);