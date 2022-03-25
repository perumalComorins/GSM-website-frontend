import { useContext, useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";
import SatisfactionCardSlider from "./satisfaction-card-slider";
import PeopleFaq from "./people-faq";
export default function IndividualPage() {
    const [datas, setDatas] = useState(null);
        useEffect(()=>{
            setDatas([1,2,3])
            
        },[])
        useEffect(()=>{
            if(datas && datas.length>0){
                {/* Banner jquery script Starts */}
                function BannerOverlays(){
                    var $banner_h;
                    var $banner_w;

                    $('.banner-cover').each(function(){
                        $banner_h = $('.banner-view.smallsize-banner img').height();
                        $banner_w = $('.banner-view.smallsize-banner img').width();
                        $(this).width($banner_w).height($banner_h);
                    });
                }

                $(window).resize(function(){ 
                    BannerOverlays();
                }); {/* Banner jquery script End */}
                $(document).ready(function () {
                    BannerOverlays();

                    {/* Faq slider jquery script Starts */}
                    var totalfaqItems = $('.faq-item').length;
                    var currentfaqIndex = $('div.faq-item.active').index() + 1;
                    var currentfaqIndex_active;
                    var downfaq_index;

                    // $('.testimonial_num').html(''+currentIndex+'/'+totalItems+'');
                    $('.faq_num').html(''+currentfaqIndex+'');

                    $(".faq-next").click(function(){
                        currentfaqIndex_active = $('div.faq-item.active').index() + 2;
                        if (totalfaqItems >= currentfaqIndex_active)
                        {
                            downfaq_index= $('div.faq-item.active').index() + 2;
                            //$('.testimonial_num').html(''+currentIndex_active+'/'+totalItems+'');
                            $('.faq_num').html(''+currentfaqIndex_active+'');
                        }
                    });

                    $(".faq-prev").click(function(){
                        downfaq_index=downfaq_index-1;
                        if (downfaq_index >= 1 ){
                            //$('.testimonial_num').html(''+downfaq_index+'/'+totalItems+'');
                            $('.faq_num').html(''+downfaq_index+'');
                        }
                    });
                });
            }
        },[datas])
    return (
        <div id="wrapper">
            <div className="overlay">
            </div>
            <Sidepanel/>
            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <header class="site-header site-navbar site-navbar-target">
                    <Header/>
                </header>
                <div className="site-bannersection">
                    <div className="banner-view smallsize-banner">
                        <img src="/assets/images/individual-banner-v1.png" className="banner-img"/>
                    </div>
                    <div className="banner-cover-overlay">
                        <div className="banner-cover individual-banner-content">
                            <div className="container container-1140 reset-padding banner-title-blog">
                                <h2 className="banner-title">Réussir grâce aux compétences du futur</h2>
                            </div>
                        </div>
                    </div>
                </div>

                

                <section className="site-body-container">
                    <div className="registeration-box">
                        <div className="container container-60 reset-padding text-center register-box-top">
                            <p className="reg-intro-content">
                                Découvrez nos formations et notre certification afin de monter en compétence 
                                et vous faire certifier pour le titre niveau 4 "Réparateur(trice) de produits nomades
                            </p>
                            <button type="button" className="btn gsm-bg-individual btn-gsm-lg">S’inscrire</button>
                        </div>
                        <div className="container container-70 reset-padding text-center register-box-bottom">
                            <h2 className="section-title individual-text">Développe tes talents pour intégrer les équipes de demain</h2>
                            <p className="section-content individual-text">
                                Découvrez nos modules et nos formations qui vous préparent à intégrer le secteur 
                                de la réparation des produits nomades. Découvrez l'indice de réparabilité, 
                                la réparation en sécurité et en conformité ou encore l'initiation à la microsoudure 
                                dispensées par des professionnels du secteur. Inscris toi et réserves ta place dans 
                                la formation (nombre d’apprenants par cours limité)
                            </p>
                        </div>
                    </div>

                    <SatisfactionCardSlider />
                    <PeopleFaq/>
                    
                    <div className="training-initial-formSection">
                        <div className="container container-70 reset-padding">
                            <h3 className="train-title individual-text text-center">Prêt à vous former ?</h3>
                            <div className="register-section">
                                <h3 className="reg-session-title individual-text">Inscrivez-vous à la prochaine session</h3>
                                <form className="register-initial-form">
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Choisissez votre formation</label>
                                        <div className="dropdown gsmDropdown">
                                            <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                Nom du cours
                                            </a>
                                            <ul className="dropdown-menu gsm-dropdown-menu" >
                                                <hr />
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 4</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 3</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Indicateurs de qualité</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Choisissez votre formation</label>
                                        <div className="dropdown gsmDropdown">
                                            <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                Ville
                                            </a>
                                            <ul className="dropdown-menu gsm-dropdown-menu" >
                                                <hr />
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 4</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 3</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Indicateurs de qualité</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="form-group gsm-form-group">
                                    <label className="gsm-form-label individual-text">Choisissez votre date</label>
                                    <div className="dropdown gsmDropdown">
                                            <a className="dropdown-toggle gsm-dropdown-toggle active-choose" data-toggle="dropdown" aria-expanded="false">
                                                05 julliet 2021 to 06 Septembre 2021 - Fore Noon
                                            </a>
                                            <ul className="dropdown-menu gsm-dropdown-menu">
                                                <hr />
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 4</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 3</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Indicateurs de qualité</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="container container-65 reset-padding d-none d-lg-block">
                        <p className="individual-text text-center gsm-site-para">
                            Nos formations sont accessibles aux personnes en situation de handicap. 
                            Si vous avez des besoins spécifiques, n'hésitez pas à en informer notre référent handicap : 
                            Clément Berger de Nomazy sur l'adresse "relation-candidat@gsmmaster.fr"
                        </p>
                    </div>

                    <div className="container container-55 query-blog-container reset-padding d-none d-lg-block">
                        <div className="row reset-margin">
                            <div className="col query-column reset-padding">
                                <p className="query-text individual-text text-right">If you have any questions in filling this application or curriculum related questions ask us here.</p>
                            </div>
                            <div className="col query-column reset-padding text-center">
                                <button type="button" className="btn gsm-bg-individual btn-gsm-lg">Une Question?</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="training-regitration-formSection">
                        <div className="container container-70 reset-padding">
                            <div className="register-section">
                                <form className="register-registration-form">
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Prénom*</label>
                                        <input type="text" className="form-control" placeholder="Prénom" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Nom*</label>
                                        <input type="text" className="form-control" placeholder="Nom" />
                                        </div>
                                    </div>
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Email*</label>
                                        <input type="text" className="form-control" placeholder="Adresse mail" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Téléphone*</label>
                                        <input type="text" className="form-control" placeholder="01 40 05 03 43" />
                                        </div>
                                    </div>

                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Date de naissance*</label>
                                        <input type="date" className="form-control" placeholder="12/09/1985" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <div className="form-row twospaces-row reset-margin">
                                            <div className="form-group gsm-form-group col-md-6">
                                                <label className="gsm-form-label individual-text">Demandeur d’emploi*</label>
                                                <div className="dropdown gsmDropdown">
                                                    <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                        Oui / Non
                                                    </a>
                                                    <ul className="dropdown-menu gsm-dropdown-menu" >
                                                        <hr />
                                                        <li><a href="#" className="gsm-dropdown-link">Oui</a></li>
                                                        <li><a href="#" className="gsm-dropdown-link">Non</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="form-group gsm-form-group col-md-6">
                                                <label className="gsm-form-label individual-text">Si oui identifiant PE</label>
                                                <input type="text" className="form-control" placeholder="ID Pôle emploi" />
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="form-row singlespace-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-12">
                                        <label className="gsm-form-label individual-text">Adresse Postale*</label>
                                        <input type="text" className="form-control" placeholder="Numéro et libellé de la voie" />
                                        </div>
                                    </div>
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Code postal*</label>
                                        <input type="text" className="form-control" placeholder="Code postale" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Pays*</label>
                                        <input type="text" className="form-control" placeholder="Pays de résidence" />
                                        </div>
                                    </div>
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Etat*</label>
                                        <input type="text" className="form-control" placeholder="Etat de résidence" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Ville*</label>
                                        <input type="text" className="form-control" placeholder="Ville de résidence" />
                                        </div>
                                    </div>
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <div className="reset-padding">
                                            <label className="gsm-form-label individual-text">Avez-vous de l’expérience dans la réparation ? </label>
                                            <input type="text" className="form-control" placeholder="Etat de résidence" />
                                        </div>
                                        <div className="reset-padding mt-4">
                                            <label className="gsm-form-label individual-text">Vous nous avez connu via </label>
                                            <input type="text" className="form-control" placeholder="Etat de résidence" />
                                        </div>
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Votre demande</label>
                                        <textarea className="form-control" placeholder="Préciser votre demande" rows="5"></textarea>
                                        </div>
                                    </div>
                                    
                                    <p className="regitration-disclaimer">By submitting your info in the form above, you agree to our Terms of Use and Privacy Policy. 
                                    We may use this info to contact you and/or use data from third parties to personalize your 
                                    experience.</p>
                                    <div className="text-center">
                                    <button type="button" className="btn gsm-bg-individual btn-gsm-lg">Je m’inscris</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>


                        

                </section>

                <footer className="site-footer">
                    <Footer/>
                </footer>  
                
            </div>
        </div>
    )
}