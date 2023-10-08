import { Link } from "react-router-dom";
import '../styles/MainStyles.css';
import Logo from '../assets/images/logo.png'
import FaceBookImg from '../assets/images/facebook.jpeg'

const MainScreen = () => {
    return (
        <>
            <header class="header">

                <nav class="header-navigation">
                    <h1 class="header-navigation__logo">
                        Green Import<br />
                    </h1>
                    <ul class="header-navigation__list">
                        <li class="header-navigation__list__items"><Link to="/prices" class="list__items__link">PRICES</Link></li>
                        <li class="header-navigation__list__items"><Link to="/home" class="list__items__link">HOME</Link></li>

                    </ul>
                </nav>

                <section class="header__section">
                    <div class="inline">
                        <h2 class="header__section__title">კომპანია green import-ი გთავაზობთ ავტომობილის შეძენასა და ტრანსპორტირებას აშშ-ს წამყვანი აუქციონებიდან.
</h2>

                    </div>

                    <div class="header__section__circle">
                        <div class="header__section__circle__inside">
                            {/* <span class="sircle-size">380 x 380px</span> */}
                            <img src={Logo} alt="Logo" class="header__section__circle__inside__logo" />
                        </div>
                    </div>
                </section>
            </header>


            <main class="main">
                <section class="main__top">
                    <div class="flex-center">
                        <div class="latest__work">რას გთავაზობთ</div>
                    </div>
                    <div class="container space-between">

                        <div class="main__top__item">
                            <div class="main__top__item--img">120X120px</div>
                            <span class="main__top__item--text">ჩვენს კომპანიაში მომსახურებას გაგიწევენ პროფესიონალი დილერები ✅  რაც შეამცირებს რისკებს და ავტომობილის ყიდვის პროცესს უფრო კომფორტულს გახდის 🚘</span>
                        </div>

                        <div class="main__top__item">
                            <div class="main__top__item--img">120X120px</div>
                            <span class="main__top__item--text">ჩვენი კომპანია უზრუნველყოფს ავტომობილის უსაფრთხო ტრანსპორტირებას დროის მცირე პერიოდში.</span>
                        </div>

                        <div class="main__top__item">
                            <div class="main__top__item--img">120X120px</div>
                            <span class="main__top__item--text">ჩვენთან ყველანაირი რისკი დაზღვეულია ავტომობილის ყიდვის პროცესიდან  საქართველოს პორტამდე.</span>
                        </div>

                        <div class="main__top__item">
                            <div class="main__top__item--img">120X120px</div>
                            <span class="main__top__item--text">ჩვენს კომპანიაში ყველაფერი გამჭირვალეა მომხმარებელს შეუძლია სრული წვდომა ჰქონდეს როგორც აუქციონებზე ასევე ავტომობილის ტრანსპორტირების პროცესში.</span>
                        </div>


                    </div>

                    <div class="flex-center">
                        <div class="latest__work">ჩვენს შესახებ</div>
                    </div>

                </section>


                <section class="main__bottom">

                    <div class="container flex-bottom">


                        <div class="main__bottom__item--title">კომპანია green impor ი არის პროფესიონალი თანამშრომლებისგან შემდგარი გუნდი რომელიც გაგიწევთ გიდობას ავტო სამყაროში და მანქანის შესყიდვის პროცესს მარტივს და სასიამოვნოს გახდის</div>


                    </div>
                </section>
            </main>
            <footer class="footer">
                {/* <div class="footer__top flex center">
                    <div class="wrapper flex space-between">
                        <div class="footer__top__containers">
                            <h3 class="footer__top__container-header">from the blog</h3>
                            <div class="footer__post-title"> <span class="footer__green"> post title</span></div>
                            <div class="footer__admin"> <span class="footer__admin-green"> admin</span>
                                <span>domainname.com</span></div>

                            <div class="footer__date">Friday, 6th April 2000</div>
                            <p class="footer__text">Vestibulumaccumsan egestibulum eu justo convallis
                            augue estas aenean elit intesque sed. Facilispede estibulum nulla
                            orna nisl velit elit ac aliquat non tincidunt.
                                Namjusto cras urna urnaretra lor urna neque sed quis orci nulla.</p>
                            <div class="footer__read-more"><span class="footer__green">read more »</span></div>

                        </div>

                        <div class="footer__top__containers">
                            <h3 class="footer__top__container-header">quick links</h3>
                            <ul class="footer__list">
                                <li class="footer__list-items">» <a href="#" class="footer__green">Lorem ipsum dolor sit</a></li>
                                <li class="footer__list-items">» <a href="#" class="footer__green">Amet consectetur</a></li>
                                <li class="footer__list-items">» <a href="#" class="footer__green">Praesent vel sem id</a></li>
                                <li class="footer__list-items">» <a href="#" class="footer__green">Curabitur hendrerit est</a></li>
                                <li class="footer__list-items">» <a href="#" class="footer__green">Aliquam eget erat nec sapien</a></li>
                                <li class="footer__list-items">» <a href="#" class="footer__green">Cras id augue nunc</a></li>
                                <li class="footer__list-items">» <a href="#" class="footer__green">Sed a nulla urna</a></li>
                            </ul>
                        </div>

                        <div class="footer__top__containers">
                            <h3 class="footer__top__container-header">latest tweets</h3>

                            <p class="footer__text"><span class="footer__green">@namehere</span> Justoid nonummy laoreet phasellent penatoque
                                in antesque pellus elis eget tincidunt. Nequatdui laorem justo a
                                non tellus laoremut vitae doloreet 1 day ago</p>

                            <p class="footer__text"><span class="footer__green">@namehere</span> Justoid nonummy laoreet phasellent penatoque
                                in antesque pellus elis eget tincidunt. Nequatdui laorem justo a
                                non tellus laoremut vitae doloreet 1 day ago</p>
                        </div>
                        <div class="footer__top__containers">
                            <h3 class="footer__top__container-header">contact us</h3>

                            <input type="text" placeholder="Full Name" class="footer__input" />
                            <input type="text" placeholder="Email Address" class="footer__input" />
                            <input type="text" placeholder="Subject" class="footer__input" />
                            <input type="text" placeholder="Message" class="footer__input input-big" />
                            <button class="footer__submit-btn">Submit</button>
                        </div>
                    </div>
                </div> */}


                <div class="contactUsContainer">
                    <h3 class="footer__top__container-header">Contact Us: </h3>
                    <a href="https://www.facebook.com/profile.php?id=100095605083110" target="_blank">
                        <img src={FaceBookImg} alt="facebook" class="facebookImg" />
                    </a>

                </div>


                {/* <div class="footer__bottom flex center">
                    <div class="wrapper flex space-between">
                        <span >Copyright © 2013 Domain Name - All Rights Reserved</span>
                        <span>Template by OS Templates</span>
                    </div>
                </div> */}


            </footer >

        </>
    );
}

export default MainScreen;
