import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss']
})
export class WhatWeOfferComponent implements OnInit {

  offers = [
    {
      img:"/assets/social_media.svg" ,
      name:"SOCIAL MEDIA MANAGEMENT" ,
      des:"Perfect for growing your brand’s social community and engage with the right audience. We manage everything from curation of content to management of comments and everything in between."
    },
    {
      img:"/assets/social_growth.svg" ,
      name:"SOCIALS GROWTH CAMPAIGN" ,
      des:"Our social growth campaign will have your socials come alive. With constant growth and engagement you will be sure to have the thriving you’ve been looking for."
    },
    {
      img:"/assets/pranding.svg" ,
      name:"BRANDING & MEDIA" ,
      des:"Done right, branding offers a company an edge over the competition. So what exactly is branding, and why is it important for companies to integrate a well-rounded branding and media strategy?"
    },
    {
      img:"/assets/influencer.svg" ,
      name:"INFLUENCER MARKETING" ,
      des:"We will pair your business with influencers that speak to your audience. Influencer Marketing is the most effective way to reach a loyal audience."
    },
    {
      img:"/assets/social_paid.svg" ,
      name:"SOCIAL MEDIA PAID ADVERTISING" ,
      des:"Our ad campaigns will bring you the results your looking for. From brand awareness campaigns to lead funnels, we have got the tools to create the right ads for your business. Our re-targeting campaigns will be sure to get your visitors coming back to your site."
    },
    {
      img:"/assets/content.svg" ,
      name:"CONTENT MARKETING SERVICES" ,
      des:"We can create and provide your company with the best content marketing for your socials to improve online presence. Creating valuable and quality content helps boost conversions and improve customer retention."
    },
    
    

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
