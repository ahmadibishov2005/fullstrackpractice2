import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdPieChart } from "react-icons/md";
import {Helmet} from 'react-helmet'

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='shop'>
                <img src="" alt="" />
                <div className='shop-texts'>
                    <h1>Shop With Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                    <div className='shop-buttons'>
                        <div className='btn-one'><button >SHOP NOW</button></div>
                        <div className='btn-two'><button >CLUB MEMEBERSHIP</button></div>
                    </div>
                </div>
            </div>
            <div className='products'>
                <div className='products-text'>
                <h3 style={{color: "gray"}}>Popular Products</h3>
                <h1>Our Products</h1>
                <p style={{color: "gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                </div>
            </div>
            <div className='about'>
                <div className='about-img'>
                    <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt="" />
                    <div className='merchant'><h1>Trusted Merchant</h1><p>FOR 50 YEARS</p></div>
                </div>
                <div className='about-text'>
                    <h3 style={{ color: "gray" }}>Merchant Company</h3>
                    <h1>About Us</h1>
                    <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
            <div className='leadership'>
                <div className='leadership-text'>
                    <p style={{ color: "gray" }}>TEAM</p>
                    <h1>Leadership</h1>
                </div>
                <div className='leadership-cards'>
                    <div className='l-card'>
                        <img style={{ width: "70%" }} src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
                        <h3 style={{ color: "gray" }}>John Rooster</h3>
                        <p style={{ color: "gray" }}>Co-Founder, President</p>
                        <p style={{ color: "gray" }}>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                        <div className='l-icons'>
                            <p><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaLinkedin /></p>
                            <p><FaInstagram /></p>
                        </div>
                    </div>
                    <div className='l-card'>
                        <img style={{ width: "70%" }} src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
                        <h3 style={{ color: "gray" }}>John Rooster</h3>
                        <p style={{ color: "gray" }}>Co-Founder, President</p>
                        <p style={{ color: "gray" }}>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                        <div className='l-icons'>
                            <p><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaLinkedin /></p>
                            <p><FaInstagram /></p>
                        </div>
                    </div>
                    <div className='l-card'>
                        <img style={{ width: "70%" }} src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
                        <h3 style={{ color: "gray" }}>John Rooster</h3>
                        <p style={{ color: "gray" }}>Co-Founder, President</p>
                        <p style={{ color: "gray" }}>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                        <div className='l-icons'>
                            <p><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaLinkedin /></p>
                            <p><FaInstagram /></p>
                        </div>
                    </div>
                </div>
                <div className='services'>
                    <div className='service-text'>
                        <p style={{ color: "gray" }}>OUR SERVICES</p>
                        <h1>We Offer Services</h1>
                    </div>
                    <div className='service-stuff'>
                        <div className='s-card'>
                            <div className='s-icon'>
                                <MdPieChart />
                            </div>
                            <div className='s-text'>
                                <h3 style={{ color: "gray" }}>Business Consulting</h3>
                                <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <li> <a href="">Learn More</a></li>
                            </div>
                        </div>
                        <div className='s-card'>
                            <div className='s-icon'>
                                <MdPieChart />
                            </div>
                            <div className='s-text'>
                                <h3 style={{ color: "gray" }}>Business Consulting</h3>
                                <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <li> <a href="">Learn More</a></li>
                            </div>
                        </div>
                        <div className='s-card'>
                            <div className='s-icon'>
                                <MdPieChart />
                            </div>
                            <div className='s-text'>
                                <h3 style={{ color: "gray" }}>Business Consulting</h3>
                                <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <li> <a href="">Learn More</a></li>
                            </div>
                        </div>
                        <div className='s-card'>
                            <div className='s-icon'>
                                <MdPieChart />
                            </div>
                            <div className='s-text'>
                                <h3 style={{ color: "gray" }}>Business Consulting</h3>
                                <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <li> <a href="">Learn More</a></li>
                            </div>
                        </div>
                        <div className='s-card'>
                            <div className='s-icon'>
                                <MdPieChart />
                            </div>
                            <div className='s-text'>
                                <h3 style={{ color: "gray" }}>Business Consulting</h3>
                                <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <li> <a href="">Learn More</a></li>
                            </div>
                        </div>
                        <div className='s-card'>
                            <div className='s-icon'>
                                <MdPieChart />
                            </div>
                            <div className='s-text'>
                                <h3 style={{ color: "gray" }}>Business Consulting</h3>
                                <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <li> <a href="">Learn More</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='last'>
                <div className='l-card-one'><h2>About Us</h2><p style={{ color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p></div>
                <div className='l-card-two'><h2>Quick Links</h2>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Contact Us</a></li>
                </div>
                <div className='l-card-three'><h2>Follow Us</h2>
                    <div className='l-card-three-icons'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaInstagram />
                    </div>
                </div>
                <div className='l-card-four'><h2>Featured Product</h2>
                    <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" width="100%" />
                    <h2>Leather Brown Shoe</h2>
                    <p>$60.00</p>
                    <button className='last-btn'>ADD TO CARD</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage